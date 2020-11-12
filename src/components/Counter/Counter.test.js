// import { render, screen } from '@testing-library/react';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Counter from './Counter';

describe('CounterComponent', async (assert) => {
  const $ = render(<Counter />);

  assert({
    given: 'no params',
    should: 'render something with the counter-comp class',
    actual: $('.counter-comp').length,
    expected: 1
  });
  
});