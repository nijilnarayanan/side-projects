import Image from 'next/image'
import { toast } from 'react-toastify'
import copy from '../../icons/copy.svg'
import { Wrapper, Percent, Hex, Copy } from './style'

const Color = ({ type, weight, hexColor }) => {
	const hexValue = `#${hexColor}`

	const copyColor = () => {
		navigator.clipboard.writeText(hexValue)
		toast('Color copied to clipboard!')
	}

	return (
		<Wrapper type={type} bgColor={hexValue}>
			<Percent type={type}>{weight}%</Percent>
			<Hex type={type}>{hexValue}</Hex>
			<Copy onClick={copyColor}>
				<Image src={copy} alt='copy' width={50} height={50} />
			</Copy>
		</Wrapper>
	)
}

export default Color
