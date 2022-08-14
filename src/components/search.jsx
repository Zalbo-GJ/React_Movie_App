import { useEffect, useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';


import { Link } from 'react-router-dom';


function Search() {
        const img_api = 'https://image.tmdb.org/t/p/original';
         const [search,setSearch] = useState('');
    const [result, setResult] = useState();
    const [done, setDone] = useState(false);
    const [type, setType] = useState('tv');
     const [movieId, setMovieId] = useState();
    const [show,setShow]= useState(true);
  

    

    useEffect(() => {
       getSearch();
        
       
    },[search])
    useEffect(() => {
        console.log(done)
        getSearch();


    },[done])

       const getSearch = async () => {

        const api = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&page=1`);
        const data = await api.json();
        setResult(data.results);
        console.log(data);
    }
       const showDetail=(pid,med)=>{
        console.log(pid);
        setType(med);
        setMovieId(pid)
        setShow(false);
       
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
        const api = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const similar_api = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const casts_api = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`);
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


    function Srch(){
        return(
            <div>
                
        
                
            <div className="disp">
             
            
                {done &&
                
               
                <div className="srch-cont">
                 
                    
                    <div className="srch-results">
                         {result.map((results, i) => {
                              return(
                             <div className="card" key={i}>
                                <div className="poster" onClick={() =>{ showDetail(results.id,results.media_type) }}>
                                    <img src={img_api+results.poster_path} alt={results.name}
                                    />
                                 </div>
                                    
                                   
                                    
                                    
                           </div>
                            )
                        })}
                </div>
                </div>
}</div>

        
       </div>

            
        );
    }
  
    return ( 


        <div >

            {show &&    <div className="srch-bar">
                
                <input type="search"  onChange={e => setSearch(e.target.value) }  onEmptied={()=> setDone(false)}  />
                <Link to='/srch'>  <button  onClick={()=> search.length >2? setDone(true) : setDone(false)}><FiSearch /></button></Link>
                
</div>}
        
         
         {show && <Srch />}
         {!show && <Detail />}
         
    
</div>
     );
}

export default Search;