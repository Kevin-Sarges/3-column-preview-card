import React from 'react';

import Image from '../../assets/icon-luxury.svg';

import { Container } from './styles';

function Luxury() {
  return (
		<Container>
			<img src={ Image }/>

			<h1>LUXURY</h1>

			<p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>

			<button>Learn More</button>
		</Container>
  );
}

export default Luxury;