import "./Stepper.css";
import { Check, Circle } from "lucide-react";

const steps = [
  { label: "Business Type", completed: true },
  { label: "Business Details", active: true },
  { label: "Authorized Representative" },
  { label: "Business Owners" },
  { label: "Company Directors" },
  { label: "Support Information" },
  { label: "Add Details" },
  { label: "Complete Registration" },
];

function Stepper() {
  const activeStep = steps.findIndex((step) => step.active);
  const progress = (activeStep / (steps.length - 1)) * 100;

  return (
    <div className="stepper">
      <div className="stepper-container">
        <div className="step-connector">
          <div
            className="step-connector-progress"
            style={{ width: `${progress}%` }}
          />
        </div>

        {steps.map((step) => (
          <div
            key={step.label}
            className={`step ${step.completed ? "completed" : ""} ${
              step.active ? "active" : ""
            }`}
          >
            <div className="step-icon">
              {step.completed ? <Check color="white" /> : ""}
              {step.active ? <Circle color="white" strokeWidth={2} /> : ""}
            </div>
            <span className="step-label">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stepper;
