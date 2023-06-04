'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Color from './components/color'
import Values from 'values.js'
import logo from './logo.png'
import pickerLogo from './pickerLogo.png'
import { Header, PickerWrapper, Preview, Logo, Picker, Input, Button, Section } from './style'

const hexRegex = /^#([0-9a-f]{3}){1,2}$/

const ColorGenerator = () => {
	const [color, setColor] = useState('#f15025')
	const [tint, setTint] = useState(10)
	const colorList = hexRegex.test(color) ? new Values(color).all(tint) : []
	const [list, setList] = useState(colorList)
	const enableButton = hexRegex.test(color) && tint

	const handleSubmit = () => {
		if (hexRegex.test(color)) {
			const colors = new Values(color).all(parseInt(tint, 10))
			setList(colors)
		}
	}

	return (
		<Fragment>
			<Header>
				<Logo>
					<Image src={logo} width={250} height={96} alt='logo' />
				</Logo>
				<PickerWrapper>
					<Image src={pickerLogo} width={30} height={30} alt='picker' />
					<Preview bgColor={color} />
				</PickerWrapper>
				<Picker type='color' value={color} onChange={(e) => setColor(e.target.value)} />
				<Input
					type='text'
					bgColor={color}
					value={color}
					placeholder='#f15025'
					onChange={(e) => setColor(e.target.value)}
					autoFocus
				/>
				<Input
					type='number'
					value={tint}
					min='1'
					max='100'
					step='1'
					placeholder='1'
					onChange={(e) => setTint(e.target.value)}
					bgColor={color}
				/>
				<Button onClick={handleSubmit} enableButton={enableButton}>
					Generate
				</Button>
			</Header>
			<Section>
				{list?.map((color, index) => (
					<Color key={color} index={index} {...color} hexColor={color.hex} />
				))}
			</Section>
		</Fragment>
	)
}

export default ColorGenerator
