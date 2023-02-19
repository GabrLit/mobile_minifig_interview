import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { placeholders } from "../../placeholders";
import MinifigFlatlist from "../../components/MinifigFlatlist";
import { containers, fonts } from "../../styles";
import { minifigDataType } from "../../types/minifigs";

interface HomeViewProps {
  flatlistData: minifigDataType[];
  selectedMinifig: minifigDataType;
  onChooseBtnPress: () => void;
  onSelection: (item: minifigDataType) => void;
}

export const HomeView = ({
  flatlistData,
  selectedMinifig,
  onChooseBtnPress,
  onSelection,
}: HomeViewProps) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{placeholders.home.title}</Text>
        <MinifigFlatlist
          style={styles.flatListWrapper}
          data={flatlistData}
          selectedMinifig={selectedMinifig}
          onSelection={onSelection}
        />
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            !selectedMinifig && styles.buttonContainerDisabled,
          ]}
          disabled={!selectedMinifig}
          onPress={() => selectedMinifig && onChooseBtnPress()}
        >
          <Text style={styles.buttonText}>{placeholders.home.button}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: containers.background,
  container: {
    ...containers.defaultCentered,
  },
  title: {
    ...fonts.h1,
  },
  buttonContainer: {
    ...containers.standardButton,
  },
  buttonText: {
    ...fonts.h2,
  },
  buttonContainerDisabled: {
    opacity: 0.3,
  },
  flatListWrapper: {
    width: "100%",
  },
});
