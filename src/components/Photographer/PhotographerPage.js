import React, {useState} from 'react';
import style from './Photographer.module.scss'
import {NavLink} from "react-router-dom";
import {useParams} from "react-router";
import {FormikComponent, Input, Textarea} from "../Formik/Formik";

const PhotographerPage = ({gallery, info, id}) => {
    let params = useParams();
    let idActive = params.photoId;
    const [isLike, setIsLike] = useState(0);
    const [isComment, setIsComment] = useState(false);
    const [comments, setComments] = useState([]);
    const setLike = () => {
        isLike ? setIsLike(0) : setIsLike(1);
    }
    const val = {name: '', text: ''}
    const sendComment = (val) => {
        setIsComment(false);
        setComments([...comments, {...val, data: new Date().toISOString().substring(0, 10)}]);
        val.text = '';
        val.name = '';
    }
    const showForm = () => {
        setIsComment(true)
        setTimeout(() => {
            window.scrollTo({top: 300, behavior: 'smooth'})
        },10)

    }
    return (
        <div className={style.page}>
            <div className={style.photographer}>
                <div className={style.info}>
                    {info}
                </div>
                {gallery.map(i =>
                    <>
                        {idActive == i.id ?
                            <div className={style.photoActive} key={i.id}>
                                <NavLink to={`/gallery/${id}/${i.id}`}>
                                    <img src={`../../images/${i.photo}.jpg`} alt=""/>
                                </NavLink>
                            </div>
                            :
                            <div className={style.photo} key={i.id}>
                                <NavLink to={`/gallery/${id}/${i.id}`}>
                                    <img src={`../../images/${i.photo}.jpg`} alt=""/>
                                </NavLink>
                            </div>
                        }
                    </>
                )}
            </div>
            <div className={style.largePhoto}>
                <img src={`../../images/${gallery[idActive - 1].photo}.jpg`} alt=""/>
                <div className={style.panel}>
                    <div className={`${style.like} ${isLike && style.likeActive}`}
                    onClick={setLike}>
                        <div className={style.button}>like</div>
                        <div className={style.count}>{isLike}</div>
                    </div>
                    <div className={style.comment} onClick={showForm}>comment</div>
                    <NavLink to={`/`}><div className={style.back}>back</div></NavLink>
                </div>
                <div className={`${style.form} ${!isComment && style.hide}`}>
                    <FormikComponent val={val} funcSubmit={sendComment}>
                        <Input name="name" type="text" placeholder={'Name'}/>
                        <Textarea name="text" type="textarea" placeholder={'Comment'}/>
                        <button type={'submit'}>Send</button>
                    </FormikComponent>
                </div>
                {comments.map(c =>
                    <div className={style.reviews} key={Math.random()}>
                        <div className={style.head}>
                           <div>{c.name}</div>
                            <div>{c.data}</div>
                        </div>
                        <div className={style.review}>
                            {c.text}
                        </div>
                    </div>
                )

                }
            </div>
        </div>
    );
};

export default PhotographerPage;