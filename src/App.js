import React from 'react';
import PhotographerContainer from "./components/Photographer/PhotographerContainer";
import HomeContainer from "./components/Home/HomeContainer";
import {Route, Routes} from "react-router";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/gallery/:photographer/:photoId" element={<PhotographerContainer/>}/>
        </Routes>
    );
};

export default App;