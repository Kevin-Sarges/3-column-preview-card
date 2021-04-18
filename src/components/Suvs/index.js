import React from 'react';

import Image from '../../assets/icon-suvs.svg';

import { Container } from './styles';

function Suvs() {
  return (
    <Container>
			<img src={ Image }/>

			<h1>SUVS</h1>

			<p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>

			<button>Learn More</button>
    </Container>
  );
}

export default Suvs;