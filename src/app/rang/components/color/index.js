import { Wrapper, Percent, Hex } from './style'


const Color = ({ type, weight, hexColor }) => {
	const hexValue = `#${hexColor}`
	return (
		<Wrapper type={type} bgColor={hexValue}>
			<Percent type={type}>{weight}%</Percent>
			<Hex type={type}>{hexValue}</Hex>
		</Wrapper>
	)
}

export default Color
