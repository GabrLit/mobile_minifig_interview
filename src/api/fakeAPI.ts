import { initialStateTypes } from "../store/formSlice";
import { minifigDataType } from "../types/minifigs";

export const callFakeRestAPI = async (
  formValues: initialStateTypes["formValues"],
  selectedMinifig: minifigDataType
) => {
  // proposed data structure, we only need personal data and minifigId,
  // the rest should be present in our database, since we would be the ones who
  // are in charge of rebrickable.com server
  const dataStructure = {
    personalData: { ...formValues },
    minifigId: selectedMinifig.set_num,
  };

  return fetch("localhost/placeOrder", {
    method: "POST",
    body: JSON.stringify(dataStructure),
  });
};
