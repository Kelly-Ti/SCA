import React from 'react';
import Paragraph from 'shared-components/Typography/Paragraph';
import { CardContainer, CardImg, CardTitle } from './styled';

function CategoryCard({ item }) {
  return (
    <CardContainer>
      <CardImg src={item.images.squareLarge.url}></CardImg>

      <CardTitle
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
        }}
      >
        {item.name}
      </CardTitle>

      <Paragraph
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
    </CardContainer>
  );
}

export default CategoryCard;
