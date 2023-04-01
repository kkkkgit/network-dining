import React from "react";

import './event-service-card.css';

const EventServiceCard = ({item}) => {

    const {imgUrl, title, desc} = item

return <div className="event_service_item">
    <div className="service__img">
        <img src={imgUrl} alt="" />
    </div>
    <h5>{title}</h5>
    <p>{desc}</p>
</div>


};

export default EventServiceCard;