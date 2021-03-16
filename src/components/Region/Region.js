import React from 'react';
import { Link } from 'react-router-dom';

const Region = () => {
    const regions = ['africa', 'americas', 'asia', 'europe', 'oceania']
    return (
        <div className="container allRegion mt-3">
        {
            regions.map((region, indx) => <Link to={`/region/${region}/countries`}><h1 className='text-center' key={indx}>{region}</h1></Link>)
        }
       </div>
    );
};

export default Region;