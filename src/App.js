import React from "react";
import { Reset } from "styled-reset";
import AllWrap from "./components/Wrapper/AllWrap";
import ContextProvider from "./pages/Cart/OurContext";

function App() {
  return (
    <ContextProvider>
      {/* CSS 리셋 기능 */}
      <Reset />
      <AllWrap />
    </ContextProvider>
  );
}

export default App;
