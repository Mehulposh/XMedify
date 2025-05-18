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
                </div>
                <div className='options'>
                <ul>
                    <li>
                        <p>Find Doctors</p>.
                    </li>
                    <li>
                        <p>Hospitals</p>
                    </li>
                    <li>
                        <p>Medicines</p>
                    </li>
                    <li>
                        <p>Surguries</p>
                    </li>
                    <li>
                        <p>Software for Provider</p>
                    </li>
                    <li>
                        <p>Facilities</p>
                    </li>
                    <li>
                        <Button>My Bookings</Button>
                    </li>
                </ul>
                </div>
            </div>
            {bottom && <div className='lowerbar'></div>}
        </div>
    )
}

export default Navbar;