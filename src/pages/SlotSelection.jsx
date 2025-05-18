import React from "react";
import { AppContext } from "../Context/AppContext";
import Navbar from "../components/Navbar/Navbar";
import Vission from "../components/Vission/Vission";
import Searchcard from "../components/Searchcard/SearchCard";

function SlotSelection() {
    const { centers } = React.useContext(AppContext);
    return (
        <div className="slot-selection">
            <Vission />
            <Navbar bottom={true}/>
            <Searchcard />
            
            {centers.length > 0 ? (
                centers.map((center) => (
                    <div>
                        <p>{center['Hospital Name']}</p>
                        <p>{center['Address']}</p>
                        <p>{center['City']}</p>
                        <p>{center['State']}</p>
                        <p>{center['ZIP Code']}</p>
                        <p>{center['Hospital overall rating']}</p>
                    </div>
                ))
            ) : (<h2>No centers available</h2>)}
        </div>
    )

}

export default SlotSelection;