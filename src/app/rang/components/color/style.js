import { styled, css } from 'styled-components'

const getTextColor = (type) => {
	switch (type) {
		case 'tint':
			return '#333333'

		case 'shade':
			return '#ffffff'

		case 'base':
			return '#000000'
	}
}

export const Copy = styled.div`
	transition: 0.5s ease;
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	text-align: center;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.5);
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 25%;
`

export const Wrapper = styled.div`
	background: ${(p) => p.bgColor || 'black'};
	padding: 12px 16px;
	min-height: 96px;
	position: relative;
	${(p) =>
		p.type === 'base' &&
		css`
			border: 2px solid black;
			box-shadow: inset 0 0 0 2px white;
		`}

	&:hover {
		${Copy} {
			opacity: 1;
		}
	}
`

export const Percent = styled.p`
	color: ${(p) => getTextColor(p.type)};
`

export const Hex = styled(Percent)`
	color: ${(p) => getTextColor(p.type)};
`
