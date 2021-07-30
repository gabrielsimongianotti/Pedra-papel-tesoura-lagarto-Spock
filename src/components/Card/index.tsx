import React from 'react';
import {  TouchableOpacityProps } from 'react-native';
import { ImagePoster, Container } from "./styles";

interface CardProps extends TouchableOpacityProps {
  src: string;
}

export default function Card({
  src,
  ...rest
}: CardProps) {
  return (
    <Container {...rest}>
      <ImagePoster source={src} />
    </Container>
  );
}
