import React from "react";

function Modal({ file, title, description, onClose }) {
  return (
    <div className="modal-overlay"  style={{ height: "1000" }}>
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{title}</h2>

        {/* Scaled iframe wrapper */}
        <div style={{ overflow: "auto", width: "100%", height: "600px" }}>
          <div
            style={{
              transform: "scale(0.95)",
              transformOrigin: "top left",
              width: "100%",
              height: "850",
            }}
          >
            <iframe
              src={`/visuals/${file}`}
              title={title}
              width="100%"
              height="850"
              style={{ border: "none", zoom: "0.85" }}
            />
          </div>
        </div>

        <p className="viz-description">{description}</p>
      </div>
    </div>
  );
}

export default Modal;
