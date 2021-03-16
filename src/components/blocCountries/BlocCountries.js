import React, { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Country from '../Country/Country';

const BlocCountries = () => {
    const {blocName} = useParams();
    const [regionalBlocs, setRegionalBlocs] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/regionalbloc/${blocName}`)
        .then(res => res.json())
        .then(data => setRegionalBlocs(data))
    }, [blocName])
    console.log(regionalBlocs);
    return (
        <>
            <Button onClick={() => window.history.back()} className="mt-2 ml-2 py-2 px-4">Back</Button>
            <div className='container my-4'>
                <Row>
                    {
                        regionalBlocs.map(country => <Country name={country.name} flag={country.flag}/>)    
                    }
                </Row>
            </div>
        </>
    );
};

export default BlocCountries;