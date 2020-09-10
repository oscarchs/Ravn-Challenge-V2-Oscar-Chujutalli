import React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet, FlatList, Divider } from 'react-native';
import Separator from './Separator';

const VehiclesInformation = ({vehicles}) => {

  const TitleComponent = () => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>Vehicles</Text>
    </View>
  )

  const formatCamelCase = (text) => {
    var result = text.replace( /([A-Z])/g, " $1" );
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

  return (
    <>
      <TitleComponent/>
      {
        Object.keys(vehicles).map( (key, index)=>(
          <View key={key}>
          <View style={styles.listItemContainer}>
            <Text style={styles.H2Low}>{vehicles[key].name}</Text>
          </View>
          <Separator/>
          </View>
        ))  
      }
    </>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row', 
    alignItems:'center',
    margin:16
  },
  sectionHeaderContainer: {
    paddingLeft: 16,
    paddingRight: 16
  },
  sectionHeaderText: {
    marginTop:32,
    marginBottom: 8,
    fontSize: 16,
  },
  H2: {
    fontSize: 16,
    textTransform: 'capitalize',

  },
  H2Low: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)'
  },
  ItemDivider: {
    color: 'rgba(0,0,0,0.5)',
    marginLeft: 16
  }

})

export default VehiclesInformation;
