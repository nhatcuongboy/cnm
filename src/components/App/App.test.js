// import { render, screen } from '@testing-library/react';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import App from './App';

describe('AppComponent', async (assert) => {
  const $ = render(<App />);
 
  assert({
    given: 'no params',
    should: 'render something with the App class',
    actual: $('.App').length,
    expected: 1
  });
});