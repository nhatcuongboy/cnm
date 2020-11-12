import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import match from 'riteway/match';

// eslint-disable-next-line react/prop-types
const MyComponent = ({ text }) => <div className="contents">{text}</div>;

describe('MyComponent', async assert => {
  const text = 'Test for whatever you like!';
  const $ = render(<MyComponent text={text} />);
  const contains = match($('.contents').html());

  assert({
    given: 'some text to display',
    should: 'render the text.',
    actual: contains(text),
    expected: text
  });
});