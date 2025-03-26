import React from "react";
import ComponentWrapper from "../wrapper/ComponentWrapper";

const PiracyControl = () => {
  const heading = "Sell recorded content with piracy control";
  const text =
    "We will safeguard all your content from piracy to ensure you get paid for your hard work";
  const imageSrc = "/images/piracyControl/main.png";
  return (
    <ComponentWrapper
      heading={heading}
      text={text}
      imageSrc={imageSrc}
      imageFirst={true}
    />
  );
};

export default PiracyControl;
