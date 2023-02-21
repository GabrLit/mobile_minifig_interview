import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { minifigDataType } from "../../types/minifigs";
import { colors, fonts } from "../../styles";
import { placeholders } from "../../placeholders";
import { NO_IMG_PLACEHOLDER_URL } from "../../constant";

interface MinifigCardProps {
  item: minifigDataType;
  highlighted: boolean;
  cardWidth: number;
  isFirstElement: boolean;
  isLastElement: boolean;
  firstAndLastElementMargin: number;
  onPress: (item: minifigDataType) => void;
  onShowDetails: (url: string) => void;
}

const MinifigCard = ({
  item,
  highlighted,
  cardWidth,
  isFirstElement,
  isLastElement,
  firstAndLastElementMargin,
  onPress,
  onShowDetails,
}: MinifigCardProps) => {
  return (
    <Pressable
      testID={`minifig-${item.set_num}`}
      onPress={() => onPress(item)}
      style={[
        styles.wrapper,
        highlighted && styles.highlight,
        { width: cardWidth },
        isFirstElement && { marginLeft: firstAndLastElementMargin },
        isLastElement && { marginRight: firstAndLastElementMargin },
      ]}
    >
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: item.set_img_url || NO_IMG_PLACEHOLDER_URL,
          }}
        />
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.nameTextBox}>{item.name}</Text>
        <TouchableOpacity
          style={styles.showDetailsBtn}
          onPress={() => onShowDetails(item.set_url)}
        >
          <Text style={styles.showDetailsBtnText}>
            {placeholders.home.showDetails}
          </Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default MinifigCard;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: colors.white,
    alignItems: "center",
  },
  imageWrapper: {
    width: "100%",
    height: "70%",
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  detailsBox: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    width: "90%",
  },
  nameTextBox: { ...fonts.p1, color: colors.black, textAlign: "center" },
  showDetailsBtn: { padding: 10 },
  showDetailsBtnText: {
    ...fonts.h3,
    color: colors.orange,
  },
  highlight: {
    borderColor: colors.orange,
    borderWidth: 5,
  },
});
