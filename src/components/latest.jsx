import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay ,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { AiFillStar } from 'react-icons/ai';



 const img_api = 'https://image.tmdb.org/t/p/original'


function Pop() {

    SwiperCore.use([Autoplay]);
    
   

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies();
    }, []);
   
    const getMovies = async () => {
        // const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        const api = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
       
        const data = await api.json();
        setMovies(data.results)
        console.log(data);
    };
    
    return ( 
        <div className="popSlide">
           <Swiper
            modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
            grabCursor={true}
            autoplay={{ delay: 40000}}
            spaceBetween={0}
            slidesPerView={1}
            // navigation={true}
            pagination={{ clickable: true , type: "bullets"}}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

      
      
     >
                { movies.map((results,i) => (
              
                    <SwiperSlide  key={i}>

                        <Backd results={results} />

                    </SwiperSlide>
                )
                )}
            </Swiper>
        </div>
     );
                       
                       
}

const  Backd = props => {
    // let history = useHistory();
    const results = props.results;
    const backimg = img_api+results.backdrop_path;
    
    return ( 
                                
        <div className="slide_item"
        style={{backgroundImage: `url( ${backimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"}}>
                    <div className="slide_cont">
                        <h2>{results.title}</h2>
                        <span>
                            <li>{results.release_date.slice(0,4)}</li>
                            <li><AiFillStar style={{color : "red"}}/>{results.vote_average.toFixed(1)}</li>
                            
                            <li style={{color : "red"}}>{results.original_language.toUpperCase()}</li>
                            
                        </span>
                        <p>{results.overview}</p>
                    </div>
                    <div className="slide_poster">
                        <img src={img_api+results.poster_path} alt={results.title} />
                    </div>
                     </div>

                         );
}
export default Pop;