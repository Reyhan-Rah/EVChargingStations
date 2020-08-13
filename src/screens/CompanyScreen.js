import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as CompanyContext } from '../context/CompanyContext';
import { ListItem } from 'react-native-elements';

const CompanyScreen = () => {
const { state, fetchCompanies } = useContext(CompanyContext);

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <Text style={{ fontSize: 30 }}>Companies List</Text>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default CompanyScreen;