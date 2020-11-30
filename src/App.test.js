import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('3. App', () => {
	it('renders Hello when isArriving', () => {
		const { getByTestId, queryByTestId } = render(<App />);
		const hiButton = getByTestId("sayhi");
		fireEvent.click(hiButton);
		let helloPara = queryByTestId("hello")
		let goodbyePara = queryByTestId("goodbye")
		expect(helloPara).toBeVisible();
		expect(goodbyePara).toBeNull();
	});
	it('renders Goodbye when not isArriving', () => {
		const { getByTestId, queryByTestId } = render(<App />);
		const hiButton = getByTestId("saybye");
		fireEvent.click(hiButton);
		let helloPara = queryByTestId("hello")
		let goodbyePara = queryByTestId("goodbye")
		expect(goodbyePara).toBeVisible();
		expect(helloPara).toBeNull();
	});
})
