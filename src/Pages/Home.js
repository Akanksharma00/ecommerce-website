import React,{useState} from 'react';

import Button from '../Components/UI/Button';

import style from './Home.module.css';

const Home = (props) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);  
    const [cancel, setCancel] = useState(false);

    const cancelBtnHandler = () => {
        setCancel(true);
    }

    async function fetchMoviesHandler(){
        setIsLoading(true);
        setError(null);
        try{
            const response = await fetch('https://swapi.dev/api/films/')

            if(!response.ok){
                throw new Error('Something went wrong...Retrying');
            }

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
        }catch(error){
            setError(error.message);
            setTimeout(()=>{
                {!cancel && fetch('https://swapi.dev/api/film/');}
            },5000); 
        }
        setIsLoading(false);
    };

    return (
        <section>
            <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            <h2 className={style.heading}>TOUR</h2>
            {!isLoading && movies.length>0 && <table className={style.table}>
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
            {!isLoading && movies.length === 0 && !error && <p>No movies found</p>}
            {!isLoading && error && <div>
                <p>{error}</p>
                <button  onClick={cancelBtnHandler}>Cancel</button>
            </div>}
            {isLoading && <h2>{console.log('Loading')}Loading...</h2>}
            
        </section>
    );
};

export default Home;