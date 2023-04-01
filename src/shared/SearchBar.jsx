import React, {useRef} from 'react';
import { Col, Form, FormGroup } from "reactstrap";

import './search-bar.css'

const SearchBar = () => {

const locationRef = useRef('')
const distanceRef = useRef(0)
const maxAttendenceRef = useRef(0)

const searchHandler = ()=>{
    const location = locationRef.current
    const distance = distanceRef.current
    const maxAttendence = maxAttendenceRef.current

     if(location==='' || distance ==='' || maxAttendence==='')
     {return alert('All fields are required.')}
}

    return <Col lg='12'>
        <div className='search__bar'>
        <Form className='d-flex align-items-center gap-4' >
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                    <h6>Location/Preference</h6>
                    <input type="text" placeholder="Where, Which cuisine?" ref={locationRef}  />
                </div>
            </FormGroup>
            
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-time-line"></i></span>
                <div>
                    <h6>Distance</h6>
                    <input type="number" placeholder="Distance km" ref={distanceRef}/>
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span><i class="ri-group-line"></i></span>
                <div>
                    <h6>Maximum People</h6>
                    <input number="text" placeholder="0" ref={maxAttendenceRef} />
                </div>
            </FormGroup>

            <span className='search__icon' type='submit' onClick={searchHandler}>
            <i class="ri-search-line"></i>
            </span>
        </Form> 
        </div>
    </Col>;
}

export default SearchBar;

/* 
31.
*/