import React from 'react';
import {TextField, CenteredRow} from './Styled'

const NameField = (props) => {
	// use destructuring to get the value of setName from props
	const {setName} = props

	function nameChange(event) {
		// setName to what the user has typed in
		setName(event.target.value)
	}
	return (
		<CenteredRow>
			{/* When the TextField is changed in any way, the onChange event will execute, which leads tot he nameChange function above */}
			<TextField name="name" onChange={nameChange}></TextField>	
		</CenteredRow>
	);
}

export default NameField;
