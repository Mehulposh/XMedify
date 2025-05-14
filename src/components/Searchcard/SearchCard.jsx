import React ,{useEffect,useState} from 'react';
import Button from '../Button/Button';
import DropDown from '../Dropdown/Dropdown';
import { getStates, getCities , getCenters } from '../../api/api'; 
import Search from '../../assets/Search.svg';
import './SearchCard.css';


function Searchcard({setCenters}){
    const [selectedState , setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState(''); 

    useEffect(() => {
        async function fetchCenters(){
            try {
                const data = await getCenters(selectedCity,selectedState);
                setCenters(data);
                console.log(data);
            }
            catch(err){
                console.error(err);
            }
        }

        fetchCenters();
    } , [selectedCity])
    return(
        <div>
            <div className='seachOptions'>
                <DropDown placeholder='states' fetchData={getStates} setFunction={setSelectedState}/>
                <DropDown placeholder='cities' fetchData={getCities} state={selectedState} setFunction={setSelectedCity}/>
                <Button>
                    <img src={Search}/>
                    Search
                </Button>
            </div>
        </div>
    )
}

export default Searchcard;