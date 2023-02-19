import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  selectMinifigSlice,
  setSelectedMinifig,
} from "../../store/minifigsSlice";
import { HomeView } from "./HomeView";
import { minifigDataType } from "../../types/minifigs";

const Home = ({ navigation }) => {
  const [webViewUrl, setWebViewUrl] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const { data, loading, selectedMinifig, minifigsToDisplay } =
    useAppSelector(selectMinifigSlice);

  const handleNextScreen = () => {
    navigation.navigate("DetailsForm");
  };

  const handleSelectionChange = (item: minifigDataType) => {
    dispatch(setSelectedMinifig(item));
  };

  return (
    <HomeView
      flatlistData={minifigsToDisplay}
      selectedMinifig={selectedMinifig}
      webViewUrl={webViewUrl}
      openWebView={(url: string) => setWebViewUrl(url)}
      onWebViewClose={() => setWebViewUrl(null)}
      onChooseBtnPress={handleNextScreen}
      onSelection={handleSelectionChange}
    />
  );
};

export default Home;
