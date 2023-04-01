import React from "react";
import { Container, Row, Col, } from 'reactstrap';

import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';

import '../styles/home.css';


import burgerBacon from '../assets/images/food/Burger_Bacon.jpeg'
import grillPruulBanner from '../assets/images/food/Grill_Pruul_Banner.jpeg'

const Home = () => {
    return (    
    <> 
    {/* === hero.section.start === */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <div className="hero_subtitle d-flex align-items-center ">
                            <Subtitle subtitle={'Explore cuisines'}/>
                            <img src={burgerBacon} alt="Banner" height="50" />
                        </div>
                        <h5>Explore Tallinn restaurants for great <span className="highlight">memories</span></h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore odio neque mollitia in ut qui quo nostrum accusamus enim ipsa! Consequuntur nisi asperiores suscipit ipsa modi. Nobis nulla eum corrupti?</p>
                    </div>
                </Col>

                <Col lg='2'> 
                    <div className="hero__img-box">
                        <img src="" alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box"> 
                        <img src="" alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box">
                        <img src="" alt="" />
                    </div>
                </Col>
                <SearchBar/>
            </Row>
        </Container>
    </section>
    {/* === hero.section.end === */}

    <section>
        <Row>
            <Col lg='3'>
                <h5 className="services__subtitle">Subtitle: Our service</h5>
                <h5 className="services__title">Title: We offer great experiences</h5>
            </Col>
        </Row>

    </section>

    </>
    
    )
};

export default Home;

/* 
<div>Home</div>
*/