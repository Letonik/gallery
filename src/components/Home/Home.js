import React from 'react';
import Photographer from "./Photographer";

const Home = ({photographers}) => {
    return (
        <>
            {
                photographers.map(p => <Photographer key={p.id} props={p}/>)
            }
        </>
    );
};

export default Home;