import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import ItsMe from "./Components/ItsMe/ItsMe";
import Bye from "./Components/Bye/Bye";
import OfficialBye from "./Components/Despedida/OfficialBye";
import OfficialHey from "./Components/Despedida/OfficialHey";
import Canvas from "./Components/Canvas/Canva";
import LetsTalk from "./Components/Canvas/LetsTalk";
import {  BrowserRouter, Route, HashRouter, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        

      <HashRouter basename="/">
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/who-am-I"} element={<ItsMe />} />
            <Route path={"/bye"} element={<Bye />} />
            <Route path={"/real-bye"} element={<OfficialBye />} />
            <Route path={"/you-made-it"} element={<OfficialHey />} />
            <Route path={"/but-first"} element={<LetsTalk />} />
            <Route path={"/canvas"} element={<Canvas />} />
        </Routes>
      </HashRouter>

    </BrowserRouter>  
    );
  }
}

export default App;
