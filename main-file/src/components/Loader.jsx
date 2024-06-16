import React from "react";
import Skeleton from "react-loading-skeleton";

const Loader = () => {
  return (
    <div>
      {" "}
      <Skeleton count={5} />
      <Skeleton count={20} />
      <Skeleton count={50} />
      <Skeleton count={15} />
    </div>
  );
};

export default Loader;
