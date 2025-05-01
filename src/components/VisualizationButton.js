function VisualizationButton({ title, onClick, description }) {
    return (
      <div className="viz-button-card" onClick={onClick}>
        <h3>{title}</h3>
        {description && <p className="button-desc">{description}</p>}
      </div>
    );
  }
  
  export default VisualizationButton;