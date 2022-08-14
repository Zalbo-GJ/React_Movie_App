import { Link, BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { useEffect, useState } from "react";
import { MdOutlineSlowMotionVideo} from 'react-icons/md'
import Search from './search';
import Movies from './movie';
import { FiSearch } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';

function Nav() {
       const [clicked, setClicked] = useState(false);
   const handleClick=()=>{
        setClicked(!clicked);
    }
    
    return ( 
        
        <div className="nav">
            <div className="logo" >
                <h2>M<span style={{paddingLeft:'3px', position: 'Relative', top:'4px'}}><MdOutlineSlowMotionVideo style={{color: '#fe4c40'}} /></span>VIE</h2>
            </div>
            <div className={clicked? 'lists-active': 'lists'}>
               <Link style={{textDecoration: 'none',margin: "1rem"}} to="/"><li onClick={()=> setClicked(false)}>Home</li></Link>
                <Link style={{textDecoration: 'none',margin: "1rem"}} to="/movie"><li onClick={()=> setClicked(false)}>Movies</li></Link>
                <Link style={{textDecoration: 'none',margin: "1rem"}} to="/tv"><li onClick={()=> setClicked(false)}>Tv Series</li></Link>
                <Link to='/srch'>  <div className='srch-btn' onClick={()=> setClicked(false)}><FiSearch /></div></Link>
                 
            </div>
           
            <div className="menu-icon" onClick={handleClick}><FaBars /></div>
           
        
         
            
        </div>
        
     );
}

export default Nav;