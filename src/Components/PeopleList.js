import React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ListItem, Divider } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const PeopleList = ({ data }) => {

  const navigation = useNavigation();

  const Item = ({ item }) => (
    <TouchableOpacity onPress={ () => navigation.navigate('singlePersonPage', { title: item.name, personDetails: item })}>
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

  const Separator = () => (
    <Divider style={styles.ItemDivider} />
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

  ItemDivider: {
    color: 'rgba(0,0,0,0.5)',
    marginLeft: 16
  }
})

export default PeopleList;





                     