import { useEffect, useState } from "react";

function Movies() {
    const img_api = 'https://image.tmdb.org/t/p/w500';

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies();
    }, []);
   
    const getMovies = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        setMovies(data.results)
        console.log(data);
    };
    
    return ( 
        <div className="cards">
            {movies.map((results) => {
                return(
                    <div className="card">
                       <div className="poster">
                        <img src={img_api+results.poster_path} alt={results.title}
                        />
                        </div>
                        
                        <h3>{results.title}</h3>
                        <span>{results.vote_average}</span>
                        <p>{results.overview}</p>
                    </div>
                )
            })}
        </div>
     );
}

export default Movies;