import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomModal from "../CustomModal";
import WebView from "react-native-webview";

interface WebViewModalProps {
  url: string;
  onClose: () => void;
}

const WebViewModal = ({ url, onClose }: WebViewModalProps) => {
  return (
    <>
      {url && (
        <CustomModal visible={true} onClose={onClose}>
          <WebView
            testID="web-view-modal"
            source={{ uri: url }}
            startInLoadingState={true}
            renderLoading={() => (
              <ActivityIndicator style={styles.webViewLoader} size="large" />
            )}
          />
        </CustomModal>
      )}
    </>
  );
};

export default WebViewModal;

const styles = StyleSheet.create({
  webViewLoader: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: [{ translateX: -20 }],
  },
});
