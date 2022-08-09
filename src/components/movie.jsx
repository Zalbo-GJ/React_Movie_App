import { useEffect, useState} from 'react';

import { AiFillStar } from 'react-icons/ai';




function Movies() { 
    const img_api = 'https://image.tmdb.org/t/p/original';
    const [movie, set_movie] = useState([]);

    useEffect(() => {

        get_movie();

    }, []);


    const get_movie = async () => {

        const api = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        const data = await api.json();
        set_movie(data.results);
        console.log(data);
    }

    return ( 
             <div>
                
                <div className="series">
       
                    <div className="cards">
                         {movie.map((results, i) => {
                              return(
                             <div className="card" key={i}>
                                <div className="poster">
                                    <img src={img_api+results.poster_path} alt={results.title}
                                    />
                                    </div>
                                    
                                    <h3>{results.title}</h3>
                                    <h4>{results.release_date.slice(0,4)}</h4>
                                    <span><AiFillStar style={{color : "red"}}/>{results.vote_average.toFixed(1)}</span>
                                    {/* <p>{results.overview}</p> */}
                                </div>
                )
            })}
        </div>
        </div>
       </div>

     );
}

export default Movies;