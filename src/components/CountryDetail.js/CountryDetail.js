import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Row, Col, Card, Button} from 'react-bootstrap'

const CountryDetail = () => {
    const {countryName} = useParams()
    const [countryDetails, setCountryDetails] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountryDetails(data[0]))
    }, [countryName])
    const {flag, capital, population, subregion, numericCode, region, timezones, currencies} = countryDetails;
    return (
        <>
            <Button onClick={() => window.history.back()} className="mt-2 ml-2 py-2 px-4">Back</Button>
            <Row>
                <Col md={5} className='my-3 mx-auto' >
                    <Card style={{
                    backgroundImage: ` linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.7)), url(${flag})`,
                    backgroundSize: 'cover',
                    color: '#2c3e50',
                    }} className='detailsCard'>
                        <Card.Body>
                            <h2 className='text-center'> <img src={flag} alt="Country Flag"/> {countryName}</h2>
                            <h4>Capital : {capital}</h4>
                            <p>Population : {population}</p>
                            <p>Region : {region}</p>
                            <p>Subregion : {subregion}</p>
                            <p>Numeric Code : {numericCode}</p>
                            <p>Currency : {currencies && currencies[0].name} ({currencies && currencies[0].code})</p>
                            {/* <p>Currency symbol : {currencies && currencies[0].symbol}</p> */}
                            <p>Currency symbol : {currencies?.[0].symbol}</p>
                            <p>Time zone : {timezones}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default CountryDetail;