import React from "react";
import { Container, Row, Col, } from 'reactstrap';

import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import EventServiceList from "../services/EventServiceList";

import '../styles/home.css';


import burgerBacon from '../assets/images/food/Burger_Bacon.jpeg'
import grillPruulBanner from '../assets/images/food/Grill_Pruul_Banner.jpeg'
import lamb from '../assets/images/food/lamb.png'

const Home = () => {
    return (    
    <> 
    {/* === HERO.section.start === */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <div className="hero_subtitle d-flex align-items-center ">
                            <Subtitle subtitle={'Explore cuisines'}/>
                            <i class="ri-global-line"></i>                            {/* <img src={burgerBacon} alt="Banner" height="50" /> */}
                        </div>
                        <h5>Explore Tallinn restaurants for great <span className="highlight">memories</span></h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore odio neque mollitia in ut qui quo nostrum accusamus enim ipsa! Consequuntur nisi asperiores suscipit ipsa modi. Nobis nulla eum corrupti?</p>
                    </div>
                </Col>

                <Col lg='2'> 
                    <div className="hero__img-box">
                        <img src={burgerBacon} alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box"> 
                        <img src={lamb} alt="" />
                    </div>
                </Col>

    {/* ## SEARCHBAR */}

                <SearchBar/>

            </Row>
        </Container>
    </section>
    {/* === HERO.section.END === */}

    {/* === EVENTS.Card.section.START === */}
    <section>
        <Row>
            <Col lg='3'>
                <h5 className="services__subtitle">Networking Events</h5>
                <h5 className="services__title">We offer great experiences</h5>
            </Col>

    {/* EVENT LIST */}
            <EventServiceList />
        </Row>

    </section>
    {/* === EVENTS.Card.section.END === */}

    {/* === FEATURED.section.START  45.3 === */}

    {/* === FEATURED.Card.section.END === */}
    </>
    
    )
};

export default Home;

/* 
<div>Home</div>
*/