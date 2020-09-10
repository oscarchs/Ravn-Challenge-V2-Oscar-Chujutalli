import React from 'react';
import { Text } from 'react-native';
import GeneralInformation from '../Components/GeneralInformation';
import { gql, useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import LoadingIndicator from '../Components/LoadingIndicator';
import ErrorMessage from '../Components/ErrorMessage';
import VehiclesInformation from '../Components/VehiclesInformation';

const SinglePersonPage = () => {

  const route = useRoute();
  const { loading, error, data } = useQuery(PERSON_DETAILS_QUERY, {variables: { personId: route.params.personId }});

  if (loading) return (
    <LoadingIndicator message={"Loading"}/>
  );

  if (error) return (
    <ErrorMessage message={"Failed to Load Data"}/>
  );

  if(data){
    const { name,__typename, vehicleConnection, ...person } = data.person;
    const { ...vehicles } = data.person.vehicleConnection.vehicles;

    return (
      <>
        <GeneralInformation person={person}/>
        <VehiclesInformation vehicles={vehicles}/>
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
