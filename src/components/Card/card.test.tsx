import React from 'react';
import render from 'react-test-renderer';
import image from '../../../assets/stone.png';

import Card from '.';

describe('<Card  />', () => {

  it('should be able to render title', () => {
    const mockFunction = jest.fn();
    const card = render.create(<Card onPress={mockFunction} src={image} />).toJSON();

    expect(card.children[0].props.source).toBe(1);
  });

  it('should be able to click of card', () => {
    const mockFunction = jest.fn();
    const card = render.create(<Card onPress={mockFunction} src={image} />).toJSON();

    card.props.onClick();

    expect(mockFunction).toHaveBeenCalled();
  });
});
