import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import {
  getAllMinifigsByThemeId,
  getMinifigPartsById,
} from "../store/minifigsSlice";

import { THEMES } from "../types/enums";

const useFetchInitialData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllMinifigsByThemeId(THEMES.HARRY_POTTER));
    dispatch(getMinifigPartsById("fig-012307"));
  }, []);
};

export default useFetchInitialData;
