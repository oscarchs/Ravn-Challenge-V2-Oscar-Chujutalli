import React from 'react';
import { Text, Button, View, ActivityIndicator, StyleSheet } from 'react-native';


const LoadingIndicator = ({message}) => {

  return (
    <View style={styles.loadingView}>
      <ActivityIndicator color="rgba(0,0,0,0.5)" />
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
    marginLeft: 8
  }

})

export default LoadingIndicator;
