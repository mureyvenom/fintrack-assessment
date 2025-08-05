import { withAlphaHex } from "with-alpha-hex";

export const addAlpha = (color: string, opacity: number) => {
  return withAlphaHex(color, opacity);
};
