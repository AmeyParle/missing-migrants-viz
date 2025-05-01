import React, { useState } from "react";
import VisualizationCard from "../components/VisualizationCard";
import Modal from "../components/Modal";

const causeVisualizations = [
  {
    title: "Line Chart - Deaths",
    file: "Q3_plotly_line_chart (1).html",
    description: `This line chart visualizes the trend in the total number of migrant deaths and disappearances across North America from 2014 to 2024, categorized by cause: Accident, Environmental, Violence, and Other.

Each line represents a cause of death, showing how the number of incidents has changed annually:

- **Violence** peaks sharply around 2022, indicating a spike in deaths due to violent causes.
- **Environmental causes** (e.g., extreme temperatures, dehydration) maintain a steady level with moderate variation.
- **Accidents** show a steady but lower frequency compared to other categories.
- **Other** causes dominate the count in many years, suggesting a significant portion of deaths fall outside traditional categories or have unknown/complex causes.

This temporal trend helps identify years with surges in specific death causes, providing insights for time-based risk assessments and policy response planning.`
  },
  {
    title: "Stacked Bar Chart",
    file: "Q3_stacked_bar_chart.html",
    description: `This stacked bar chart presents the annual breakdown of migrant deaths and disappearances by cause from 2014 to 2024, using color-coded segments for each category (Violence, Other, Environmental, Accident).

Each bar shows the cumulative total per year, with the contribution of each cause clearly visible:

- The **"Other"** category consistently contributes the largest portion, indicating frequent unclassified or mixed-cause incidents.
- A noticeable increase in total deaths around **2021–2022** is largely driven by rises in Accident and Environmental categories.

The chart enables a direct comparison of relative proportions over the years, illustrating how the landscape of migrant risk factors has shifted over the last decade.

This visualization offers a cumulative perspective and highlights both dominant and emerging threats over time, supporting data-driven humanitarian strategy.`
  },
  {
    title: "Pie Chart by Cause",
    file: "Q3_total_deaths_by_cause.html",
    description: `This pie chart displays the overall proportion of migrant deaths and disappearances in North America from 2014 to 2024, categorized by cause: Accident, Environmental, Violence, and Other.

- The **"Other"** category accounts for the largest slice, reflecting a significant number of deaths where specific causes were unknown, mixed, or unclassified.
- **Violence** and **Environmental** causes make up moderate shares, highlighting the continued threats migrants face from both human conflict and natural hazards.
- **Accidents** represent the smallest share, though still significant, often related to transportation mishaps or structural failures.

This chart offers a high-level summary of the primary risk categories faced by migrants, making it useful for quick stakeholder briefings and identifying priority areas for further analysis.`
  }
];


function CausePage() {
  const [activeViz, setActiveViz] = useState(null);

  return (
    <div className="cause-page">
      <h2>Cause Analysis</h2>
      <div className="viz-card-container">
        {causeVisualizations.map((viz) => (
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

export default CausePage;