import styled from 'styled-components';
import {
  elevation, transition, colors, teal,
} from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  color: ${colors.black};
  ${elevation[4]};
  ${transition({})};
  &:hover {
    ${elevation[1]}
  }
`;

export const BlackCard = styled.div`
  background: black;
  color: white;
  border-radius: 5px;
  padding: 15px;
  color: ${teal};
  ${elevation[3]};
  &:hover {
    ${elevation[5]}
  }
`;
