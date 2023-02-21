import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { placeholders } from "../../placeholders";
import { containers, fonts } from "../../styles";
import { minifigDataType } from "../../types/minifigs";
import CustomButton from "../../components/CustomButton";
import WebViewModal from "../../components/Modals/WebViewModal";
import MinifigFlatlist from "../../components/MinifigFlatlist/MinifigFlatlist";

interface HomeViewProps {
  flatlistData: minifigDataType[];
  selectedMinifig: minifigDataType;
  webViewUrl: string | null;
  openWebView: (url: string) => void;
  onWebViewClose: () => void;
  onChooseBtnPress: () => void;
  onSelection: (item: minifigDataType) => void;
}

export const HomeView = ({
  flatlistData,
  selectedMinifig,
  webViewUrl,
  openWebView,
  onWebViewClose,
  onChooseBtnPress,
  onSelection,
}: HomeViewProps) => {
  return (
    <View style={styles.background}>
      <WebViewModal url={webViewUrl} onClose={onWebViewClose} />

      <View style={styles.container}>
        <Text style={styles.title}>{placeholders.home.title}</Text>
        <MinifigFlatlist
          style={styles.flatListWrapper}
          data={flatlistData}
          selectedMinifig={selectedMinifig}
          onSelection={onSelection}
          onShowDetails={openWebView}
        />
        <CustomButton
          disabled={!selectedMinifig}
          text={placeholders.home.button}
          onPress={onChooseBtnPress}
        />
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
  flatListWrapper: {
    width: "100%",
  },
});
