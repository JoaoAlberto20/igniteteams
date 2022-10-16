import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { HightLight } from '@components/HightLight';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';

export function Groups() {
  const [ groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation()

  const handleNewGroup = () => navigation.navigate('new')

  return (
    <Container>
      <Header />
      <HightLight 
        title="Turmas"
        subTitle="jogue com sua turma"
      />
      <FlatList 
        data={groups}
        keyExtractor={(group ) => group}
        renderItem={({ item }) => (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Que tal cadastrar a primeira turma?"
          />
        )}
      />

      <Button 
        title="Criar nova turma"
        onPress={handleNewGroup} 
      />
    </Container>
  );
}