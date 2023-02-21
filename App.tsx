import { Provider } from "react-redux";
import useLoadStaticResources from "./src/hooks/useLoadStaticResources";
import Navigation from "./src/navigation/Navigation";
import { store } from "./src/store/store";

export default function App() {
  const areResourcesLoaded = useLoadStaticResources();

  if (areResourcesLoaded)
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
}
