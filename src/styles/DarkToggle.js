import React from 'react'
import { BrightnessHighFill, Moon } from 'react-bootstrap-icons'
import { ThemeContext } from './ThemeContext'
import DarkToggleStyles from './DarkToggle.module.scss'
import { Button } from 'react-bootstrap'

const DarkToggle = () => {
	const { colorMode, setColorMode } = React.useContext(ThemeContext)

	if (!colorMode) {
		return null
	}

	function handleClick() {
		setColorMode( colorMode === 'dark' ? 'light' : 'dark')
	}
	return (


		<>
			<Button variant="outline-dark"
				className={DarkToggleStyles.button}
				onClick={handleClick}
			>
				{ colorMode === 'dark' ? <Moon/> : <BrightnessHighFill/> }
			</Button>	
		</>
	
	)
}

export default DarkToggle




