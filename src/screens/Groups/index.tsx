import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupGetAll } from '@storage/group/groupGetAll';
import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { HightLight } from '@components/HightLight';
import { ListEmpty } from '@components/ListEmpty';

import { Loading } from '@components/Loading';
import { Container } from './styles';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleNewGroup = () => navigation.navigate('new');

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      const data = await groupGetAll();
      setGroups(data);
      
    } catch (error) {
      console.log(error)
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
    } finally {
      setIsLoading(false);
    }
  }

  const handleOpenGroup = (group: string) => {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    console.log('Entrou no user effect')
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <HightLight
        title="Turmas"
        subTitle="jogue com sua turma"
      />

      {
        isLoading ? <Loading /> :
          <FlatList
            data={groups}
            keyExtractor={(group) => group}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() => (
              <ListEmpty
                message="Que tal cadastrar a primeira turma?"
              />
            )}
          />
      }


      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}