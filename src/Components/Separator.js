import React from 'react';
import { StyleSheet } from 'react-native';
import{ Divider } from 'react-native-elements';

const Separator = () =>{
  return (
    <Divider style={styles.ItemDivider} />
  );
};

const styles = StyleSheet.create({
  ItemDivider: {
    color: 'rgba(0,0,0,0.5)',
    marginLeft: 16
  }
});

export default Separator;