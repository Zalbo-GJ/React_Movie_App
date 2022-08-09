import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './components/movie';
import Nav from './components/nav';
import TvSeries from './components/tv';
import Home from './components/home';

function App() {
  return (
    <Router>

      <div className="App">
      
        <Nav />

        <Routes>

          <Route exact path='/' element={<Home />}/>
          <Route exact path='/movie' element={<Movies />}/>
          <Route  path='/tv' element={<TvSeries />}/>
            
        </Routes>
        
      </div>
    
     </Router>
  );
}

export default App;
