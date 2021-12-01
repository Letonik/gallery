import React from 'react';
import style from './Home.module.scss';
import {NavLink} from "react-router-dom";

const Ava = ({id, ava, name, profession}) => {
    return (
        <div className={style.ava}>
            <NavLink to={`/gallery/${id}/1`}>
                <img src={`images/${ava}.jpg`} alt=""/>
                <h1>{name.toUpperCase()}</h1>
                <h2>{profession}</h2>
            </NavLink>
        </div>
    );
};

export default Ava;