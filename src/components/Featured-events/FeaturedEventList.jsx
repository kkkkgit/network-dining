import React from "react";
import { Col } from "reactstrap";

import EventCard from "../../shared/EventCard";
import eventData from "../../assets/data/events";

const FeaturedEventList = () => {
    return (
    <>
        {eventData?.map(event=>(
        <Col lg="3" className="mb-4" key={event.id}>
            <EventCard event={event} />
        </Col>
        ))
    }
    </>
    );
};
 
export default FeaturedEventList

/*
<>

    {eventData?.map(event =>(
        <Col lg="3" className="mb-4" key={event.id}>
            <EventCard event={event} />
        </Col>
        ))
    }

    
    </>
*/