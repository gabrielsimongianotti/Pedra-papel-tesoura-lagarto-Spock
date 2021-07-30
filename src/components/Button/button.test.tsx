import React from 'react';
import render from 'react-test-renderer';

import Button from '.';

describe('<Button  />', () => {
  it('should be able to render title', () => {
    const mockFunction = jest.fn();
    const button = render.create(<Button title="test button" onPress={mockFunction} />).toJSON();
  
    expect(button.children[1].children[0]).toBe("test button");
  });
  
  it('should be able to click in button', () => {
    const mockFunction = jest.fn();
    const button = render.create(<Button title="test button" onPress={mockFunction} />).toJSON();

    button.props.onPress();

    expect(mockFunction).toHaveBeenCalled();
  });
});
