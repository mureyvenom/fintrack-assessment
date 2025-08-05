"use client";
import { useEffect, useState } from "react";

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(global?.window?.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(global?.window?.innerWidth || window?.innerWidth);
  };

  useEffect(() => {
    (global?.window || window).addEventListener(
      "resize",
      handleWindowSizeChange
    );
    return () => {
      (global?.window || window).removeEventListener(
        "resize",
        handleWindowSizeChange
      );
    };
  }, []);

  return width <= 768;
};

export default useCheckMobileScreen;
