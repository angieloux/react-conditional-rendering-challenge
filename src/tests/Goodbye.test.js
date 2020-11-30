import { render } from '@testing-library/react';
import React from 'react'
import Goodbye from '../Goodbye'

describe('2. Goodbye component displays string conditionally', () => {
	it('displays friend when no name', () => {
		const {getByTestId} = render(<Goodbye name={null} />)
		const para = getByTestId('goodbye')
		expect(para.innerHTML).toMatch(/friend/)
	})
	it('displays name when name given', () => {
		const {getByTestId} = render(<Goodbye name='name' />)
		const para = getByTestId('goodbye')
		expect(para.innerHTML).toMatch(/name/)
	})
})