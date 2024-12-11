import { useState, useEffect } from "react";
import { ArrowLeft, Flame } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import HongKong from "../assets/flags/Hk.png";
import Singapore from "../assets/flags/singapore.png";
import Usa from "../assets/flags/usa.png";

import "./Signup.css";

const locations = [
  {
    country: "Singapore",
    flagIcon: HongKong,
    title: "Singapore",
    type: "Head Office",
    company: "XYZ Pvt. Ltd.",
    address: "Road to nowhere, 06-404, 500 Internal Error",
  },
  {
    country: "Hong Kong",
    flagIcon: Singapore,
    title: "Hong Kong",
    type: "Branches",
    company: "XYZ Pte. Ltd.",
    address: "The Infinite Loop Office, 404 Timeout Plaza",
  },
  {
    country: "USA",
    flagIcon: Usa,
    title: "USA",
    type: "Branches",
    company: "XYZ Inc.",
    address: "Nulltown, Buglandia, 500 0xDEADBEE",
  },
];

export default function EmailVerification() {
  const navigate = useNavigate();

  const [resend, setResend] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [otp, setOtp] = useState([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCountdown(10);
      setResend(false);
    }
  }, [countdown]);

  const sendOtp = () => {
    const otpCode = [];
    for (let i = 0; i < 6; i++) {
      otpCode.push(Math.floor(Math.random() * 10));
    }
    setOtp(otpCode);
    toast.info(`Your OTP is: ${otpCode.join("")}`);
  };

  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 5) {
        const nextInput = document.querySelector(
          `input[name="code-${index + 1}"]`
        );
        if (nextInput) nextInput.focus();
      }
    }
  };

  const verify = () => {
    const enteredOtp = verificationCode.join("");
    const generatedOtp = otp.join("");

    if (enteredOtp === generatedOtp) {
      toast.success("Logging in");
      navigate("/form");
    } else {
      toast.error("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <button className="back-button">
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="cards-container">
          <h1 className="cards-title">Layout Cards</h1>
          <div className="location-cards">
            {locations.map((location) => (
              <div key={location.country} className="location-card">
                <div className="card-header">
                  <div className="card-content">
                    <img
                      src={location.flagIcon}
                      alt={`${location.country} flag`}
                      width={24}
                      height={16}
                      className="card-flag"
                    />
                    <h3 className="card-title">{location.title}</h3>
                    <p className="card-type">{location.type}</p>
                    <div className="card-details">
                      <p className="card-company">{location.company}</p>
                      <p className="card-address">{location.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="signup-form-container">
          <div className="signup-logo">
            <Flame color="red" />
            <p>Logoipsum</p>
          </div>

          <h2 className="title">Verify your Email</h2>
          <p className="description">
            Please enter the 6 digit code we just sent to s*********e@xyz.com
          </p>

          <div className="verification-inputs">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                name={`code-${index}`}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="verification-input"
              />
            ))}
          </div>

          <button className="verify-button" onClick={verify}>
            Verify
          </button>

          {resend ? (
            <p className="countdown">
              Wait {countdown} seconds before requesting a new code.
            </p>
          ) : (
            <p>
              Didn't receive a code?{" "}
              <button
                onClick={() => {
                  setResend(true);
                  sendOtp();
                }}
                className="resend"
              >
                Resend Code
              </button>
            </p>
          )}

          <p className="terms">
            By continuing, you&apos;re agreeing to Nobody&apos;s{" "}
            <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>{" "}
            <br /> and <a href="#">Cookie Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
