import { Link } from 'react-router-dom';
import { MdOutlineSlowMotionVideo} from 'react-icons/md'
function Nav() {
    return ( 
        <div className="nav">
            <div className="logo">
                <h2>M<span style={{paddingLeft:'3px', position: 'Relative', top:'4px'}}><MdOutlineSlowMotionVideo style={{color: '#fe4c40'}} /></span>VIE</h2>
            </div>
            <div className="lists">
               <Link style={{textDecoration: 'none'}} to="/"><li>Home</li></Link>
                <Link style={{textDecoration: 'none'}} to="/movie"><li>Movies</li></Link>
                <Link style={{textDecoration: 'none'}} to="/tv"><li>Tv Series</li></Link>
            </div>
        
        </div>
     );
}

export default Nav;