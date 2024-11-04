import React from "react";
import { Reset } from "styled-reset";
import AllWrap from "./components/Wrapper/AllWrap";
import ContextProvider from "./pages/Cart/OurContext";

function App() {
  return (
    <>
      {/* CSS Reset */}
      <Reset />
      <AllWrap />
    </>
  );
}

export default App;
