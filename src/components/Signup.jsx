"use client";

import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import "./Signup.css";

import HongKong from "../assets/flags/Hk.png";
import Singapore from "../assets/flags/singapore.png";
import Usa from "../assets/flags/usa.png";

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
  const [countdown, setCountdown] = useState(99);
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

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

  return (
    <div className="container">
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
                  <img
                    src={location.flagIcon}
                    alt={`${location.country} flag`}
                    width={24}
                    height={16}
                    className="card-flag"
                  />
                  <div className="card-content">
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
        <div className="form-container">
          <img
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={40}
            className="logo"
          />

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

          <button className="verify-button">Verify</button>

          <p className="countdown">
            Wait {countdown} seconds before requesting a new code.
          </p>

          <p className="terms">
            By continuing, you&apos;re agreeing to Nobody&apos;s{" "}
            <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and{" "}
            <a href="#">Cookie Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
