import { useEffect } from "react";
import { BackHandler } from "react-native";

const usePreserveFormValues = (handleBackButton: () => boolean) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);
};

export default usePreserveFormValues;
