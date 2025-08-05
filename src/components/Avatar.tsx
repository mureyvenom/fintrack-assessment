import Image from "next/image";
import React from "react";

interface Props {
  size: number;
  source: string;
}

const Avatar = ({ size, source }: Props) => {
  return (
    <Image
      alt="Avatar"
      height={size}
      width={size}
      style={{ borderRadius: size, overflow: "hidden" }}
      src={source}
    />
  );
};

export default Avatar;
