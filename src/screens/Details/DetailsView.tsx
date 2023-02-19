import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { containers, fonts } from "../../styles";
import { placeholders } from "../../placeholders";
import DetailsForm from "./DetailsForm";

const DetailsView = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{placeholders.detailsForm.title}</Text>
        <DetailsForm />
      </View>
    </View>
  );
};

export default DetailsView;

const styles = StyleSheet.create({
  background: containers.background,
  container: {
    ...containers.defaultCentered,
    height: "80%",
  },
  title: {
    ...fonts.h1,
  },
});
