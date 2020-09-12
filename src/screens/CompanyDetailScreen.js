import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as CompanyContext } from '../context/CompanyContext';
import { ListItem } from 'react-native-elements';
import Spacer from '../components/Spacer';

const CompanyDetailScreen = ({ route, navigation }) => {
  const { state, fetchChildCompanies } = useContext(CompanyContext);
  const { id } = route.params;

  useEffect(() => {
    fetchChildCompanies(id);
  }, []);

  if (!state.company) {
    return null;
  }

  const name = state.company[0].name;
  const child = state.company[0].child;

  return (
    <>
      <Spacer>
        <Text style={{ fontSize: 26 }}>{name}'s Details</Text>
        <Spacer />
        {child.length === 0 ?(
          <Text>This company has no child.</Text>
        ) : child.length === 1 ? (
          <Text>This company own a company:</Text>
        ) : (
          <Text>This company own {child.length} companies:</Text>
        )}
      </Spacer>

      <FlatList
        data={child}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.push('CompanyDetail', {id: item._id})}>
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