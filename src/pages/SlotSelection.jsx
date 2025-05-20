import React from "react";
import { AppContext } from "../Context/AppContext";
import promo from '../../src/assets/addvertise.svg';2
import Searchcard from "../components/Searchcard/SearchCard";
import CenterCard from "../components/CenterCard/CenterCard";
import Faq from "../components/FAQ/Faq";
import Footer from "../components/Footer/Footer";
import Access from "../components/Accessibility/Access";
import './Slot.css'

function SlotSelection() {
    const { centers , selectedCity} = React.useContext(AppContext);
    return (
        <div className="slot-selection">
            <div className="navbarbottom"></div>
            <Searchcard/>
           <div className="card-container">
            
                 <div className="slot-column1">
                    <h1>{centers.length} medical centers available in {selectedCity}</h1>
                    <p className="subheading">Book appointments with minimum wait-time & verified doctor details</p>
                    {centers.length>0 ? (
                        centers.map((center) => {
                            const data= {
                                'name': center['Hospital Name'],
                                'city': center['City'],
                                'state': center['State'],
                                'code': center['ZIP Code'],
                                'rating': center['Hospital overall rating'],
                                'id': center['Provider ID'],
                            };
                           return <CenterCard key={center['Provider ID']} data={data}/>
                        })
                    ) : (
                        <h2>No centers available</h2>
                    )}
                 </div>
                 <div className="slot-column2">
                    <img src={promo} alt="advertisement" />
                 </div>
            </div>

            <Faq/>
            {/* <Access/>
            <Footer/> */}
          
        </div>
    )

}

export default SlotSelection;