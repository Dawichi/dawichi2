import React from 'react'
import App from './src/components/App'

import 'bootstrap/dist/css/bootstrap.min.css'

export const wrapRootElement = ({ element }) => {
	return <App>{element}</App>
}
