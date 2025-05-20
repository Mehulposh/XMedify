import React from "react";
import './Bookings.css';
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

function MyBookings() {
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
      
      <p>This is the My Bookings page.</p>
      <Footer />
    </div>
  );
}   

export default MyBookings;