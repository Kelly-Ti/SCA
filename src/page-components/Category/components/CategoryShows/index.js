import { Flex } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledBox,
  StyledCategoryShows,
  TextWrapper,
  StyleItem,
} from './styled';
import CategoryCard from '../CategoryCard';
import Header from 'shared-components/Typography/Header';

function CategoryShows({ shows, description }) {
  return (
    <StyledCategoryShows>
      <Header>{shows.length} Podcasts</Header>
      <Flex alignItems="start" flexWrap="wrap">
        {shows.map((item) => (
          <StyleItem>
            <CategoryCard item={item} />
          </StyleItem>
        ))}
        <StyleItem></StyleItem>
        <StyleItem></StyleItem>
        <StyleItem></StyleItem>
        <StyleItem></StyleItem>
        <StyledBox>
          {description && (
            <TextWrapper>
              <Paragraph text={description} variant="l" transparent />
            </TextWrapper>
          )}
        </StyledBox>
      </Flex>
    </StyledCategoryShows>
  );
}

CategoryShows.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.shape({
        squareLarge: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    })
  ),
  description: PropTypes.string,
};

CategoryShows.defaultProps = {
  shows: [],
  description: null,
};

export default CategoryShows;
