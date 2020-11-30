import { render } from '@testing-library/react';
import React from 'react'
import Hello from '../Hello'

describe('1. Hello component displays string conditionally', () => {
	it('displays friend when no name', () => {
		const {getByTestId} = render(<Hello name={null} />)
		const para = getByTestId('hello')
		expect(para.innerHTML).toMatch(/friend/)
	})
	it('displays name when name given', () => {
		const {getByTestId} = render(<Hello name='name' />)
		const para = getByTestId('hello')
		expect(para.innerHTML).toMatch(/name/)
	})
})