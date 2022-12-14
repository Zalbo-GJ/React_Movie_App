import { useEffect, useState} from 'react';

import { AiFillStar } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { FcNext, FcPrevious } from 'react-icons/fc';
import Nav from './nav';

const img_api = 'https://image.tmdb.org/t/p/original';
function Movies() { 
    
    
    const [movie, setMovies] = useState([]);
    const [page, set_page] = useState(1);
    const [movieId, setMovieId] = useState();
    const [show,setShow]= useState(true);

    useEffect(() => {

        getMovie();
        // setShow(true)

    }, []);
    useEffect(() => {

        getMovie();

    }, [page]);
    
   

    const getMovie = async () => {

        const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`);
        const data = await api.json();
        setMovies(data.results);
        console.log(data);
    }

    const showDetail=(pid)=>{
        console.log(pid);
        setMovieId(pid)
        setShow(false);
       
    }

    function Mov() {
        return ( <div>
                <h2 className='h2'>Movies</h2>
                <div className="page-changer">
                  <button onClick={() => page > 1? set_page(page-1) : false }><FcPrevious style={{color: 'red', fontSize: '2rem'}} /> </button>                    
                  <button onClick={() => set_page(page+1)}><FcNext style={{color: '#fe4c40', fontSize: '2rem'}} /> </button>                    
                   
                    </div>
                <div className="series">
                 
                    
                    <div className="cards" >
                         {movie.map((results, i) => {
                              return(
                             <div className="card"  key={i}>
                            <div className="poster"  onClick={() => showDetail(results.id)}>

                                    <img src={img_api+results.poster_path} alt={results.title}
                                    />
                                    </div>
                                    
                                    <h3 >{results.title}</h3>
                                    <h4>{results.release_date.slice(0,4)}</h4>
                                    <span><AiFillStar style={{color : "red"}}/>{results.vote_average.toFixed(1)}</span>
                                    {/* <p>{results.overview}</p> */}
                                </div>
                )
            })}
        </div>
        </div>
       </div> );
    }

    
    function Detail() {

    const [detail, setDetail] = useState([])
    const [similar, setSimilar] = useState([])
    const [casts, setCasts] = useState([])
    useEffect(() => {
        console.log('hellMovo')
        getDetail()
    },[])

   const  getDetail = async ()=> {
        const api = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const similar_api = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const casts_api = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        const sim = await similar_api.json();
        const cat = await casts_api.json();
        setDetail(data);
        setSimilar(sim.results);
        setCasts(cat.cast);
        console.log(cat.cast);

    }
 
    const backimg = img_api+detail.backdrop_path;
    
    return (

 <div>
<div className="detail"
        style={{backgroundImage: `url( ${backimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"}}>
                    <button className='back_btn' onClick={() => setShow(true)}><BiArrowBack /></button>
                    <div className="det-cont">
                        <h2>{detail.title}</h2>
                        <span>
                            
                            {detail.genres && detail.genres.slice(0,5).map((genre,i)=>(<li key={i}>{genre.name}</li>))}
                            
                            
                            
                        </span>
                        <p>{detail.overview}</p>
                        <div className="casts">
                                                        {casts && casts.slice(0,10).map((cast,i)=>((cast.popularity > 16 )&& <div  key={i} ><img src={img_api+cast.profile_path} alt="" /><span>{cast.name} As {cast.character} </span></div>))}

                        </div>
                        
                    </div>
                    <div className="slide_poster">
                        <img src={img_api+detail.poster_path} alt={detail.title} />
                    </div>
                     </div>



       

           
                
             
                    

               
                <div className="similar">
                    <h2 className="h2">Similar Movies</h2>
                    <div className="simcards" >
                         {similar.map((same, i) => {
                              return(
                             <div className="simcard"  key={i}>
                            <div className="simposter"  >

                                    <img src={img_api+same.poster_path} alt={same.title} />
                                    </div>
                                    
                                    <h3 >{same.title}</h3>
                                    {/* <h4>{same.release_date.slice(0,4)}</h4> */}
                                    <span><AiFillStar style={{color : "red"}}/>{same.vote_average.toFixed(1)}</span>
                                   
                                 </div>
                )
            })}
        </div>

                </div>
            </div>
            



             


       
      );
}
   

 
    return ( 
        
        <div>
           
           { show && <Mov />}

           { !show && <Detail />}
            
       
             
 </div>
     );
}







export default Movies;