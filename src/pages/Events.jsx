import React from "react";
import { Container, Row, Col, } from 'reactstrap';

import EventServiceList from "../services/EventServiceList";


const Events = () => {
    return ( <> 
    <div>Events</div>
{/* === Event.Card.section.START === */}
<section>
<Row>
    <Col lg='3'>
        <h5 className="services__subtitle">Upcoming Events</h5>
        <h5 className="services__title">Title: We offer great experiences</h5>
    </Col>
    <EventServiceList />
</Row>

</section>
{/* === Event.Card.section.END === */}

</>
    )
};

export default Events