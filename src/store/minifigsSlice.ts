import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllMinifigsByThemeId,
  fetchMinifigPartsById,
} from "../api/minifigsService";
import { minifigDataType, minifigPartDataType } from "../types/minifigs";
import { LOADING_STATUS, THEMES } from "../types/enums";
import { HOW_MANY_MINIFIGS } from "../constant";
import { getNumberOfRandomElements } from "../utils/getNumberOfRandomElements";
import { RootState } from "./store";

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

export const getCurrentMinifigParts = createAsyncThunk(
  "minifigs/getMinifigPartsById",
  async (_, { getState }) => {
    const currentState = getState() as RootState;
    return await fetchMinifigPartsById(
      currentState.minifigs.selectedMinifig.set_num
    );
  }
);

const minifigsSlice = createSlice({
  name: "minifigs",
  initialState,
  reducers: {
    setSelectedMinifig: (state, action) => {
      state.selectedMinifig = action.payload;
    },
    setMinifigsToDisplay: (state) => {
      state.minifigsToDisplay = getNumberOfRandomElements(
        state.data,
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
      minifigsSlice.caseReducers.setMinifigsToDisplay(state);
    });
    builder.addCase(getAllMinifigsByThemeId.rejected, (state, action) => {
      state.loading = LOADING_STATUS.FAILED;
      console.error(action.error.message);
    });
    builder.addCase(getCurrentMinifigParts.fulfilled, (state, action) => {
      state.selectedMinifigParts = action.payload;
    });
  },
});

export const selectMinifigSlice = ({ minifigs }) => minifigs;

export const { setSelectedMinifig, setMinifigsToDisplay } =
  minifigsSlice.actions;
export default minifigsSlice.reducer;
