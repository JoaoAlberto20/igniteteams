import React from 'react';
import {
  Container, Message
} from './styles';

type ListEmpty = {
  message: string
}

export function ListEmpty({message}: ListEmpty) {
  return (
    <Container>
      <Message >
        {message}
      </Message>
    </Container>
  );
}