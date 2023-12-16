import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/movie";
import Nav from "./components/nav";
import TvSeries from "./components/tv";
import Home from "./components/home";
import Footer from "./components/footer";
import Search from "./components/search";
import { SearchContext, SearchProvider } from "./searchContext";

function App() {
  // const { search, setSearch } = useContext(SearchContext);

  return (
    <Router basename="/React_Movie_App">
      <div className="App">
        <SearchProvider>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/tv" element={<TvSeries />} />
            <Route path="/movie" element={<Movies />} />

            <Route path="/srch" element={<Search done={false} />} />
          </Routes>
          <Footer />
        </SearchProvider>
      </div>
    </Router>
  );
}

export default App;
