import React from 'react';

import Image from '../../assets/icon-suvs.svg';
import Button from '../Button';

import { Container, Car } from './styles';

function Suvs() {
  return (
    <Container>
			<Car>
        <img src={ Image }/>

        <h1>SUVS</h1>

        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>

        <Button />
      </Car>
    </Container>
  );
}

export default Suvs;