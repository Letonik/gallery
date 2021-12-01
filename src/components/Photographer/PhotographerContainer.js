import React from 'react';
import {getAll} from "../../selectors/selectors";
import {connect} from "react-redux";
import PhotographerPage from "./PhotographerPage";
import {useParams} from "react-router";

const PhotographerContainer = (props) => {
    let params = useParams();
    let photographer = props.photographers[Number(params.photographer) - 1]
    return (
        <div>
            <PhotographerPage gallery={photographer.gallery} info={photographer.info} id={photographer.id}/>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        photographers: getAll(state),
    }
}

export default connect(mapStateToProps,)(PhotographerContainer);