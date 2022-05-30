import React from 'react';

const Hello = (props) => {
	// using destructuring to get name from props 
	const {name} = props
	
	return (
			// If name exists, greet them by name, otherwise default to 'friend'
			<p data-testid="hello">
				{name ? <>Hi, {name}</> : <>Hi, friend</>}
			</p>
			);
}

export default Hello;
