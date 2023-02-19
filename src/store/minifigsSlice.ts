import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllMinifigsByThemeId,
  fetchMinifigPartsById,
} from "../api/minifigsService";
import { minifigDataType, minifigPartDataType } from "../types/minifigs";
import { LOADING_STATUS, THEMES } from "../types/enums";
import { HOW_MANY_MINIFIGS } from "../constant";
import { getNumberOfRandomElements } from "../utils/getNumberOfRandomElements";

interface initialStateTypes {
  data: minifigDataType[];
  minifigsToDisplay: minifigDataType[];
  selectedMinifig: minifigDataType | null;
  selectedMinifigParts: minifigPartDataType[] | null;
  loading: LOADING_STATUS;
}

const initialState = {
  data: [],
  minifigsToDisplay: [],
  selectedMinifig: null,
  selectedMinifigParts: null,
  loading: LOADING_STATUS.IDLE,
} as initialStateTypes;

export const getAllMinifigsByThemeId = createAsyncThunk(
  "minifigs/getAllMinifigsByThemeId",
  async (themeId: THEMES) => await fetchAllMinifigsByThemeId(themeId)
);

export const getMinifigPartsById = createAsyncThunk(
  "minifigs/getMinifigPartsById",
  async (minifigId: string) => await fetchMinifigPartsById(minifigId)
);

const minifigsSlice = createSlice({
  name: "minifigs",
  initialState,
  reducers: {
    setSelectedMinifig: (state, action) => {
      state.selectedMinifig = action.payload;
    },
    setMinifigsToDisplay: (state, action) => {
      state.minifigsToDisplay = getNumberOfRandomElements(
        action.payload,
        HOW_MANY_MINIFIGS
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMinifigsByThemeId.pending, (state) => {
      state.loading = LOADING_STATUS.PENDING;
    });
    builder.addCase(getAllMinifigsByThemeId.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = LOADING_STATUS.SUCCEEDED;
      minifigsSlice.caseReducers.setMinifigsToDisplay(state, {
        payload: action.payload,
        type: "",
      });
    });
    builder.addCase(getAllMinifigsByThemeId.rejected, (state, action) => {
      state.loading = LOADING_STATUS.FAILED;
      console.error(action.error.message);
    });
    builder.addCase(getMinifigPartsById.fulfilled, (state, action) => {
      state.selectedMinifigParts = action.payload;
    });
  },
});

export const selectMinifigSlice = ({ minifigs }) => minifigs;

export const { setSelectedMinifig } = minifigsSlice.actions;
export default minifigsSlice.reducer;
