import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { HightLight } from '@components/HightLight';
import { Input } from '@components/Input';
import {
  Container,
  Content,
  Icon
} from './styles';

export function NewGroups() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()


  const handleNewGroup  = () => {
    navigation.navigate('players', { group });
  }

  return (
    <Container>
      <Header showBackButton />  
      <Content >
        <Icon />
        <HightLight 
          title="Nova turma"
          subTitle="crie a turma para adicionar as pessoas"
        />
        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />
        <Button 
          title="Criar"
          style={{ marginTop: 20}}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}