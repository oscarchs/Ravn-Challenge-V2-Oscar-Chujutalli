import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AllPeoplePage = () => {

  const navigation = useNavigation();

  return (
    <>
       <Button
            title="Go"
            onPress={() => navigation.navigate('singlePersonPage', {title: 'ASASSS'})}
        />
    </>
  );
};

export default AllPeoplePage;
