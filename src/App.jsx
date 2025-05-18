import React , { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SlotSelection from "./pages/SlotSelection";
import { AppContext } from "./Context/AppContext";
import Vission from './components/Vission/Vission'
import Navbar from './components/Navbar/Navbar';

function App() {
     const [states,setStates] = useState([]);
     const [cities,setCities] = useState([]);
     const [centers,setCenters] = useState([]);
     const [selectedState , setSelectedState] = useState('');
     const [selectedCity, setSelectedCity] = useState(''); 
    return (
        <AppContext.Provider value={{ states, setStates, cities, setCities, centers, setCenters, selectedState, setSelectedState, selectedCity, setSelectedCity }}>
            <Vission/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/slot-selection" element={<SlotSelection />} />
            </Routes>
        </AppContext.Provider>
    )
}

export default App;