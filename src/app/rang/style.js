import { styled, keyframes } from 'styled-components'

const rotateHue = keyframes`
  to {
    filter: hue-rotate(1turn);
  }
`

export const Header = styled.section`
	display: flex;
	background: white;
	align-items: center;
	min-height: 96px;
	box-shadow: inset rgba(85, 85, 85, 0.25) 0px -3px 5px 0px;
	padding: 16px;
`

export const Logo = styled.div`
	margin: 0 96px;
`

export const Preview = styled.div`
	background: ${(p) => p.bgColor || 'black'};
	height: 26px;
	width: 26px;
	border-radius: 50%;
`

export const PickerWrapper = styled.div`
	position: relative;
	display: flex;
	border-radius: 8px;
	cursor: pointer;
	padding: 8px;
	align-items: center;

	&:hover {
		background: #e5e5e5;
	}
`

export const Input = styled.input`
	width: ${(p) => (p.type === 'text' ? '100px' : '54px')};
	height: 44px;
	outline: none;
	border: 2px solid ${(p) => p.bgColor || 'black'};
	border-radius: 8px;
	padding: 4px 8px;
	background: none;
	font-size: 20px;
	color: #333333;
	margin-right: 20px;
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`

export const Picker = styled.input`
	height: 44px;
	border: none;
	background: none;
	position: relative;
	right: 62px;
	opacity: 0;
`

export const Button = styled.button`
	--border-radius: 8px;
	--border-width: 4px;
	appearance: none;
	position: relative;
	padding: 12px 4px 4px 12px;
	border: 0;
	color: #212121;
	font-size: 18px;
	font-weight: 500;
	background: white;
	cursor: ${(p) => (p.enableButton ? 'pointer' : 'not-allowed')};
	bottom: 4px;
	opacity: ${(p) => (p.enableButton ? '1' : '0.5')};

	&::after {
		--m-i: linear-gradient(#000, #000);
		--m-o: content-box, padding-box;
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: var(--border-width);
		border-radius: var(--border-radius);
		background-image: ${(p) =>
			p.enableButton
				? 'conic-gradient(#488cfb, #29dbbc, #ddf505, #ff9f0e, #e440bb, #655adc, #488cfb)'
				: 'radial-gradient(grey, grey)'};
		-webkit-mask-image: var(--m-i), var(--m-i);
		mask-image: var(--m-i), var(--m-i);
		-webkit-mask-origin: var(--m-o);
		mask-origin: var(--m-o);
		-webkit-mask-clip: var(--m-o);
		mask-composite: exclude;
		-webkit-mask-composite: destination-out;
		filter: hue-rotate(0);
		animation: ${rotateHue} linear 1000ms infinite;
		animation-play-state: paused;
	}

	&:hover::after {
		animation-play-state: running;
	}

	&:active {
		--border-width: 5px;
	}

	box-sizing: border-box;
`

export const Section = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
	grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
	min-height: calc(100vh - 132px);
`
