import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomModal from "../CustomModal";
import CustomButton from "../CustomButton";
import { minifigDataType, minifigPartDataType } from "../../types/minifigs";
import { placeholders } from "../../placeholders";
import { colors, fonts } from "../../styles";
import { NO_IMG_PLACEHOLDER_URL } from "../../constant";
import MinifigPartsFlatlist from "../MinifigPartsFlatlist/MinifigPartsFlatlist";

interface SummaryModalProps {
  selectedMinifig: minifigDataType;
  selectedMinifigParts: minifigPartDataType[];
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const SummaryModal = ({
  selectedMinifig,
  selectedMinifigParts,
  visible,
  onClose,
  onSubmit,
}: SummaryModalProps) => {
  if (!selectedMinifig) return;
  return (
    <>
      {visible && (
        <CustomModal visible={true} onClose={onClose}>
          <View style={styles.container}>
            <Text style={styles.title}>{placeholders.summaryModal.title}</Text>
            <Image
              style={styles.image}
              source={{
                uri: selectedMinifig.set_img_url || NO_IMG_PLACEHOLDER_URL,
              }}
            />
            <Text style={styles.nameText}>{selectedMinifig.name}</Text>

            <MinifigPartsFlatlist
              style={styles.minifigPartsFlatlist}
              selectedMinifigParts={selectedMinifigParts}
            />
            <CustomButton text={"Submit"} onPress={onSubmit} />
          </View>
        </CustomModal>
      )}
    </>
  );
};

export default SummaryModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 10,
  },
  title: {
    ...fonts.h1,
    color: colors.black,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  nameText: {
    ...fonts.p1,
    color: colors.black,
    textAlign: "center",
    marginBottom: 20,
  },
  minifigPartsFlatlist: {
    marginBottom: 20,
  },
});
