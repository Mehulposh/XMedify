import { AppContext } from "../../Context/AppContext";
import './Bookings.css';
import Button from "../../components/Button/Button";
import CenterCard from "../../components/CenterCard/CenterCard";
import React,{useEffect} from 'react';
import promo from '../../assets/addvertise.svg';


function MyBookings() {
  const [bookingData, setBookingData] = React.useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings')) || [];
    console.log(data);
    setBookingData(data);
    console.log('Booking data:', data);
  }, []);

  return (
    <div className="my-bookings">

    <div className="headerDiv">
      <div className="my-bookings-header">
         <h1>My Bookings</h1>
      </div>
      <div className="hospitalSearch">
        <input type="text" placeholder="Search for hospitals..." className="hospitalSearchInput" />
        <Button>Search</Button>
      </div>
    </div>
    <div className="bookings-container">
      <div className="bookingsColumn1">
        {bookingData.length > 0 ? (
          bookingData.map((item) => {
           return <CenterCard data={item} key={item.id}/>
          })
        ) : (
          <h1>No bookings available</h1>
        )}
      </div> 
      <div className="bookingsColimn2">
        <img src={promo} alt="advertisement" className="advertisement" />
      </div>
      
    </div>
    </div>
  );
}   

export default MyBookings;