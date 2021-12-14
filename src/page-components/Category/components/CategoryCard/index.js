import React from 'react';

function CategoryCard({ item }) {
  return (
    <div className="cat-card" style={{ width: '320px' }}>
      <div className="cat-picture">
        <img className="cat-img" src={item.images.squareLarge.url}></img>
      </div>
      <h2
        className="cat-title"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
        }}
      >
        {item.name}{' '}
      </h2>
      <p
        className="cat-desc"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
        }}
      >
        {item.description}
      </p>
    </div>
  );
}

export default CategoryCard;
