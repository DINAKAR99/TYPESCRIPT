import React from "react";
type horizontal = "left" | "right" | "center";
type vertical = "top" | "bottom" | "center";
type toastProps = {
  position: Exclude<`${horizontal}-${vertical}`, "center-center"> | "cenet";
  //   positions: `${horizontal}-${vertical}`;
};
export const Toast = ({ position }: toastProps) => {
  return <div>Toast {position}</div>;
};
