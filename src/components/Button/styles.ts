import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #373E4E;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const ButtonText = styled.Text`
  color: #a5a7ac;
  font-size: 18px;
`;
