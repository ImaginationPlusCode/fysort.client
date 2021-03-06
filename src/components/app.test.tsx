import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';

describe('<App/>', () => {
  it('renders', async () => {
    render(<App audience="Jared" />);
  });

  it('has correct audience', () => {
    const audience = 'Jared';
    const { findByText } = render(<App audience="Jared" />);
    findByText(new RegExp('Hello, ' + audience, 'i'));
  });
});
