import React, {useContext, useEffect} from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context as CompanyContext} from '../context/CompanyContext';
import {ListItem} from 'react-native-elements';
import Spacer from '../components/Spacer';

const CompaniesScreen = ({navigation}) => {
  const {state, fetchCompanies} = useContext(CompanyContext);

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <FlatList
        data={state.companies}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CompanyDetail', {id: item.id})
              }>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default CompaniesScreen;
