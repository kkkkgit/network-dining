import React from "react";
import { Container, Row } from 'reactstrap'
import { NavLink, Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';

const nav__links=[
    { path:'/home', display:'Home' },
    { path:'/#', display:'About' },
    { path:'/events', display:'Events' },
    { path:'/users', display:'Users' },
]

const Header = () => {
    return (<>

    <header className="header">
        <Container>
            <Row>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                {/* logo*/    }
                <div className="logo">logo goes here<img src="" alt=""/></div>
                {/* logo*/}
                <Button variant="info">Contacts</Button>
                </div>
            </Row>
        </Container>
    </header> 

    </>)
};

export default Header;