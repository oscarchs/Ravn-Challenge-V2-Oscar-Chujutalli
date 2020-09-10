import React from 'react';
import { Text, Button, View, ActivityIndicator, StyleSheet } from 'react-native';


const ErrorMessage = ({message}) => {

  return (
    <View style={styles.loadingView}>
      <Text style={styles.loadingText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
  },

  loadingText: {
    marginLeft: 8,
    color:'#EC5757'
  }

})

export default ErrorMessage;
