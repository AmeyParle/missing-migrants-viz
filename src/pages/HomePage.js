import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import VisualizationCard from "../components/VisualizationCard";

// Categories for the homepage navigation
const categories = [
  {
    title: "Overview",
    description: "Explore the main trends and patterns in migrant incidents.",
    route: "/overview",
  },
  {
    title: "Geographical Analysis",
    description: "Analyze migrant disappearances by location and density.",
    route: "/geo",
  },
  {
    title: "Cause Analysis",
    description: "Visualize the reasons and contributing factors behind incidents.",
    route: "/cause",
  },
  {
    title: "Policy Impact",
    description: "Examine how policy changes correlate with missing migrants.",
    route: "/policy",
  },
];

// The visualization card for the Correlation Matrix
const correlationViz = {
  file: "/visuals/correlation_matrix.jpg",
  title: "Correlation Matrix",
  description: "This matrix shows how various features are correlated with migrant disappearances.",
};

function HomePage() {
  const navigate = useNavigate();

  // Navigate to Correlation Matrix page instead of showing modal
  const handleCardClick = () => {
    navigate("/correlation-matrix");
  };

  return (
    <div className="homepage-wrapper">
      <h2 className="homepage-title">Missing Migrants Project</h2>

      {/* Introduction Section */}
      <section className="motivation-section">
        <h2>Introduction</h2>
        <p>
          The United States-Mexico border is a focal point for migration, where thousands of individuals from Central America, Mexico, and beyond attempt to cross in search of better opportunities or fleeing dangerous conditions. Unfortunately, this region has also become a site of increased migrant fatalities and disappearances, often exacerbated by hazardous environmental conditions, political policies, and the risks inherent in crossing dangerous terrain.
        </p>
        <p>
          Over the years, shifts in border enforcement strategies, environmental factors such as climate change, and the complex socio-political dynamics have significantly impacted the safety of migrants attempting to cross the border. Despite efforts to improve the tracking and monitoring of migrant incidents, gaps in data persist, complicating efforts to understand the true scope of the issue.
        </p>
        <p>
          This project seeks to explore key questions regarding the rate and causes of migrant incidents along the U.S. border. By investigating how border enforcement policies and climate factors affect migrant safety, and identifying the primary causes of death, this research aims to provide a comprehensive analysis of the challenges faced by migrants in this region.
        </p>
      </section>

      {/* Motivation Section */}
      <section className="motivation-section">
        <h3>Motivation</h3>
        <p>
          <strong>Real-world problem:</strong> Migration is a global issue, with over 281 million people living outside their birth countries. Thousands of migrants,
          including unaccompanied minors, go missing each year, particularly at the U.S.-Mexico border.<br /><br />
          <strong>Societal impact:</strong> Climate change, border enforcement, and policy gaps force migrants into dangerous, unregulated routes,
          increasing disappearances and humanitarian crises.<br /><br />
          <strong>Visualization techniques:</strong> Data-driven visualizations can reveal hidden patterns in migrant disappearances by integrating climate risks,
          border policies, and tracking gaps.<br /><br />
          <strong>Gap in International Organization for Migration Dataset:</strong> Existing databases lack comprehensive tracking of climate-induced disappearances, limiting effective policy
          responses and migrant safety measures.
        </p>
      </section>

      {/* Research Questions Section */}
      <section className="motivation-section">
        <h3>Research Questions</h3>
        <p>
          <strong>Q1.</strong> How have shifts in border enforcement policies influenced the rate and location of migrant incidents?<br /><br />
          <strong>Q2.</strong> How do climate factors amplify the risks faced by migrants along key migration corridors?<br /><br />
          <strong>Q3.</strong> What are the primary causes of death among migrants, and have these causes shifted over the years?<br /><br />
          <strong>Q4.</strong> What innovative methodologies can be used to address data gaps in tracking missing migrants and identifying unknown or mixed-status cases?
        </p>
      </section>

      {/* Team Members Section */}
      <section className="team-section">
        <h3>Team Members</h3>
        <ul className="team-list">
          <li>Malik Williams</li>
          <li>Amey Parle</li>
          <li>Noopur Divekar</li>
          <li>Uzoamaka Nwachukwu</li>
          <li>Neil Bhutada</li>
        </ul>
      </section>

      {/* Categories Grid */}
      <div className="card-grid">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="category-card"
            onClick={() => navigate(cat.route)}
          >
            <h2>{cat.title}</h2>
            <p>{cat.description}</p>
          </div>
        ))}

        {/* Correlation Matrix Card */}
        <VisualizationCard
          viz={correlationViz}
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
}

export default HomePage;
