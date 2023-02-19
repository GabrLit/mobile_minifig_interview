import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import useFetchInitialData from "./src/hooks/useFetchInitialData";
import useLoadStaticResources from "./src/hooks/useLoadStaticResources";
import Navigation from "./src/navigation/Navigation";
import { store } from "./src/store/store";
import { containers } from "./src/styles";

export default function App() {
  const areResourcesLoaded = useLoadStaticResources();

  if (areResourcesLoaded)
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
}
