import React, {useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Category from "./Components/Category";
import TopRest from "./Components/TopRest";

function App(){

  return (
    <>
      <Header/>
      <Category/>
      <TopRest/>
    </>
  );
}

export default App