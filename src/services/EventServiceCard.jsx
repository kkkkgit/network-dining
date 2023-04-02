import React from "react";

import './event-service-card.css';

const EventServiceCard = ({item}) => {

    const { imgUrl, title, restaurantName, cuisine, date, time, address, description, websiteMenu } = item

    return (<div className="event__item">
            <div className="event__img">
                <img src={imgUrl} alt="" />
            </div>
            <h3>{title}</h3>
            <h4>Venue: {restaurantName}</h4>
            <h4>Cuisine: {cuisine}</h4>
            <h5>{date}</h5>
            <h5>{time}</h5>
            <h5>Address: {address}</h5>
            <h6>{websiteMenu}</h6>
            <p>{description}</p>
        </div>
    );
}

export default EventServiceCard;