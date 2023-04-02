import React from "react";
import { Col } from "reactstrap";

import EventServiceCard from "./EventServiceCard";
import "./event-service-card.css";

import img1 from '../assets/images/restaurants/Jahu_logo.png';
import img2 from '../assets/images/restaurants/Tommi_Grill.jpeg';

const eventServiceData = [
    {
        imgUrl: img1,
        title: "Easter Dining",
        restaurantName: "Jahu Restaurant",
        cuisine: "Estonian",
        description: "Come and look for Easter eggs in delicious burgers",
        date: "April 9, 2023",
        time: "7 pm",
        address: "Parnu Mantee 15",
        websiteMenu: "www.jahugurmee.ee",

    },
    
    {
        imgUrl: img2,
        title: "May Day Grilln @ Tommi",
        restaurantName: "Tommi Grill Restaurant",
        cuisine: "Steak",
        description: "The best grill in town on Celebration Day",
        date: "May 1, 2023",
        time: "7 pm",
        address: "Viru Väljak 2",
        websiteMenu: "www.tommigrill.com/en/menuu",

    },
]

const EventServiceList = () => {

    return (<>
        {eventServiceData.map((item, index) => 
        (<Col lg="3" key={index}>
                <EventServiceCard item={item} />
        </Col>
        ))}
    </>
    );
}

export default EventServiceList;