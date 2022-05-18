/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react'
import App from './App'

describe('App page component', () => {
  test('Check if component exists', () => {
    const { container } = render(<App />)
    const navbar = container.querySelector('.navbar')
    expect(navbar).toBeInTheDocument()
  })
})
