import React, { useContext, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { Context as StationsContext } from '../context/StationsContext';
import { ListItem } from 'react-native-elements';

const StationsScreen = ({ navigation }) => {
  const { state, fetchStations } = useContext(StationsContext);

  useEffect(() => {
    navigation.addListener('focus', () => {
     {fetchStations}
    });
  }, [navigation]);

  return (
    <>
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

export default StationsScreen;
