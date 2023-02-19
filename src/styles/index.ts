import { ViewStyle } from "react-native";

export const colors = {
  white: "#ffffff",
  black: "#000000",
  blue: "#018DEC",
  orange: "#FFA500",
};

const fontStandard = {
  fontFamily: "righteous",
  fontSize: 12,
  color: colors.white,
};

export const fonts = {
  h1: { ...fontStandard, fontSize: 24 },
  h2: { ...fontStandard, fontSize: 20 },
  h3: { ...fontStandard, fontSize: 16 },
  p1: { ...fontStandard, fontSize: 12 },
};

export const containers: Record<string, ViewStyle> = {
  background: {
    flex: 1,
    backgroundColor: "#1F2136",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  defaultCentered: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "70%",
    marginVertical: 50,
  },
  standardButton: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
};
