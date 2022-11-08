import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Loader = ({ loadingState }) => {
  return (
    <PulseLoader
      color="#e2745a"
      loading={loadingState}
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
