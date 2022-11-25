import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  const location = useLocation();

  return <div>NoMatch for {location.pathname}</div>;
};

export default NoMatch;
