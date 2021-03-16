import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Country from '../Country/Country';
import { Row , Button} from 'react-bootstrap'

const RegionCountries = () => {
    const regions = useParams();
    const region = regions.regions
    const [regionCountries, setRegionCountries] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => res.json())
        .then(data => setRegionCountries(data))
    }, [region])
    return (
        <>
        <Button onClick={() => window.history.back()} className="mt-2 ml-2 py-2 px-4">Back</Button>
            <div className='container my-4'>
                <Row>
                    {
                        regionCountries.map(country => <Country name={country.name} flag={country.flag}/>)    
                    }
                </Row>
            </div>
        </>
    );
};

export default RegionCountries;