import React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ListItem, Divider } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import Separator from './Separator';

const PeopleList = ({ data }) => {

  const navigation = useNavigation();

  const Item = ({ item }) => (
    <TouchableOpacity onPress={ () => navigation.navigate('singlePersonPage', { title: item.name, personId: item.id })}>
      <View style={styles.itemContainer}>
        <View style={styles.titleView}>
          <Text style={styles.P1}>{item.name}</Text>
          <Text style={styles.P1Low}>{item.species.name}</Text>
        </View>
        <View>
          <Icon type='material' name='keyboard-arrow-right'/>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
      <FlatList
        data={data}
        renderItem={ ({item}) => (<Item item={item}/>) }
        keyExtractor={item => item.id}
        ItemSeparatorComponent = { () =>(<Separator/>) }
      />
  );
};


const styles = StyleSheet.create({
  itemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  titleView: {
    flexDirection: 'column',
  },

  P1: {
    fontSize: 14
  },

  P1Low: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)'
  },
})

export default PeopleList;
                     