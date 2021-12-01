import React from 'react';
import Ava from "./Ava";
import Carousel from "./Carousel";
import style from './Home.module.scss';

const Photographer = ({props}) => {
    console.log(props.ava)
    const isLeft = props.id % 2
    return (
        <>
            {/*<AnimationOnScroll animateIn="animate__fadeIn" duration={1}>*/}
                {isLeft ?
                    <div className={style.photographer}>
                        <Ava name={props.name} id={props.id} ava={props.ava} profession={props.profession}/>
                        <Carousel gallery={props.gallery}/>
                    </div>
                    :
                    <div className={style.photographer}>
                        <Carousel gallery={props.gallery}/>
                        <Ava name={props.name} id={props.id} ava={props.ava} profession={props.profession}/>
                    </div>
                }
            {/*</AnimationOnScroll>*/}
        </>
    );
};

export default Photographer;