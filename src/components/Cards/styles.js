import styled from 'styled-components';

export const Container = styled.div`
	width: 60vw;
	height: 70vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 55px;
	}

	@media(max-width: 850px) {
		width: 70%;
		height: 100%;
		flex-direction: column;
	}
`;
