import React from 'react';

import Image from '../../assets/icon-sedans.svg';

import { Container, Car } from './styles';

function Sedans() {
  return (
    <Container>
      <Car>
        <img src={ Image }/>

        <h1>SEDANS</h1>

        <p>Choose a sedan for its affordability and excenllent fuel economy. Ideal for cruising in the city or on your next road trip.</p>

        <button>Learn More</button>
      </Car>
    </Container>
  );
}

export default Sedans;