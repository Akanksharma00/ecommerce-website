import React,{useState} from 'react';

import style from './MovieForm.module.css';

const MovieForm = (props) => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [relDate, setRelDate] = useState('');

    const titleHandler = (event) =>{
        setTitle(event.target.value);
    }

    const directorHandler = (event) =>{
        setDirector(event.target.value);
    }

    const relDateHandler = (event) =>{
        setRelDate(event.target.value);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const newMovieObj = {
            title: title,
            director: director,
            relDate: new Date(relDate).toLocaleDateString()
        };

        console.log(newMovieObj);

        setTitle('');
        setDirector('');
        setRelDate('');

        const response = await fetch('https://ecommerce-website-3d5e2-default-rtdb.firebaseio.com/movies.json',{
            method: 'POST',
            body: JSON.stringify(newMovieObj),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

    return(
        <div className={style.formSection}>
            <form className={style.movieForm} onSubmit={submitHandler}>
                <div className={style.formComponent}>
                    <label htmlFor='title' className={style['formComponent__label']}>Title</label>
                    <input type='text' id='title' value={title} onChange={titleHandler} className={style['formComponent__inputField']}/>
                </div>
                <div className={style.formComponent}>
                    <label htmlFor='director' className={style['formComponent__label']}>Director</label>
                    <input type='text' id='director' value={director} onChange={directorHandler} className={style['formComponent__inputField']}/>
                </div>
                <div className={style.formComponent}>
                    <label htmlFor='rDate' className={style['formComponent__label']}>Release Date</label>
                    <input type='date' id='rDate' value={relDate} onChange={relDateHandler} className={style['formComponent__inputField']}/>
                </div>
                <button className={style.btn}>Add Movie</button>
            </form>
        </div>
    );
};

export default MovieForm;