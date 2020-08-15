import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Context as CompanyContext } from '../context/CompanyContext';

const CompanyDetailScreen = ({ route, navigation }) => {
  const { state } = useContext(CompanyContext);
  const { id } = route.params;

  const Company = state.find(c => c.id === id);

  return (
    <>
      <Text style={{ fontSize: 30 }}>CompanyDetailScreen</Text>
      <Text style={{ fontSize: 24 }}>{Company.name}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default CompanyDetailScreen;