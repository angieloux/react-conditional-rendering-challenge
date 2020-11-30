import React from 'react';

const Hello = (props) => {
	// Ooooooh - Using destructuring to get name from props - fancy
	const {name} = props
	
	/* 1. If a name is included in props, display that name in what is rendered.
	//    Otherwise, just render "Hi, friend."
	//
	//    The code that passes the name in is done for you (have a look at App)
	//	  Right now, this component always renders "Hi, friend."
	//
	//    What you have to do is change the code in the return 
	//    to conditionally render the correct string.
	//
	*/ 
	return (
			<p data-testid="hello">Hi, friend.</p>
	);
}

export default Hello;
