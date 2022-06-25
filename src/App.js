import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
// import ClockLoader from "react-spinners/ClockLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <div className="App">
      {/* {loading ? (
        <div className="loader">
          <ClockLoader color={"#56c9aa"} loading={loading} size={150} />
        </div>
      ) : ( */}
        <React.Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </React.Fragment>
      {/* )} */}
    </div>
  );
}

export default App;
