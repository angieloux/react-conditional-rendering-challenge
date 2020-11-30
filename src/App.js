import React, {useState} from 'react'
import {Card, CenteredRow, Button} from './Styled'
import Hello from './Hello'
import Goodbye from './Goodbye'
import NameField from './NameField'

const App = () => {

	// This app uses the useState hook.
	// For extra bonus learning, look at the docs for useState 
	// and try to understand how it is used here.
	const [isArriving, setIsArriving] = useState(true)
	const [name, setName] = useState(null)

	// Event handler for the Say Hi button
	function sayHi() {
		setIsArriving(true)	
	}

	// Event handler for the Say Bye button
	function sayBye() {
		setIsArriving(false)	
	}

	/* 3. If the current value of isArriving is true, render the Hello component
	//    Otherwise render the Goodbye component.
	//    Right now, both messages display no matter which button is clicked.
	//    
	//    The code that changes the value of isArriving 
	//    based on which button is clicked is done for you. 
	//    
	//    You just need to add some code to the return statement below to 
	//    conditionally render the correct component (Hello or Goodbye).
	//    
	//    For some extra bonus learning, see if you can understand it (we will cover it later)
	*/
	return (
		<div>
			<CenteredRow >
				<Card>
					<Hello name={name}/> 
					<Goodbye name={name} />
				</Card>
			</CenteredRow>
			<NameField setName={setName}/>
			<CenteredRow >
				<Button data-testid="sayhi" onClick={sayHi}>Say Hi</Button>
				<Button data-testid="saybye" onClick={sayBye}>Say Bye</Button>
			</CenteredRow>
		</div>
	)
}

export default App
