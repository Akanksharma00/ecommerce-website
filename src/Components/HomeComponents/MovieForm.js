import React,{useState} from 'react';

import style from './MovieForm.module.css';

const MovieForm = (props) => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [relDate, setRelDate] = useState('');
    const [newMovieData, setNewMovieData] = useState({});

    let newMovieObj = {
        title: '',
        director: '',
        rDate: new Date()
    };

    const titleHandler = (event) =>{
        setTitle(event.target.value);
    }

    const directorHandler = (event) =>{
        setDirector(event.target.value);
    }

    const relDateHandler = (event) =>{
        setRelDate(event.target.value);
    }

    const addMovieHandler = (event) => {
        event.preventDefault();
        setNewMovieData(()=>{
            newMovieObj = {
                title: title,
                director: director,
                rDate: relDate
            };

            console.log(newMovieObj);
        });

    }

    return(
        <div className={style.formSection}>
            <form className={style.movieForm}>
                <div className={style.formComponent}>
                    <label htmlFor='title' className={style['formComponent__label']}>Title</label>
                    <input type='text' id='title' onChange={titleHandler} className={style['formComponent__inputField']}/>
                </div>
                <div className={style.formComponent}>
                    <label htmlFor='director' className={style['formComponent__label']}>Director</label>
                    <input type='text' id='director' onChange={directorHandler} className={style['formComponent__inputField']}/>
                </div>
                <div className={style.formComponent}>
                    <label htmlFor='rDate' className={style['formComponent__label']}>Release Date</label>
                    <input type='date' id='rDate' onChange={relDateHandler} className={style['formComponent__inputField']}/>
                </div>
                <button onClick={addMovieHandler}>Add Movie</button>
            </form>
        </div>
    );
};

export default MovieForm;