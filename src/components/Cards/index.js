import React from 'react';

import Sedans from '../Sedans';
import Suvs from '../Suvs';
import Luxury from '../Luxury';

import { Container } from './styles';

function Cards() {
  return (
    <Container>
      <Sedans />
      <Suvs />
      <Luxury />
    </Container>
  );
}

export default Cards;