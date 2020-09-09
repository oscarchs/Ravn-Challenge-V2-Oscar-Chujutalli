import React from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllPeoplePage from './People/AllPeoplePage';
import SinglePersonPage from './People/SinglePersonPage';
import StackHeader from './Components/StackHeader';

const PeopleStack = createStackNavigator();


const headerOptions = (title) => ({
  title: title,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#121212',
  },
  headerTintColor: '#fff',
})


Routes = () => {

  return (
    <NavigationContainer initialRouteName="allPeoplePage">
      <PeopleStack.Navigator>
          <PeopleStack.Screen name="allPeoplePage" component={AllPeoplePage} options={headerOptions("People of Star Wars")} />
          <PeopleStack.Screen name="singlePersonPage" component={SinglePersonPage} options={({ route }) => (headerOptions(route.params.title))}/>
      </PeopleStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;