import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import PlacesScreen from "./screens/PlacesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen name="places" component={PlacesScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
