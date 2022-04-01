import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import data from "./components/data";
import { useState } from "react";
export default function App() {
  const timersJSX = data.map((event) => {
    return <Timer event={event} key={event.name} />;
  });
  return (
    <div className="App">
      <Header />
      {timersJSX[3]}
      <Footer />
    </div>
  );
}
