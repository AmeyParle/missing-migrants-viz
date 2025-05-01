// OverviewPage.js
import React, { useState } from "react";
import Modal from "../components/Modal";
import VisualizationCard from "../components/VisualizationCard";
import visualizations from "../data/visualizations";
const overviewVisualizations = visualizations.overview;

function OverviewPage() {
  const [activeViz, setActiveViz] = useState(null);

  return (
    <div className="page-container">
      <h1>Overview Visualizations</h1>
      <div className="viz-card-list">
        {overviewVisualizations.map((viz) => (
          <VisualizationCard key={viz.file} viz={viz} onClick={() => setActiveViz(viz)} />
        ))}
      </div>
      {activeViz && (
        <Modal
          title={activeViz.title}
          file={activeViz.file}
          description={activeViz.description}
          onClose={() => setActiveViz(null)}
        />
      )}
    </div>
  );
}

export default OverviewPage;
