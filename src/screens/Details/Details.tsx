import React, { useState } from "react";
import { useSelector } from "react-redux";
import { callFakeRestAPI } from "../../api/fakeAPI";
import useFetchMinifigParts from "../../hooks/useFetchMinifigParts";
import { clearAllFormValues, selectFormSlice } from "../../store/formSlice";
import {
  selectMinifigSlice,
  setMinifigsToDisplay,
  setSelectedMinifig,
} from "../../store/minifigsSlice";
import { useAppDispatch } from "../../store/store";
import DetailsView from "./DetailsView";

const Details = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [summaryModalVisible, setSummaryModalVisible] = useState(false);

  const { formValues } = useSelector(selectFormSlice);
  const { selectedMinifig, selectedMinifigParts } =
    useSelector(selectMinifigSlice);

  useFetchMinifigParts(summaryModalVisible);

  const handleSubmit = async () => {
    try {
      await callFakeRestAPI(formValues, selectedMinifig);
    } catch (err) {
      console.error("Failed to call fake rest API");
    }
    dispatch(setSelectedMinifig(null));
    dispatch(clearAllFormValues());
    dispatch(setMinifigsToDisplay());
    navigation.navigate("Home");
  };

  return (
    <DetailsView
      selectedMinifig={selectedMinifig}
      selectedMinifigParts={selectedMinifigParts}
      summaryModalVisible={summaryModalVisible}
      onSummaryModalClose={() => setSummaryModalVisible(false)}
      openSummaryModal={() => setSummaryModalVisible(true)}
      onSubmit={handleSubmit}
    />
  );
};

export default Details;
