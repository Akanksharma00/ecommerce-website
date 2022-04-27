import React,{useState, useEffect, useCallback} from 'react';

import Button from '../Components/UI/Button';
import MovieForm from '../Components/HomeComponents/MovieForm';

import style from './Home.module.css';

const Home = (props) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);  
    const [cancel, setCancel] = useState(false);

    const cancelBtnHandler = () => {
        setCancel(true);
    }

    const fetchMoviesHandler = useCallback(async () =>{
        setIsLoading(true);
        setError(null);
        try{
            const response = await fetch('https://ecommerce-website-3d5e2-default-rtdb.firebaseio.com/movies.json');

            if(!response.ok){
                throw new Error('Something went wrong...Retrying');
            }

            const data = await response.json();

            const loadedMovies = [];

            for(const key in data){
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    directorName: data[key].director,
                    date: data[key].relDate
                });
            }
            setMovies(loadedMovies);
        }catch(error){
            setError(error.message);
            setTimeout(()=>{
                fetch('https://swapi.dev/api/films/');
            },5000); 
        }
        setIsLoading(false);
    });

    const deleteMovie = (event) => {
        console.log(event.target.key);
    }

    useEffect(() => {fetchMoviesHandler();},[]);

    return (
        <section>
            <MovieForm />
            <div className={style.btnDiv}>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </div>
            
            <div>
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
                            <td className={style.tableCol}><button onClick={deleteMovie}>Delete</button></td>
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
            </div>
        </section>
    );
};

export default Home;