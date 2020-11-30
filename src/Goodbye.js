import React from 'react';

const Goodbye = (props) => {
	// Ooooooh - Using destructuring to get name from props - fancy
	const {name} = props
	
	/* 2. If a name is included in props, display that name in what is rendered.
	//    Otherwise, just render "Bye, friend."
	//
	//    The code that passes the name in is done for you (have a look at App)
	//	  Right now, this component always renders "Bye, friend."
	//
	//    What you have to do is change the code in the return 
	//    to conditionally render the correct string.
	*/
	return (
		<p data-testid="goodbye">Bye, friend.</p>
	);
}

export default Goodbye;
