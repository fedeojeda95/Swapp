import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Home';
import CategoriesList from '../CategoriesList';
import ElementsList from '../ElementsList';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoriesList"
        component={CategoriesList}
        options={{
          title: 'Categories',
          headerLeft: null,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'yellow',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ElementsList"
        component={ElementsList}
        options={({route}) => {
          const {
            params: {selectedCategory},
          } = route;

          const {name} = selectedCategory || {name: 'people'};

          return {
            title: name,
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
