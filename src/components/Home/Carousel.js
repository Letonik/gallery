import React, {useEffect, useState} from 'react';
import style from './Home.module.scss';

const Carousel = ({gallery}) => {
    const [image, setImage] = useState(0);
    const setNumberImage = () => {
        if (image === gallery.length - 1) {
            setImage(0)
        } else {
            setImage(image + 1)
        }
    }
    useEffect(() => {
        setTimeout(() => {setNumberImage()}, 6000);
    }, [image])
    return (
        <div className={style.carousel}>
            <img src={`images/${gallery[image].photo}.jpg`} alt=""/>
        </div>
    );
};

export default Carousel;