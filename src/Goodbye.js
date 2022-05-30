import React from 'react';

const Goodbye = (props) => {
	// Ooooooh - Using destructuring to get name from props - fancy
	const {name} = props

	return (
			// If name exists, greet them by name, otherwise default to 'friend'
			<p data-testid="goodbye">
				{name ? <>Bye, {name}</> : <>Bye, friend</>}
			</p>
	
			);
}

export default Goodbye;
