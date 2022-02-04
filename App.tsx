import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import { Initial } from "./src/screens/Initial";

const MainStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <MainStack.Navigator>
                    <MainStack.Screen component={Initial} name='Initial' />
                </MainStack.Navigator>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
