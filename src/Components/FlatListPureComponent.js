import React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { pure } from 'recompose';
import { ListItem, Divider, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const FlatListPureComponent = ({ item }) => {

  const navigation = useNavigation();

  return(
    <TouchableOpacity onPress={ () => navigation.navigate('singlePersonPage', { title: item.name, personId: item.id })}>
      <View style={styles.itemContainer}>
        <View style={styles.titleView}>
          <Text style={styles.P1}>{item.name}</Text>
          <Text style={styles.P1Low}>{item.species ? item.species.name : 'Unkwnown'}</Text>
        </View>
        <View>
          <Icon type='material' name='keyboard-arrow-right'/>
        </View>
      </View>
    </TouchableOpacity>
  );
}
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
  export default FlatListPureComponent;