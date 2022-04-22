import { Route, Routes } from "react-router-dom";
import "./App.css";
import Berry from "./Components/berries/berry";
// import React, { useEffect, useState } from "react";
const App = () => {
  return (
    <div>
      {/* <link to={`berryInfo`}>Go to berries</link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/berryInfo" element={<Berry />} />
      </Routes>
    </div>
  );
};

export default App;
