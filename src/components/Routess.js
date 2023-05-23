import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './Home'
import Models from './Models'
import Model3 from './Model3'
import Modelx from './Modelx'
import Modely from './Modely'
import Solarroof from './Solarroof'
import Solarpanels from './Solarpanels'
import Powerwall from './Powerwall'
import NavBar from "./NavBar";
import Shop from "./Shop";

function Routess() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/models" element={<Models />} />
                    <Route path="/model3" element={<Model3 />} />
                    <Route path="/modelx" element={<Modelx />} />
                    <Route path="/modely" element={<Modely />} />
                    <Route path="/solarroof" element={<Solarroof />} />
                    <Route path="/solarpanels" element={<Solarpanels />} />
                    <Route path="/powerwall" element={<Powerwall />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routess
