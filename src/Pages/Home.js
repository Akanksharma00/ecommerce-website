import React,{useState} from 'react';

import Button from '../Components/UI/Button';

import style from './Home.module.css';

const Home = (props) => {
    const [movies, setMovies] = useState([]);

    async function fetchMoviesHandler(){
        const respose = await fetch('https://swapi.dev/api/films/')
        const data = await response.json();

        const transformedMovies = data.results.map(movieData => {
            return {
                id: movieData.episode_id,
                date: movieData.release_date,
                title: movieData.title,
                directorName : movieData.director,
        };
                
                setMovies(transformedMovies);
            });
    };

    return (
        <section>
            <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            <h2 className={style.heading}>TOUR</h2>
            <table className={style.table}>
                {movies.map(data => {
                    return (
                    <tr className={style.tableRow}>
                        <td className={style.tableCol}>{data.date}</td>
                        <td className={style.tableCol}>{data.title}</td>
                        <td className={style.tableCol}>{data.directorName}</td>
                        <td className={style.tableCol}><Button>BUY TICKETS</Button></td>
                    </tr>)
                })}
            </table>
        </section>
    );
};

export default Home;