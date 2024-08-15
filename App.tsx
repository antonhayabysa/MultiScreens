import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import AddItemScreen from './src/screens/AddItem/AddItemScreen';
import EditItemScreen from './src/screens/EditItem/EditItemScreen';
import {ItemsProvider} from './src/context/ItemsContext'; // Импортируем контекст

type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
  EditItem: {index: number; item: {width: number; height: number}};
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <ItemsProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddItem" component={AddItemScreen} />
          <Stack.Screen name="EditItem" component={EditItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemsProvider>
  );
}

export default App;
