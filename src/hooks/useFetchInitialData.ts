import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { getAllMinifigsByThemeId } from "../store/minifigsSlice";

import { THEMES } from "../types/enums";

const useFetchInitialData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllMinifigsByThemeId(THEMES.HARRY_POTTER));
  }, []);
};

export default useFetchInitialData;
