import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useFetchInitialData from "../hooks/useFetchInitialData";
import Details from "../screens/Details/Details";
import Home from "../screens/Home/Home";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export default function Navigation() {
  useFetchInitialData();
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="Details"
        options={{ headerShown: false }}
        component={Details}
      />
    </Stack.Navigator>
  );
}
