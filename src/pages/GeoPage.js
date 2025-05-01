import React, { useState } from "react";
import Modal from "../components/Modal";
import VisualizationCard from "../components/VisualizationCard";

const geoVisualizations = [
  {
    file: "Q1_migrant_incidents_cluster_map.html",
    title: "Geographical Cluster Map",
    description: `The migrant_incidents_cluster_map.html visualizes the geographic distribution of migrant deaths and disappearances across North America. Each marker represents a fatal or missing migrant incident, clustered dynamically to show regional concentrations. The map highlights major hotspots of migrant vulnerability, particularly along the U.S.-Mexico border, and offers an interactive, human-centered view of migration crises through space and time.

It is an interactive web map created using Folium, a Python library that serves as a wrapper around Leaflet.js, a popular JavaScript library for interactive maps. This particular map visualizes migrant death incidents across North America. Each incident is represented as a marker placed on a basemap, and to handle the large volume of individual incidents without cluttering the map, these markers are grouped into clusters. This clustering automatically adjusts as users zoom in and out of the map, expanding into individual points when zoomed close and collapsing into summarized clusters when zoomed out.

Technical Features

- HTML+CSS+JS based map.
- Built automatically by Folium in Python.
- Clustering makes it easier to handle hundreds of markers without slowing down.
- Popups contain basic date, region, and deaths data for each point.

The map is centered approximately on latitude 30.69 and longitude -107.25, which places it near the U.S.-Mexico border — an area historically associated with significant migrant movements. It uses a light-themed basemap provided by CARTO (CartoDB positron tiles), giving it a clean and professional background suited for data visualization.

Significance

Overall, this visualization transforms otherwise abstract or hidden data about migrant fatalities into an immediate, visceral spatial story. It enables policymakers, researchers, advocates, and the public to engage critically with the realities faced by migrants, helping to ground policy discussions and humanitarian debates in concrete geographic realities.`,
  },


  {
    "file": "my_maps.html",
    "title": "Density Matrix Map",
    "description": "This visualization presents a matrix of heatmaps, each representing the geographic density of migrant disappearances attributed to specific causes across North America. The causes include:\n\n- Violence\n- Harsh environmental conditions / lack of adequate shelter, food, water\n- Accidental death\n- Drowning\n- Vehicle accident / death linked to hazardous transport\n- Sickness / lack of access to adequate healthcare\n\nEach heatmap is overlaid on a geographic map, with intensity gradients indicating higher concentrations of incidents related to that cause. Users can visually compare how different risk factors cluster spatially — for instance, drownings are more concentrated near water bodies along the southern U.S. border, while deaths from harsh environmental conditions span desert corridors.\n\nThis matrix layout provides a comparative spatial perspective, allowing policymakers, researchers, and humanitarian organizations to assess which regions face the most severe risks for each category of disappearance. It supports targeted intervention planning based on the dominant hazard in each corridor of migration.\n\nTechnically, the maps were generated using Folium and Leaflet heatmaps, with each subplot corresponding to a filtered cause category from the dataset. The visualization emphasizes the need for localized and cause-specific responses to migrant vulnerabilities."
  }
  
];

function GeoPage() {
  const [activeViz, setActiveViz] = useState(null);

  return (
    <div className="page-container">
      <h1 className="page-title">Geographical Analysis Visualizations</h1>
      <div className="viz-card-list">
        {geoVisualizations.map((viz) => (
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

export default GeoPage;
