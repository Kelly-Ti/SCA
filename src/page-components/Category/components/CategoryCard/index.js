import React from 'react';

function CategoryCard({ item }) {
  return (
    <div className="cat-card">
      <div className="cat-picture">
        <img className="cat-img" src={item.images.squareLarge.url}></img>
      </div>
      <h2 className="cat-title">{item.name}</h2>
      <p className="cat-desc">{item.description}</p>
    </div>
  );
}

export default CategoryCard;
