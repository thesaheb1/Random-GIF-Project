import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Gifcontainer from "./Components/Gifcontainer";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start md:justify-center items-center bg-[#371B58] bg-gradient-to-t overflow-x-hidden">
      <Gifcontainer />
      <Toaster />
    </div>
  );
}

export default App;
