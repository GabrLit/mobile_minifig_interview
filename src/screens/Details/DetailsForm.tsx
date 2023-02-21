import { StyleSheet, View, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import CustomButton from "../../components/CustomButton";
import { placeholders } from "../../placeholders";
import InputWithLabel from "../../components/InputWithLabel";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { preserveFormValues, selectFormSlice } from "../../store/formSlice";
import * as Yup from "yup";

interface DetailsFormProps {
  summaryModalVisible: boolean;
  openSummary: () => void;
}

const DetailsForm = ({
  summaryModalVisible,
  openSummary,
}: DetailsFormProps) => {
  const dispatch = useAppDispatch();
  const { formValues } = useAppSelector(selectFormSlice);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Must be valid email")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string()
      .required("State is required")
      .matches(/^[A-Z]{2}$/, "State must be a valid two-letter abbreviation"),
    zip: Yup.string()
      .required("Zipcode is required")
      .matches(
        /^[0-9]{5}(-[0-9]{4})?$/,
        "Zip code must be a valid US zip code"
      ),
  });

  const formik = useFormik({
    initialValues: formValues,
    validationSchema,
    validateOnMount: true,
    onSubmit: () => {
      openSummary();
    },
  });

  // overwrite default hardware back press and preserve form values
  useEffect(() => {
    const backAction = () => {
      dispatch(preserveFormValues(formik.values));
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [formik.values]);

  // must revalidate when closing modal
  useEffect(() => {
    formik.validateForm();
  }, [summaryModalVisible]);

  return (
    <>
      <View style={styles.formContainer}>
        <InputWithLabel
          labelText="Full Name"
          value={formik.values.name}
          onChangeText={formik.handleChange("name")}
          error={formik.errors.name as string}
          placeholder={"Jason Lee"}
        />
        <InputWithLabel
          labelText="Email"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          error={formik.errors.email as string}
          placeholder={"jason.lee9876@example.com"}
        />
        <InputWithLabel
          labelText="Address"
          value={formik.values.address}
          onChangeText={formik.handleChange("address")}
          error={formik.errors.address as string}
          placeholder={"123 Main St"}
        />
        <InputWithLabel
          labelText="City"
          value={formik.values.city}
          onChangeText={formik.handleChange("city")}
          error={formik.errors.city as string}
          placeholder={"Anytown"}
        />
        <InputWithLabel
          labelText="State"
          value={formik.values.state}
          onChangeText={formik.handleChange("state")}
          error={formik.errors.state as string}
          placeholder={"CA"}
        />
        <InputWithLabel
          labelText="Zip Code"
          value={formik.values.zip}
          onChangeText={formik.handleChange("zip")}
          error={formik.errors.zip as string}
          placeholder={"90123"}
        />
      </View>
      <CustomButton
        disabled={!formik.isValid}
        text={placeholders.detailsForm.button}
        onPress={formik.handleSubmit}
      />
    </>
  );
};

export default DetailsForm;

const styles = StyleSheet.create({
  formContainer: {
    width: "90%",
    marginVertical: 20,
  },
});
