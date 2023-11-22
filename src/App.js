import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./components/movie";
import Nav from "./components/nav";
import TvSeries from "./components/tv";
import Home from "./components/home";
import Footer from "./components/footer";
import Search from "./components/search";

function App() {
  return (
    <Router basename="/React_Movie_App">
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tv" element={<TvSeries />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/srch" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
