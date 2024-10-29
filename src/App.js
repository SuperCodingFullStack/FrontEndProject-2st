import React from "react";
import { Reset } from "styled-reset";
import AllWrap from "./components/Wrapper/AllWrap";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      {/* CSS 리셋 기능 */}
      <Reset />
      <AllWrap />
      {/* <Cart></Cart> */}
    </>
  );
}

export default App;
