import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import React from "react";
import MinifigPart from "./MinifigPart";
import { minifigPartDataType } from "../../types/minifigs";
import { placeholders } from "../../placeholders";
import { colors, fonts } from "../../styles";

interface MinifigPartsFlatlistProps {
  style?: ViewStyle;
  selectedMinifigParts: minifigPartDataType[];
}

const MinifigPartsFlatlist = ({
  style,
  selectedMinifigParts,
}: MinifigPartsFlatlistProps) => {
  if (!selectedMinifigParts)
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator />
      </View>
    );
  return (
    <View style={[style, styles.wrapper]}>
      <Text style={styles.partCountText}>
        {placeholders.summaryModal.partCount[0] +
          selectedMinifigParts.length +
          placeholders.summaryModal.partCount[1]}
      </Text>

      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={selectedMinifigParts}
        renderItem={({ item }) => <MinifigPart element={item} />}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const Separator = () => {
  return <View style={styles.separator}></View>;
};

export default MinifigPartsFlatlist;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },
  partCountText: {
    ...fonts.p1,
    color: colors.black,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  separator: {
    height: 10,
  },
});
