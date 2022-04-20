import React,{useState} from 'react';

import Button from '../Components/UI/Button';

import style from './Home.module.css';

const Home = (props) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchMoviesHandler(){
        setIsLoading(true);
        const response = await fetch('https://swapi.dev/api/films/')
        const data = await response.json();

        const transformedMovies = data.results.map(movieData => {
            return {
                id: movieData.episode_id,
                date: movieData.release_date,
                title: movieData.title,
                directorName : movieData.director,
            };
        });
        setMovies(transformedMovies);
        setIsLoading(false);
    };

    return (
        <section>
            <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            <h2 className={style.heading}>TOUR</h2>
            {!isLoading && <table className={style.table}>
                <tbody>
                {movies.map(data => {
                    return (
                    <tr className={style.tableRow} key={data.id}>
                        <td className={style.tableCol}>{data.date}</td>
                        <td className={style.tableCol}>{data.title}</td>
                        <td className={style.tableCol}>{data.directorName}</td>
                        <td className={style.tableCol}><Button>BUY TICKETS</Button></td>
                    </tr>)
                })}
                </tbody>
            </table>}
            {!isLoading && movies.length === 0 && <p>No movies found</p>}
            {isLoading && <h2>{console.log('Loading')}Loading...</h2>}
        </section>
    );
};

export default Home;