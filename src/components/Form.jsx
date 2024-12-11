"use client";

import "./Signup.css";

export default function Form() {
  return (
    <div className="container">
      <div className="form-container">
        <div className="progress-bar">
          <div className="progress-step active">Business Info</div>
          <div className="progress-step">Company Directory</div>
          <div className="progress-step">Support Information</div>
          <div className="progress-step">User Details</div>
          <div className="progress-step">Complete Registration</div>
        </div>

        <h1 className="title">Tell us more about your business</h1>
        <p className="description">
          Let's help you set up your business profile. Start by ensuring things
          running correctly, finalizing the billing info, and making sure you
        </p>

        <form>
          <div className="form-group">
            <label className="form-label">Legal Name *</label>
            <input
              type="text"
              className="form-input"
              placeholder="Legal name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Company Registration Number *</label>
            <input
              type="text"
              className="form-input"
              placeholder="Company Registration Number"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Website URL *</label>
            <input
              type="url"
              className="form-input"
              placeholder="Website URL"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Business Name *</label>
            <input
              type="text"
              className="form-input"
              placeholder="Business Name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Which discipline would you like to interact? *
            </label>
            <select className="form-input">
              <option value="">Select discipline</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Company Logo *</label>
            <div className="upload-area">
              <p>Click to upload or drag and drop</p>
              <p>Maximum file size 10 MB</p>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Certification of Incorporation *
            </label>
            <div className="upload-area">
              <p>Click to upload or drag and drop</p>
              <p>Maximum file size 10 MB</p>
            </div>
          </div>

          <div className="form-buttons">
            <button type="button" className="form-button button-previous">
              Previous
            </button>
            <button type="submit" className="form-button button-next">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
