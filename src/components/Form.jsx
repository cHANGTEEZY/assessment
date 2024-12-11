"use client";

import "./Form.css";

export default function Form() {
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">Multi-Step Process Form Assignment</h1>
        <div className="progress-bar">
          <div className="progress-step active">Business Info</div>
          <div className="progress-step">Authorized Representative</div>
          <div className="progress-step">Business Owners</div>
          <div className="progress-step">Company Directors</div>
          <div className="progress-step">Support Information</div>
          <div className="progress-step">Add Details</div>
          <div className="progress-step">Complete Registration</div>
        </div>

        <section className="form-page">
          <h1 className="title">Tell us more about your business</h1>
          <p className="description">
            Your info is liek the Wi-Fi password-totally crucial for keeping
            things running, impressing the money folks, and making you get
            top-notch service without any buffering!
          </p>

          <form>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">
                  Legal Name <span className="compulsary">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Legal name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Doing business as <span className="compulsary">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Doing business as"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Company Registration Number{" "}
                  <span className="compulsary">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Company Registration Number"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Random Registration Number{" "}
                  <span className="compulsary">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Random Registration Number"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Website URL <span className="compulsary">*</span>
                </label>
                <input
                  type="url"
                  className="form-input"
                  placeholder="Website URL"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  industry Name <span className="compulsary">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Industry Name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  One random Dropdown? <span className="compulsary">*</span>
                </label>
                <select className="form-input">
                  <option value="">Frontend</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Which dropdown would you like to select?{" "}
                  <span className="compulsary">*</span>
                </label>
                <select className="form-input">
                  <option value="design">Frontend</option>
                  <option value="development">Backend</option>
                  <option value="marketing">Full Stack</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Another Random Dropdown Appears{" "}
                  <span className="compulsary">*</span>
                </label>
                <select className="form-input">
                  <option value="design">Frontend</option>
                  <option value="development">Backend</option>
                  <option value="marketing">Full Stack</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Account Usage intent <span className="compulsary">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Account usage intent"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Random count per month <span className="compulsary">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Put the value get the answer"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Expected total visits in the page{" "}
                  <span className="compulsary">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="in number"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Purpose of using fake form{" "}
                  <span className="compulsary">*</span>
                </label>
                <textarea
                  type="text"
                  className="form-textarea"
                  placeholder="Purpose of using fake form"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Ek description to banta hai{" "}
                  <span className="compulsary">*</span>
                </label>
                <textarea
                  type="text"
                  className="form-textarea"
                  placeholder="Ek description to banta hai"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Contact email <span className="compulsary">*</span>
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Contact email"
                  required
                />
              </div>
            </div>
            {/* file upload section */}
            <div className="form-group">
              <label className="form-label">
                Certification of Incorporation{" "}
                <span className="compulsary">*</span>
              </label>
              <span className="upload-subtitle">
                Upload the Incorporation certificate
              </span>
              <div className="upload-area">
                <p>Click to upload or drag and drop</p>
                <p>Maximum file size 10 MB</p>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Company Logo <span className="compulsary">*</span>
              </label>
              <span className="upload-subtitle">Upload the company logo</span>
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
        </section>
      </div>
    </div>
  );
}
