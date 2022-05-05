import React, { Fragment } from "react";
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <Fragment>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default LoadingSpinner;
