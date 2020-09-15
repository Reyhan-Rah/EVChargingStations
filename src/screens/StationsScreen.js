import React, {useContext, useEffect} from 'react';
import {StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {Context as StationsContext} from '../context/StationsContext';
import {ListItem} from 'react-native-elements';
import Spacer from '../components/Spacer';

const StationsScreen = () => {
  const {state, fetchStations} = useContext(StationsContext);

  useEffect(() => {
    fetchStations();
  }, []);

  return (
    <>
      <Spacer>
        <Text style={{fontSize: 30}}>Stations List</Text>
      </Spacer>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
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
