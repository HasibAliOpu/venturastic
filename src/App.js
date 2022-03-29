import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import WhatWeWouldDo from "./components/WhatWeWouldDo/WhatWeWouldDo";
import Corporate from "./components/Corporate/Corporate";
import FirstProject from "./components/FirstProject/FirstProject";
import AboutUs from "./components/AboutUs/AboutUs";
import OurTeam from "./components/OurTeam/OurTeam";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/whatWeWouldDo"
          element={<WhatWeWouldDo></WhatWeWouldDo>}
        ></Route>
        <Route path="/corporate" element={<Corporate></Corporate>}></Route>
        <Route
          path="/firstProject"
          element={<FirstProject></FirstProject>}
        ></Route>
        <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/ourTeam" element={<OurTeam></OurTeam>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
