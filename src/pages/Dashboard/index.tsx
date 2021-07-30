import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { Options, Container, Result, Text } from './styles';

import Card from "../../components/Card";
import Button from "../../components/Button";

import stone from '../../../assets/stone.png';
import paper from '../../../assets/paper.png';
import lizard from '../../../assets/lizard.png';
import scissors from '../../../assets/scissors.png';
import spock from '../../../assets/spock.png';

export default function Dashboard() {
  const [computer, setComputer] = useState(0);
  const [player, setPlayer] = useState(0);
  const [result, setResult] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#292f3f" }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Options horizontal={true}>
            <Card onPress={() => console.log("stone")} src={stone} />
            <Card onPress={() => console.log("paper")} src={paper} />
            <Card onPress={() => console.log("scissors")} src={scissors} />
            <Card onPress={() => console.log("lizard")} src={lizard} />
            <Card onPress={() => console.log("spock")} src={spock} />
          </Options>
        </Container>
      </ScrollView>
      <Result>
        <Text>{result}</Text>
        <Text>computador {computer} X {player} jogador</Text>
        <Button onPress={() =>  console.log("stone")} title="Zerar" />
      </Result>
    </KeyboardAvoidingView>
  );
}
