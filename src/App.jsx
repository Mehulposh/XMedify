import React, { useState,useEffect } from 'react'
import { getStates } from './api/api';
import './App.css'

function App() {
  const [states,setStates] = useState([]);
  // const [cities,setCities] = useState([]);
  // const [centers,setCenters] = useState([]);

  useEffect(()=> {
    async function fetchStates(){
      try{
        const data = await getStates();
        console.log(data);
        setStates(data);
      }catch(err){
        console.error(err); 
      }
    };

    fetchStates();
  },[]);

  return (
    <div>
      States :- 
      <div>
        {states}
      </div>
    </div>
  )
}

export default App
