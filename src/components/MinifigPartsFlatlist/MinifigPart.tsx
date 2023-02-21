import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { minifigPartDataType } from "../../types/minifigs";
import { colors, fonts } from "../../styles";

interface MinifigPartProps {
  element: minifigPartDataType;
}

const MinifigPart = ({ element }: MinifigPartProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: element.part.part_img_url }} />
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {element.part.name}
        </Text>
        <Text style={styles.partId}>{element.part.part_num}</Text>
      </View>
    </View>
  );
};

export default MinifigPart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    width: "100%",
  },
  image: {
    aspectRatio: 1,
    height: "100%",
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 20,
  },
  details: {
    flex: 1,
  },
  name: {
    ...fonts.p1,
    color: colors.black,
  },
  partId: {
    ...fonts.p1,
    color: colors.orange,
  },
});
