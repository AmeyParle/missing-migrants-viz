// src/data/visualizations.js

const visualizations = {
  overview: [
    {
      file: "Q2_seasonal_trend_migrant_disappearances.html",
      title: "Seasonal trend of migrant disappearances",
      description: `1. Seasonal Trend Line Chart: Migrant Disappearances by Season
  
  This second visualization depicts a multi-line interactive line chart showing the seasonal trends in migrant disappearances over time. The X-axis represents the year, while the Y-axis captures the number of migrant disappearances recorded in that period. Each season—Winter, Spring, Summer, and Fall—is represented by a distinct color, enabling users to observe how disappearance patterns shift across different times of the year. The chart is fully interactive: hovering over any point reveals precise disappearance counts for that season and year, while clicking on the legend allows users to isolate or compare specific seasonal trends.
  
  The significance of this visualization lies in its ability to surface seasonal migration vulnerabilities. It highlights, for instance, whether summer months see higher disappearance rates due to factors such as heat waves, dehydration, or increased sea crossings, or whether winter brings different sets of challenges. By visualizing these patterns, the chart empowers humanitarian actors and policymakers to time interventions more effectively, designing seasonally responsive migration support strategies.
  
  Methodologically, the underlying data was processed by extracting the season from each incident's date, grouping the disappearances by year and season, and calculating the total number of missing or deceased migrants per combination. The chart was designed using Plotly Express (px.line), allowing for elegant hover interactivity, clear legends, and smooth background integration. Like the dual-axis plot, it was exported as a standalone interactive HTML file to ensure portability and ease of sharing.`,
    },
    {
      file: "Q2_dual_axis_migrant_disappearances_temperature.html",
      title: "Migrant Disappearances vs Temperature",
      description: `Dual Axis Plot: Migrant Disappearances vs Average Temperature
  
  This visualization presents a dual Y-axis interactive line chart that tracks two key variables over time: the number of migrant disappearances and the average temperature recorded per year. On the left Y-axis, the chart displays the annual total of migrant disappearances, while the right Y-axis tracks the corresponding average temperature (in degrees Celsius). Users can dynamically filter the data by selecting specific Regions of Incident or Months from the interactive dropdown menus, allowing for granular exploration of migration risks across different geographic and temporal scales. Certain critical years, such as 2015 and 2022, are highlighted with shaded vertical bands to mark periods of extreme climatic events, prompting viewers to consider how environmental shocks may intensify vulnerabilities along migration routes.
  
  The significance of this visualization lies in its ability to reveal potential correlations between climatic stress and human displacement. By bringing together disappearance counts and temperature trends, it encourages viewers to think critically about the ways in which environmental degradation, rising heat levels, and seasonal extremes intersect with humanitarian crises. Methodologically, the data was grouped by year and region/month, with total migrant disappearances and average temperatures calculated for each interval. The use of vertical annotations ensures that key climate years are visually emphasized.
  
  Technically, this visualization was created using Plotly Graph Objects (go.Figure), leveraging dual Y-axes, dynamic dropdown filters, and shaded rectangles for highlighting. It was exported as a fully interactive HTML file, making it accessible for offline analysis or integration into reports. The broader objective is to allow dynamic, user-driven exploration of whether, when, and where climate variability amplifies migrant vulnerabilities, supporting both academic research and policy discussions around climate justice and migration resilience.
  
  The overarching objective of this visualization is to provide historical insights into how seasonal rhythms interact with migration risks. By tracing fluctuations in disappearances across winter, spring, summer, and fall, the chart offers a deeper understanding of the environmental dimensions of migration, shedding light on periods of intensified vulnerability and the necessity of seasonally attuned responses.`,
    },
  ],
  
    geographical: [
      {
        file: "Q1_migrant_incidents_cluster_map.html",
        title: "Cluster Map",
        description: "Shows clustering of incidents in different regions.",
      },
      {
        file: "Q1_migrant_incidents_dashboard.html",
        title: "Incidents Dashboard",
        description: "Interactive dashboard with geographical and summary views.",
      },
    ],
    cause: [
      {
        file: "Q3_total_deaths_by_cause.html",
        title: "Deaths by Cause (Pie)",
        description: "Visualizes deaths due to various causes.",
      },
      {
        file: "Q3_stacked_bar_chart.html",
        title: "Stacked Bar Chart",
        description: "Deaths categorized by cause over time.",
      },
    ],
   
  };
  
  export default visualizations;
  