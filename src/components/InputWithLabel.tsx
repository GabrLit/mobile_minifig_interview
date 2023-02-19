import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors, fonts } from "../styles";

interface InputWithLabelProps {
  labelText: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChangeText: (e) => unknown;
}

const InputWithLabel = ({
  labelText,
  value,
  error,
  placeholder,
  onChangeText,
}: InputWithLabelProps) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.topControl}>
        <Text style={styles.label}>{labelText}</Text>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputWithLabel;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  topControl: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    ...fonts.h3,
  },
  input: {
    ...fonts.p1,
    color: colors.black,
    height: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: colors.orange,
  },
});
