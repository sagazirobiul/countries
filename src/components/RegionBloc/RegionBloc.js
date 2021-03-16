import React, { useEffect, useState } from 'react';
import ReginalBlocData from '../../fakeData/reginal_bloc_data';
import { Link } from 'react-router-dom';

const RegionBloc = () => {
    const [regionalBlocs, setRegionalBlocs] = useState([])
    useEffect(() => setRegionalBlocs(ReginalBlocData), [])
    console.log(regionalBlocs)
    return (
        <div className="container blocArea">
            {
            regionalBlocs.map(({name, img, short_name})=>{
                return(
                    <Link to={`/regionalbloc/${short_name}/countries`}>
                        <div className="regionalBloc d-flex align-items-center">
                                <img src={img} alt='Regional logo'/>
                                <h2>{short_name} ({name})</h2>
                        </div>
                    </Link>
                )
            })
            }
        </div>
    );
};

export default RegionBloc;