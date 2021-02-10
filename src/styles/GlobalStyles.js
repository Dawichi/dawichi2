import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

	/* Animate.css */
	@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");

	*, *:before, *:after {
		box-sizing: border-box;
		font-family: Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,	Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	html { overflow-x: hidden; }

	body {
		background: var(--color-container);
		color: var(--color-text);
	}

	/* 6dp elevation */
	.container-style { box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }
	
	/* 12dp elevation */
	.content-style { box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }
	
	/* 24dp elevation */
	.content-style:hover { box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }
`

export default GlobalStyles
