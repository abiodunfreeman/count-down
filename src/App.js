import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import data from "./components/data";
import { useState } from "react";
export default function App() {
  const [angie, paris, kevon] = data;
  const timersJSX = data.map((event) => {
    return <Timer person={event} />;
  });
  return (
    <div className="App">
      <Header />
      {timersJSX}
      <Footer />
    </div>
  );
}
