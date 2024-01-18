// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import { Provider } from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Index"
        screenOptions={[]}
        >
          <Stack.Screen 
          name="Index" 
          component={IndexScreen}
          options={({navigation}) => ({
            title: 'Blogs', 
            headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          })}
          />
          <Stack.Screen 
          name="Show" 
          component={ShowScreen}
          options={({route, navigation}) => ({
            title: route.params.title,
            headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
            <EvilIcons name="pencil" size={30} />
          </TouchableOpacity>
          })}
          />

          <Stack.Screen 
            name="Create" 
            component={CreateScreen}
            options={{ title: 'Create Post' }}
          />

          <Stack.Screen 
            name="Edit" 
            component={EditScreen}
            options={{ title: 'Edit Post' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
  </Provider>    
  );
}

export default App;