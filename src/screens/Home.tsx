import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { THEMES } from "../types/enums";
import {
  getAllMinifigsByThemeId,
  getMinifigPartsById,
  selectMinifigSlice,
  selectNumberOfRandomMinifigs,
} from "../store/minifigsSlice";
import { useSelector } from "react-redux";
import { HOW_MANY_MINIFIGS } from "../constant";

const Home = () => {
  const dispatch = useAppDispatch();
  const minifigsToDisplay = useSelector(
    selectNumberOfRandomMinifigs(HOW_MANY_MINIFIGS)
  );
  const { data, loading } = useSelector(selectMinifigSlice);

  useEffect(() => {
    dispatch(getAllMinifigsByThemeId(THEMES.HARRY_POTTER));
    dispatch(getMinifigPartsById("fig-012307"));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Homes</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
