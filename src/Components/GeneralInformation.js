import React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet, FlatList, Divider } from 'react-native';
import Separator from './Separator';

const GeneralInformation = ({person}) => {

  const TitleComponent = () => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>General Information</Text>
    </View>
  )

  console.log(person);

  return (
    <>
      <TitleComponent/>
      {
        Object.keys(person).map( (key, index)=>(
          <View>
          <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between', margin:16}}>
            <Text style={styles.H2Low}>{key}</Text>
            <Text style={styles.H2}>{person[key]}</Text>
          </View>
          <Separator/>
          </View>
        ))  
      }
    </>
  );
};

const styles = StyleSheet.create({
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

export default GeneralInformation;
