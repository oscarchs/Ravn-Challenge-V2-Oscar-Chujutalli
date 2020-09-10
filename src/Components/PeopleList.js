import React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { pure } from 'recompose';
import { ListItem, Divider, Icon } from 'react-native-elements'
import Separator from './Separator';
import LoadingIndicator from './LoadingIndicator';
import FlatListPureComponent from './FlatListPureComponent';

const PeopleList = ({ data, loading }) => {

  return (
      <FlatList
        data={data}
        renderItem={ ({item}) => (<FlatListPureComponent item={item}/>) }
        keyExtractor={item => item.id}
        ItemSeparatorComponent = { () =>(<Separator/>) }
        ListFooterComponent = { loading && <LoadingIndicator message={"Loading"}/> }
      />
  );
};


export default PeopleList;
                     