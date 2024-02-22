import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import CardList from "./components/CardList";

function App() {
  const Restful = [
    {
      id: 0,
      Title: "Exclusive Deals",
      Description:
        " Save on top oral care products,available for a limited time only ",
      img: "https://cdn11.bigcommerce.com/s-2idmiil7bp/content/home/Desktop/product-exclusive-deals.jpg",
    },
    {
      id: 1,
      Title: "Electric Toothbrushes",
      Description:
        "Get a superior clean with more plaqueremoval than a regular manual toothbrush.",
      img: "https://cdn11.bigcommerce.com/s-2idmiil7bp/content/home/Desktop/product-electric-toothbrushes.jpg",
    },
    {
      id: 2,
      Title: "Replacement Brush Heads",
      Description:
        "Subscribe to the dentist-inspiredbrush head that’s right for you.",
      img: "https://cdn11.bigcommerce.com/s-2idmiil7bp/content/home/Desktop/product-replacement-brush-heads.jpg",
    },
  ];

  return (
    <>
      <CardList data={Restful} />
    </>
  );
}

export default App;
