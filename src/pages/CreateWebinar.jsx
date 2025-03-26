import React from "react";
import ComponentWrapper from "../wrapper/ComponentWrapper";

const CreateWebinar = () => {
  const heading = "Create your own Webinar";
  const text =
    "Conduct webinars, host workshops, and live classes with a premium Zoom experience. Also, you'll be able to track upsell and attendance!";
  const imageSrc = "/images/createWebinar/main.png";
  return (
    <ComponentWrapper
      heading={heading}
      text={text}
      imageSrc={imageSrc}
      reverseOrder={true}
    />
  );
};

export default CreateWebinar;
