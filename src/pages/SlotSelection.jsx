import React from "react";
import { AppContext } from "../Context/AppContext";
import Navbar from "../components/Navbar/Navbar";
import Vission from "../components/Vission/Vission";
import Searchcard from "../components/Searchcard/SearchCard";
import CenterCard from "../components/CenterCard/CenterCard";

function SlotSelection() {
    const { centers , selectedCity} = React.useContext(AppContext);
    return (
        <div className="slot-selection">
            <Vission />
            <Navbar bottom={true}/>
            {/* <Searchcard /> */}
            <CenterCard/>
            <div className="center-card-container">
                 <div className="column1">
                    <h1>{centers.length} medical centers available in {selectedCity}</h1>
                    {centers.length>0 ? (
                        centers.map((center) => {
                            const data= {
                                'name': center['Hospital Name'],
                                'city': center['City'],
                                'state': center['State'],
                                'code': center['ZIP Code'],
                                'rating': center['Hospital overall rating'],
                            };
                           return <CenterCard key={center['Provider ID']} data={data}/>
                        })
                    ) : (
                        <h2>No centers available</h2>
                    )}
                 </div>
                 <div className="column2"></div>

            </div>
        </div>
    )

}

export default SlotSelection;