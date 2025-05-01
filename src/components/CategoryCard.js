import React from "react";

const CategoryCard = ({ title, description, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
