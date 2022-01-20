import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

const MainStack = createStackNavigator();

function Initial() {
  return (
  <View/>
  );
}

export default function App() {
  return (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen component={Initial} name='Initial'/>
    </MainStack.Navigator>
  </NavigationContainer>
  );
}