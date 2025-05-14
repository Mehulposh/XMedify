import React,{useState,useEffect} from 'react';
import './Dropdown.css';

function DropDown({fetchData, placeholder , state , setFunction}){
    const [data,setData] = useState([]);

    useEffect(() => {
        async function fetch_data(){
                try{ 
                    const data = state ? await fetchData(state) : await fetchData();
                    setData(data);
                }catch(err){
                    console.error(err);
                }
            }

            fetch_data();
        
        
        
        
    },[state,fetchData]);


    return (
        <div>
            <select className={state ? 'cities' : 'state'} onChange={(e) => setFunction(e.target.value)}>
                <option disabled selected value=''> {placeholder}</option>
                {data.map((item) => (
                    <option key={item} value={item } > {item}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown;