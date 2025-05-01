// CorrelationMatrixPage.jsx
import React from "react";
import "../index.css"; // Reuse dark styles


function CorrelationMatrix() {
    return (
      <div className="homepage-wrapper">
        <h2 className="homepage-title">Correlation Matrix</h2>
  
        <img
          src="/visuals/correlation_matrix.jpg"
          alt="Correlation Matrix"
          className="correlation-image"
          style={{
            maxWidth: "90%",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)",
            margin: "2rem auto",
            display: "block",
          }}
        />
  
        <div
          style={{
            maxWidth: "850px",
            margin: "2rem auto",
            padding: "1.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent black background
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
          }}
        >
          <p
            style={{
              lineHeight: "1.6",
              fontSize: "1.1rem",
              color: "#eee",
              margin: 0,
            }}
          >
            This matrix shows how various features are correlated with migrant disappearances. <br /><br />
            It highlights patterns such as how environmental variables (e.g., extreme temperatures) relate to incident rates. This helps identify high-risk conditions and regions, ultimately informing better preventative strategies and resource allocation.
          </p>
        </div>
      </div>
    );
  }
  
  export default CorrelationMatrix;
  
