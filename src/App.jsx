import React from "react";
import BootstrapComponent from "./components/BootstrapComponent";
import CustomCursor from "./components/customCursor/CustomCursor";

import "./scss/index.scss";

const App = () => {
  return (
    <>
      <CustomCursor />
      <BootstrapComponent />
    </>
  );
};

export default App;
