import React ,{useEffect,useState} from 'react';
import Button from '../Button/Button';
import DropDown from '../Dropdown/Dropdown';
import { getStates, getCities , getCenters } from '../../api/api'; 
import Search from '../../assets/Search.svg';
import ServiceCard from '../ServicesCard/ServicesCard';
import Doctor from '../../assets/Doctor.svg';
import DrugStore from '../../assets/Drugstore.svg';
import Hospital from '../../assets/Hospital.svg';
import Capsule from '../../assets/Capsule.svg';
import Ambulance from '../../assets/Ambulance.svg';
import './SearchCard.css';


const assests = [Doctor,DrugStore,Hospital,Capsule,Ambulance];

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
        <div className='searchCard'>
            <div className='seachOptions'>
                <DropDown placeholder='states' fetchData={getStates} setFunction={setSelectedState} id='state'/>
                <DropDown placeholder='cities' fetchData={getCities} state={selectedState} setFunction={setSelectedCity} id='city'/>
                <Button>
                    <img src={Search}/>
                    Search
                </Button>
            </div>
            <div className='serviceCards'>
                <p className='helptext'>You may be looking for</p>
                <div className='services'>
                    {assests.map( (item) => <ServiceCard image={item}/>)}
                </div>
            </div>
        </div>
    )
}

export default Searchcard;