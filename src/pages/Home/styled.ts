import { Card, CardProps } from '@material-ui/core';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

interface CardCenterProps extends CardProps {
  backgroundColor?: string;
}

function getCardCenterBackgroundColor(props: CardCenterProps) {
  return props.backgroundColor || 'green';
}

export const CardCenter = styled(Card)`
  padding: 1rem;
  cursor: pointer;
  color: ${(props) => props.color || 'white'}!important;
  background-color: ${getCardCenterBackgroundColor}!important;
`;
