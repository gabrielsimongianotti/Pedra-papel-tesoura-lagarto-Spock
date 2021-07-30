import React, { useCallback, useState } from 'react';
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

  const conpativeResult = useCallback((jokenpoSelect: string) => {
    const optionsComputer = ["stone", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * optionsComputer.length);

    if (jokenpoSelect === "stone") {
      if (optionsComputer[randomNumber] === "lizard" || optionsComputer[randomNumber] === "scissors") {
        setResult('Você venceu');
        setPlayer(player + 1);
        return;
      };
      if (optionsComputer[randomNumber] === "paper" || optionsComputer[randomNumber] === "spock") {
        setResult('Você perdeu');
        setComputer(computer + 1);
        return;
      };
    }
    if (jokenpoSelect === "paper") {
      if (optionsComputer[randomNumber] === "stone" || optionsComputer[randomNumber] === "spock") {
        setResult('Você venceu');
        setPlayer(player + 1);
        return;
      };
      if (optionsComputer[randomNumber] === "scissors" || optionsComputer[randomNumber] === "lizard") {
        setResult('Você perdeu');
        setComputer(computer + 1);
        return;
      };
    }
    if (jokenpoSelect === "lizard") {
      if (optionsComputer[randomNumber] === "paper" || optionsComputer[randomNumber] === "spock") {
        setResult('Você venceu');
        setPlayer(player + 1);
        return;
      };
      if (optionsComputer[randomNumber] === "scissors" || optionsComputer[randomNumber] === "stone") {
        setResult('Você perdeu');
        setComputer(computer + 1);
        return;
      };
    }
    if (jokenpoSelect === "spock") {
      if (optionsComputer[randomNumber] === "scissors" || optionsComputer[randomNumber] === "spock") {
        setResult('Você venceu');
        setPlayer(player + 1);
        return;
      };
      if (optionsComputer[randomNumber] === "lizard" || optionsComputer[randomNumber] === "papel") {
        setResult('Você perdeu');
        setComputer(computer + 1);
        return;
      };
    }
    setResult('Empate');
  }, [computer, player]);

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
            <Card onPress={() => conpativeResult("stone")} src={stone} />
            <Card onPress={() => conpativeResult("paper")} src={paper} />
            <Card onPress={() => conpativeResult("scissors")} src={scissors} />
            <Card onPress={() => conpativeResult("lizard")} src={lizard} />
            <Card onPress={() => conpativeResult("spock")} src={spock} />
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
