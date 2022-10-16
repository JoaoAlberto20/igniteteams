
import React from 'react';
import {
  Container, SubTitle, Title
} from './styles';

type HightLightProps = {
  title: string
  subTitle: string
}

export function HightLight({title, subTitle}: HightLightProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}