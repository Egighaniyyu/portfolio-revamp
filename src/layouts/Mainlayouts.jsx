import React from "react";
import Floatingbar from "./components/Floatingbar";
import Mouseball from "./components/Mouseball";
import Navbar from "./components/Navbar";
import "../assets/css/index.css";

export default function Mainlayouts({ children }) {
  return (
    <>
      <main>
        <Mouseball />
        <Navbar />
        {children}
        <Floatingbar />
      </main>
    </>
  );
}
