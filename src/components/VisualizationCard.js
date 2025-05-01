import React from "react";

const VisualizationCard = ({ viz, onClick }) => {
  return (
    <div className="viz-card" onClick={onClick}>
      <h3>{viz.title}</h3>
      <p>{viz.description}</p>
    </div>
  );
};

export default VisualizationCard;
