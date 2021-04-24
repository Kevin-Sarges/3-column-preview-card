import React from 'react';

import Image from '../../assets/icon-luxury.svg';
import Button from '../Button';

import { Container, Car } from './styles';

function Luxury() {
  return (
		<Container>
			<Car>
				<img src={ Image }/>

				<h1>LUXURY</h1>

				<p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>

				<Button />
			</Car>
		</Container>
  );
}

export default Luxury;