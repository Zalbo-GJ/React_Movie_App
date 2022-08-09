import { useEffect, useState} from 'react';

import { AiFillStar } from 'react-icons/ai';


function TvSeries() { 
    const img_api = 'https://image.tmdb.org/t/p/original';
    
    const [tv, set_tv] = useState([]);
    const [page, set_page] = useState(1);

    useEffect(() => {

        get_tv();

    }, []);
    useEffect(() => {

        console.log(9);

    }, [page]);
    


    const get_tv = async () => {

        const api = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`);
        const data = await api.json();
        set_tv(data.results);
        console.log(data);
    }

 
    return ( 
             <div>
                  <button
                        onClick={() => { console.log("button clicked");}}>
                        button  

                    </button>                    
                    <p style={{fontSize: '4rem', color: 'white'}}>{page}</p>
                <div className="series">
                 
       
                    <div className="cards">
                         {tv.map((results, i) => {
                              return(
                             <div className="card" key={i}>
                                <div className="poster">
                                    <img src={img_api+results.poster_path} alt={results.name}
                                    />
                                    </div>
                                    
                                    <h3>{results.name}</h3>
                                    <h4>{results.first_air_date.slice(0,4)}</h4>
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

export default TvSeries;