import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useFetchInitialData from "../hooks/useFetchInitialData";
import DetailsForm from "../screens/DetailsForm";
import Home from "../screens/Home/Home";

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
        name="DetailsForm"
        options={{ headerShown: false }}
        component={DetailsForm}
      />
    </Stack.Navigator>
  );
}
