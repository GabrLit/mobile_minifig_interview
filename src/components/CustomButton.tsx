import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { containers, fonts } from "../styles";

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton = ({ disabled, text, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        disabled && styles.buttonContainerDisabled,
      ]}
      disabled={disabled}
      onPress={() => !disabled && onPress()}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    ...containers.standardButton,
  },
  buttonText: {
    ...fonts.h2,
  },
  buttonContainerDisabled: {
    opacity: 0.3,
  },
});
