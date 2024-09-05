import React from "react";
import Logo from "../../../assets/icon/something-wrong.png";
import Image from "next/image";

const ErrorIcon = () => {
  return (
    <Image alt="something-wrong" width={100} height={100} src={`${Logo}`} />
  );
};

export default ErrorIcon;
