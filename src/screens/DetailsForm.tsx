import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { containers } from "../styles";

const DetailsForm = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text>DetailsForm</Text>
      </View>
    </View>
  );
};

export default DetailsForm;

const styles = StyleSheet.create({
  background: containers.background,
  container: {
    ...containers.defaultCentered,
    backgroundColor: "red",
  },
});
