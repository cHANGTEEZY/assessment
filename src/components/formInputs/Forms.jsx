import { useState } from "react";

const Forms = () => {
  const [incorporationFile, setIncorporationFile] = useState(null);
  const [logoFile, setLogoFile] = useState(null);

  //function to handle file drop functionlatiy
  const handleFileDrop = (event, type) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.size <= 50 * 1024 * 1024) {
        type === "incorporation"
          ? setIncorporationFile(file)
          : setLogoFile(file);
      } else {
        alert("File size should be less than 50MB");
      }
    }
  };

  //function to handle click functionaloty
  const handleFileSelect = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 50 * 1024 * 1024) {
        type === "incorporation"
          ? setIncorporationFile(file)
          : setLogoFile(file);
      } else {
        alert("File size should be less than 50MB");
      }
    }
  };

  return (
    <>
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
              Company Registration Number <span className="compulsary">*</span>
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
              Random Registration Number <span className="compulsary">*</span>
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
              Industry Name <span className="compulsary">*</span>
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
              Purpose of using fake form <span className="compulsary">*</span>
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
              Ek description to banta hai <span className="compulsary">*</span>
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

        {/* File upload section for Certification of Incorporation */}
        <div className="form-group">
          <label className="form-label">
            Certification of Incorporation <span className="compulsary">*</span>
          </label>
          <span className="upload-subtitle">
            Upload the Incorporation certificate
          </span>
          <div
            className="upload-area"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleFileDrop(e, "incorporation")}
          >
            <p>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("incorporation-upload").click()
                }
                className="upload-file-button"
              >
                Click to upload
              </button>
              or drag and drop
            </p>
            <p>Maximum file size 50 MB</p>
            <input
              type="file"
              accept="application/pdf,image/*"
              onChange={(e) => handleFileSelect(e, "incorporation")}
              style={{ display: "none" }}
              id="incorporation-upload"
            />

            {incorporationFile && <p>{incorporationFile.name}</p>}
          </div>
        </div>

        {/* File upload section for Company Logo */}
        <div className="form-group">
          <label className="form-label">
            Company Logo <span className="compulsary">*</span>
          </label>
          <span className="upload-subtitle">Upload the company logo</span>
          <div
            className="upload-area"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleFileDrop(e, "logo")}
          >
            <p>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("incorporation-upload").click()
                }
                className="upload-file-button"
              >
                Click to upload
              </button>
              or drag and drop
            </p>
            <p>Maximum file size 50 MB</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileSelect(e, "logo")}
              style={{ display: "none" }}
              id="logo-upload"
            />

            {logoFile && <p>{logoFile.name}</p>}
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
    </>
  );
};

export default Forms;
