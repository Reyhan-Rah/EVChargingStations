import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as CompanyContext } from '../context/CompanyContext';
import { ListItem } from 'react-native-elements';

const CompanyDetailScreen = ({ route, navigation }) => {
  const { state, fetchChildCompanies } = useContext(CompanyContext);
  const { id } = route.params;

  //const Company = state.find(c => c.id === id);

  useEffect(() => {
    fetchChildCompanies(id);
  }, []);

  console.log(state.company);

  return (
    <>
      <Text style={{ fontSize: 30 }}>CompanyDetailScreen</Text>

      <FlatList
        data={state.company}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress = {() => 
                navigation.navigate('CompanyDetail', { id: item.id })
              }>
              <ListItem chevron title={item.name} />
              <ListItem chevron title={item.child} />
            </TouchableOpacity>
          );
        }}
      />
      
    </>
  );
};

const styles = StyleSheet.create({});

export default CompanyDetailScreen;