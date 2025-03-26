import React from "react";
import ComponentWrapper from "../wrapper/ComponentWrapper";

const Consultation = () => {
  const heading = "Manage 1:1 Consultations";
  const text =
    "Hassle-free scheduling of your 1-1 instant consultations with your clients in a few clicks.";
  const imageSrc = "/images/consultation/main.png";
  return (
    <ComponentWrapper
      heading={heading}
      text={text}
      imageSrc={imageSrc}
      reverseOrder={true}
    />
  );
};

export default Consultation;
