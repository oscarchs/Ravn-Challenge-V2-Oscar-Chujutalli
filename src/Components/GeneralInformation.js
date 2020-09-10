import React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';


const GeneralInformation = ({data}) => {

  const titleComponent = () => (
    <Text> General Information </Text>
  )

  return (
      <FlatList
        data={data}
        renderItem={ ({item}) => (<Item item={item}/>) }
        keyExtractor={item => item.id}
        ItemSeparatorComponent = { Separator }
      />
  );
};


export default GeneralInformation;
