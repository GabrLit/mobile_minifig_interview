import { StyleSheet, Modal, View } from "react-native";
import React from "react";
import { colors } from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CustomModalProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

const CustomModal = ({ children, visible, onClose }: CustomModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <View style={styles.iconBox}>
          <Ionicons
            onPress={onClose}
            name="exit-outline"
            size={24}
            color="black"
          />
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.white,
    margin: 20,
    padding: 20,
    paddingHorizontal: 30,
    height: "95%",
    borderRadius: 20,
  },
  iconBox: {
    marginLeft: 0,
    padding: 5,
    paddingBottom: 20,
    alignItems: "flex-end",
  },
});
