// @ts-nocheck
import React from "react";

const DefaultLayout = (Component) => {
  return function WrappedComponent(props) {
    return (
      <div className="flex items-center justify-center pb-10 md:pb-24 xl:pb-32 px-4 md:px-7 xl:px-14 2xl:px-24 ">
        {Component && <Component {...props} />}
      </div>
    );
  };
};

export default DefaultLayout;
