import React, { useState } from "react";
import VisualizationCard from "../components/VisualizationCard";
import Modal from "../components/Modal";

const policyVisualizations = [
  {
    title: "Policy Impact Timeline",
    file: "migrant_incidents_timeline_1.html",
    description: "This dashboard provides an interactive visualization of migrant death and disappearance incidents across North America, organized month-by-month over multiple years. It also intersects important US immigration policy especially as it relates to category 'inadmissible' and 'expulsion' through vhanging regimes. The time scope spans from 2014- 2023. Built using Plotly and exported as a standalone HTML file, the dashboard enables dynamic exploration of temporal patterns in migrant vulnerability. Users can animate the timeline, filter incidents by year, and manually navigate across months using embedded dropdowns, sliders, and play/pause controls. By translating raw incident data into an accessible, animated timeline, the dashboard highlights seasonal spikes, long-term trends, and moments of intensified risk. It serves as a portable, fully offline tool for researchers, policymakers, humanitarian advocates, and educators seeking to visualize the spatial and temporal dimensions of migrant crises. The dashboard's self-contained design allows it to be easily shared and embedded in reports, presentations, and public-facing digital archives."
  }
];

function PolicyPage() {
  const [activeViz, setActiveViz] = useState(null);

  return (
    <div className="policy-page">
      <h2>Policy Impact</h2>
      <div className="viz-card-container">
        {policyVisualizations.map((viz) => (
          <VisualizationCard key={viz.file} viz={viz} onClick={() => setActiveViz(viz)} />
        ))}
      </div>
      {activeViz && (
        <Modal
          file={activeViz.file}
          title={activeViz.title}
          description={activeViz.description}
          onClose={() => setActiveViz(null)}
        />
      )}
    </div>
  );
}

export default PolicyPage;
