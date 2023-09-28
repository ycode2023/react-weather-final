import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://yaldakesh.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yalda Keshavarzi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ycode2023/react-weather-final"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://vercel.com/yalda-keshavarzis-projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
