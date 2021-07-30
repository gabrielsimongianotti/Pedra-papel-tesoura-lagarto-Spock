import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonsProps extends RectButtonProperties {
  title: string;
}

const Button: React.FC<ButtonsProps> = ({ title, ...rest }) => (
  <Container {...rest}>
    <ButtonText>
      {title}
    </ButtonText> 
  </Container>
);

export default Button;
