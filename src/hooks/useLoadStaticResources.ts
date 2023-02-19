import { useFonts } from "expo-font";

const useLoadStaticResources = () => {
  const [fontsLoaded] = useFonts({
    righteous: require("../../assets/fonts/Righteous-Regular.ttf"),
  });

  return fontsLoaded;
};

export default useLoadStaticResources;
