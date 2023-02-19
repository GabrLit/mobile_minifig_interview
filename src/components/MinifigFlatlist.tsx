import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import MinifigCard from "./MinifigCard";
import useDimensions from "../hooks/useDimensions";
import { minifigDataType } from "../types/minifigs";

interface MinifigFlatlistProps {
  style: ViewStyle;
  data: minifigDataType[];
  selectedMinifig: minifigDataType;
  onSelection: (item: minifigDataType) => void;
}

const MinifigFlatlist = ({
  style,
  data,
  selectedMinifig,
  onSelection,
}: MinifigFlatlistProps) => {
  const { width } = useDimensions();

  if (!data) return <ActivityIndicator size="large" />;

  return (
    <View style={style}>
      <FlatList
        style={styles.flatlist}
        keyExtractor={(item) => item.set_num}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <MinifigCard
            item={item}
            highlighted={
              selectedMinifig && item.set_num === selectedMinifig.set_num
            }
            cardWidth={width * 0.8}
            isFirstElement={index === 0}
            isLastElement={data.length - 1 === index}
            firstAndLastElementMargin={width * 0.1}
            onPress={onSelection}
          />
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const Separator = () => {
  return <View style={styles.separator}></View>;
};

export default MinifigFlatlist;

const styles = StyleSheet.create({
  flatlist: { height: 300 },
  separator: {
    width: 20,
  },
});
