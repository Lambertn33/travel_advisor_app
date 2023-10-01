import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, PlacesScreen, PlaceScreen } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="places" component={PlacesScreen} />
        <Stack.Screen name="place" component={PlaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
