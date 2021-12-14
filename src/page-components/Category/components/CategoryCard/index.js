import React from 'react';

import Paragraph from 'shared-components/Typography/Paragraph';

function CategoryCard({ item }) {
  return (
    <div
      className="cat-card"
      style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
    >
      <div className="cat-picture">
        <img
          className="cat-img"
          src={item.images.squareLarge.url}
          style={{ borderRadius: '10px', width: '100%' }}
        ></img>
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

      <Paragraph
        className="cat-desc"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          color: '#fff',
          opacity: '0.7',
        }}
      >
        {item.description}
      </Paragraph>
    </div>
  );
}

export default CategoryCard;
