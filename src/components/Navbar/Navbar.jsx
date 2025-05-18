import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function Navbar({bottom}){
    const navigate = useNavigate();
    return (
        <div className='navBar' onClick={() => navigate('/')}>
            <div className='nav-top'>
                <div className='logo' >
                    <img src={Logo}/>
                    <p> Medify</p>
                </div>
                <div className='options'>
                
                    
                        <p>Find Doctors</p>.
                    
                    
                        <p>Hospitals</p>
                    
                    
                        <p>Medicines</p>
                    
                    
                        <p>Surguries</p>
                    
                    
                        <p>Software for Provider</p>
                    
                    
                        <p>Facilities</p>
                    
                    
                        <Button>My Bookings</Button>
                    
                
                </div>
            </div>
            {bottom && <div className='lowerbar'></div>}
        </div>
    )
}

export default Navbar;