import styled from 'styled-components';
import { Box } from '@rebass/grid';
import spacing from 'styling/spacing';
import screen from 'styling/screen';

export const StyledCategoryShows = styled(Box)`
  background-color: ${(props) => props.theme.dark};
  border-radius: 26px;
  padding: ${spacing.m};

  ${screen.tablet} {
    padding: 15px;
  }
`;

export const StyledBox = styled(Box)`
  max-width: 100%;

  ${screen.mobile} {
    max-width: 480px;
  }

  ${screen.laptop} {
    max-width: 800px;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 12px;

  ${screen.mobile} {
    margin-bottom: 0;
  }
`;

export const StyleItem = styled.div`
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 45%;
  }

  @media (min-width: 768px) {
    width: 49%;
  }

  @media (min-width: 992px) {
    width: 30%;
  }

  @media (min-width: 1200px) {
    width: 24%;
  }
`;
