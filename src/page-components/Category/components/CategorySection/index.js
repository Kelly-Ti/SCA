import { Box, Flex } from '@rebass/grid';
import Header from 'shared-components/Typography/Header';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import spacing from 'src/styling/spacing';
//button
import SortButton from 'shared-components/SortButton';
//use Router
import { useRouter } from 'next/router';
import CategoryShows from '../CategoryShows';

const StyledCategoryContainer = styled(Flex)`
  position: relative;
`;

const CategorySection = ({ shows, name, description, slug }) => {
  const router = useRouter();
  const onSelect = (order) => {
    router.push(`/category/${slug}?order=${order}`);
  };

  return (
    <StyledCategoryContainer flexDirection="column">
      <Box px={[spacing.m, 0, 0]}>
        <Header as="h1" variant="xl" text={name} linesToShow={1} mb="m" />
      </Box>

      {/* ****STYLYING OUT */}

      <div
        style={{
          position: 'absolute',
          right: 0,
        }}
      >
        <SortButton
          options={[
            { key: 'asc', value: 'A-Z' },
            { key: 'desc', value: 'Z-A' },
          ]}
          side="left"
          onOptionClick={onSelect}
        ></SortButton>
      </div>

      <CategoryShows shows={shows} description={description} />
    </StyledCategoryContainer>
  );
};

CategorySection.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
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
};

CategorySection.defaultProps = {
  name: null,
  description: null,
  shows: [],
};

export default CategorySection;
