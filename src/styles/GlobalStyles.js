import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
      --Bright-orange: hsl(31, 77%, 52%);
      --Dark-cyan: hsl(184, 100%, 22%);
      --Very-dark-cyan: hsl(179, 100%, 13%);
      --Transparent-white: hsla(0, 0%, 100%, 0.75); /* paragraphs */
      --Very-light-gray: hsl(0, 0%, 95%); /* background, headings, buttons */
    }

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		html, body {
			width: 100%;
			height: 100%;
		}

		body, button {
			font-size: 15px;
			font-family: 'Lexend Deca', sans-serif;
			font-weight: 400;
		}

		h1, h2 {
			font-family: 'Big Shoulders Display', cursive;
			font-weight: 700;
		}
`;