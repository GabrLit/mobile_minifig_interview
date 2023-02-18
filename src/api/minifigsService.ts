import { BASE_URL } from "../constant";
import { minifigDataType, minifigPartDataType } from "../types/minifigs";
import { THEMES } from "../types/enums";
import { fetchEverythingFromAllPages } from "./helpers";

export const fetchAllMinifigsByThemeId = async (
  themeId: THEMES
): Promise<minifigDataType[]> =>
  fetchEverythingFromAllPages(`${BASE_URL}/?in_theme_id=${themeId}`) as Promise<
    minifigDataType[]
  >;

export const fetchMinifigPartsById = async (
  minifigId: string
): Promise<minifigPartDataType[]> =>
  fetchEverythingFromAllPages(`${BASE_URL}/${minifigId}/parts/?`) as Promise<
    minifigPartDataType[]
  >;
