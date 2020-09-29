import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as CompanyContext } from '../context/CompanyContext';
import { ListItem } from 'react-native-elements';
import Spacer from '../components/Spacer';

const CompanyDetailsScreen = ({ route, navigation }) => {
  const { state, fetchChildCompanies } = useContext(CompanyContext);
  const { id } = route.params;

  const company = state.companies.find(item => item.id === id);

  useEffect(() => {
    fetchChildCompanies(id);
  }, [id]);

  if (state.isLoading) {
    return (
      <Spacer>
        <Text style={styles.subject}>loading....</Text>
      </Spacer>
    );
  }

  const child = company.child;

  if (!child) {
    return null;
  }

  return (
    <>
      <Spacer>
        <Text style={styles.title}>{company.name}</Text>
      </Spacer>
      <Spacer>
        {child.length === 0 ? (
          <Text style={styles.subject}>This Company has no child.</Text>
        ) : child.length === 1 ? (
          <Text style={styles.subject}>Child Company:</Text>
        ) : (
              <Text style={styles.subject}>Child Companies:</Text>
            )}
      </Spacer>
      <FlatList
        data={child}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.push('CompanyDetails', { id: item._id })}>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CompanyDetailsScreen;
