import { createSlice } from "@reduxjs/toolkit";

export interface initialStateTypes {
  formValues: {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
}

const initialState = {
  formValues: {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  },
} as initialStateTypes;

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    preserveFormValues: (state, action) => {
      state.formValues = action.payload;
    },
    clearAllFormValues: (state) => {
      state.formValues = initialState.formValues;
    },
  },
});

export const selectFormSlice = ({ form }) => form;

export const { preserveFormValues, clearAllFormValues } = formSlice.actions;
export default formSlice.reducer;
