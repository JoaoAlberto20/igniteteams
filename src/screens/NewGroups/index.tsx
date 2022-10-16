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
        />
        <Button 
          title="Criar"
          style={{ marginTop: 20}}
        />
      </Content>
    </Container>
  );
}