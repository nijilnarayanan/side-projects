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

export const Wrapper = styled.div`
	background: ${(p) => p.bgColor || 'black'};
	padding: 12px 16px;
	min-height: 96px;
	${(p) =>
		p.type === 'base' &&
		css`
			border: 2px solid black;
			box-shadow: inset 0 0 0 2px white;
		`}
`

export const Percent = styled.p`
	color: ${(p) => getTextColor(p.type)};
`

export const Hex = styled(Percent)`
	color: ${(p) => getTextColor(p.type)};
`
