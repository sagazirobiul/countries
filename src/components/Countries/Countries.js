import React, { useEffect, useState } from 'react';
import Country from '../Country/Country'
import {Row} from 'react-bootstrap'
import Spinner from '../Spinner';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className='container my-4'>
            {
                Countries === false ? 'ok' : <Spinner></Spinner>
            }
            <h2 className='text-center'>All Countries: {countries.length}</h2>
            <Row>
                {
                    countries.map(country => <Country name={country.name} flag={country.flag}/>)    
                }
            </Row>
        </div>
    );
};

export default Countries;