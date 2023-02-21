import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { containers, fonts } from "../../styles";
import { placeholders } from "../../placeholders";
import DetailsForm from "./DetailsForm";
import SummaryModal from "../../components/Modals/SummaryModal";
import { minifigDataType, minifigPartDataType } from "../../types/minifigs";

interface DetailsViewProps {
  selectedMinifig: minifigDataType;
  selectedMinifigParts: minifigPartDataType[];
  summaryModalVisible: boolean;
  onSummaryModalClose: () => void;
  openSummaryModal: () => void;
  onSubmit: () => void;
}

const DetailsView = ({
  selectedMinifig,
  selectedMinifigParts,
  summaryModalVisible,
  onSummaryModalClose,
  openSummaryModal,
  onSubmit,
}: DetailsViewProps) => {
  const MemoizedForm = useMemo(
    () => (
      <View style={styles.container}>
        <Text style={styles.title}>{placeholders.detailsForm.title}</Text>
        <DetailsForm
          summaryModalVisible={summaryModalVisible}
          openSummary={openSummaryModal}
        />
      </View>
    ),
    [summaryModalVisible]
  );

  return (
    <View style={styles.background}>
      <SummaryModal
        selectedMinifig={selectedMinifig}
        selectedMinifigParts={selectedMinifigParts}
        visible={summaryModalVisible}
        onClose={onSummaryModalClose}
        onSubmit={onSubmit}
      />
      {MemoizedForm}
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
