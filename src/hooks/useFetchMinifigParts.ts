import { useEffect } from "react";
import { getCurrentMinifigParts } from "../store/minifigsSlice";
import { useAppDispatch } from "../store/store";

const useFetchMinifigParts = <T>(dependencyVariable: T) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!dependencyVariable) return;
    dispatch(getCurrentMinifigParts());
  }, [dependencyVariable]);
};

export default useFetchMinifigParts;
