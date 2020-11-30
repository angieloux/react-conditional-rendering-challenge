import React from 'react';
import {TextField, CenteredRow} from './Styled'

const NameField = (props) => {
	const {setName} = props

	function nameChange(event) {
		setName(event.target.value)
	}
	return (
		<CenteredRow>
			<TextField name="name" onChange={nameChange}></TextField>	
		</CenteredRow>
	);
}

export default NameField;
