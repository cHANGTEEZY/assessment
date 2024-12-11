import "./Form.css";

import Stepper from "./stepper/Stepper";
import Forms from "./formInputs/Forms";

export default function Form() {
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">Multi-Step Process Form Assignment</h1>
        <div className="progress-bar">
          <Stepper />
        </div>

        <section className="form-page">
          <h1 className="title">Tell us more about your business</h1>
          <p className="description">
            Your info is liek the Wi-Fi password-totally crucial for keeping
            things running, impressing the money folks, and making you get
            top-notch service without any buffering!
          </p>

          <Forms />
        </section>
      </div>
    </div>
  );
}
