import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as CompanyContext } from '../context/CompanyContext';
import { ListItem } from 'react-native-elements';

const CompanyDetailScreen = ({ route, navigation }) => {
  const { state, fetchChildCompanies } = useContext(CompanyContext);
  const { id } = route.params;

  useEffect(() => {
    fetchChildCompanies(id);
  }, []);

  const name = state.company[0].name;
  const child = state.company[0].child;

  return (
    <>
      <Text style={{ fontSize: 30 }}>{name}'s Screen </Text>
      <Text style={{ fontSize: 20 }}>This company has {child.length} child </Text>

      <FlatList
        data={child}
        keyExtractor={item => item._id}
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

export default CompanyDetailScreen;