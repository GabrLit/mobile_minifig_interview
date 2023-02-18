import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  fetchAllMinifigsByThemeId,
  fetchMinifigPartsById,
} from "../api/minifigsService";
import { minifigDataType } from "../types/minifigs";
import { LOADING_STATUS, THEMES } from "../types/enums";

interface initialStateTypes {
  data: minifigDataType[];
  selectedMinifig: minifigDataType;
  selectedMinifigParts: minifigDataType[];
  loading: LOADING_STATUS;
}

const initialState = {
  data: [],
  selectedMinifig: {},
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMinifigsByThemeId.pending, (state) => {
      state.loading = LOADING_STATUS.PENDING;
    });
    builder.addCase(getAllMinifigsByThemeId.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = LOADING_STATUS.SUCCEEDED;
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

export const selectNumberOfRandomMinifigs = (howMany: number) =>
  createSelector(
    ({ minifigs }) => minifigs,
    ({ data }): minifigDataType[] => {
      const copy = [...data];
      const shuffled = copy.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, howMany);
    }
  );

export default minifigsSlice.reducer;
