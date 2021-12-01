import React from 'react';
import {getAll} from "../../selectors/selectors";
import {connect} from "react-redux";
import Home from "./Home";


const HomeContainer = ({photographers}) => {
    return (
        <>
            <Home photographers={photographers}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        photographers: getAll(state),
    }
}

export default connect(mapStateToProps)(HomeContainer);