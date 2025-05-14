import React, { useState,useEffect } from 'react'

import './App.css'
import Vission from './components/Vission/Vission'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Searchcard from './components/Searchcard/SearchCard';

function App() {
  // const [states,setStates] = useState([]);
  // const [cities,setCities] = useState([]);
  const [centers,setCenters] = useState([]);

  // useEffect(()=> {
  //   async function fetchStates(){
  //     try{
  //       const data = await getStates();
  //       console.log(data);
  //       setStates(data);
  //     }catch(err){
  //       console.error(err); 
  //     }
  //   };

  //   fetchStates();
  // },[]);

  return (
    <div>
    <Vission/>
    <Navbar/>
    <Hero/>
    <Searchcard  setCenters={setCenters}/>
    </div>
  )
}

export default App
