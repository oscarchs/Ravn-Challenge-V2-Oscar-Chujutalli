import React from 'react';
import { Text } from 'react-native';
import GeneralInformation from '../Components/GeneralInformation';
import { gql, useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import LoadingIndicator from '../Components/LoadingIndicator';

const SinglePersonPage = () => {

  const route = useRoute();
  const { loading, error, data } = useQuery(PERSON_DETAILS_QUERY, {variables: { personId: route.params.personId }});

  if (loading) return (
    <LoadingIndicator/>
  );

  if (error) return (
    <Text>Error! ${error.message}</Text>
  );

  if(data){
    const { name,__typename, vehicleConnection, ...person } = data.person;
    return (
      <>
        <GeneralInformation person={person}/>

      </>
    );
  }
};


const PERSON_DETAILS_QUERY = gql`
  query($personId: ID){
    person(id: $personId){
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles{
          name
        }
      }
    }
  }
`;

export default SinglePersonPage;
