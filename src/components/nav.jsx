import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Search from "./search";
import Movies from "./movie";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { SearchContext } from "../searchContext";

function Nav() {
  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(false);
  const { search, setSearch } = useContext(SearchContext);
  const [done, setDone] = useState(false);

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleClick = () => {
    setClicked(!clicked);
  };
  // useEffect(() => {}, [show]);

  const navigate = useNavigate();

  const handleSearchClick = () => {
    console.log("Clicked");
    if (!show) {
      console.log("show");
      setShow(true);
    } else if (show && search.length > 2) {
      setClicked(false);
      console.log(`now ${search}`);
      navigate("/srch");
    } else {
      console.log("see", show);
      console.log(search);
      console.log("here");
    }
  };

  return (
    <div className="nav">
      <div className="logo">
        <Link
          style={{ textDecoration: "none", color: "rgba(255, 0, 0, 0.487)" }}
          to="/"
        >
          {" "}
          <h2>
            M
            <span
              style={{ paddingLeft: "3px", position: "Relative", top: "4px" }}
            >
              <MdOutlineSlowMotionVideo style={{ color: "#fe4c40" }} />
            </span>
            VIE
          </h2>
        </Link>
      </div>
      <div className={clicked ? "lists-active" : "lists"}>
        <Link style={{ textDecoration: "none", margin: "1rem" }} to="/">
          <li onClick={() => setClicked(false)}>Home</li>
        </Link>

        <Link style={{ textDecoration: "none", margin: "1rem" }} to="/movie">
          <li onClick={() => setClicked(false)}>Movies</li>
        </Link>
        <Link style={{ textDecoration: "none", margin: "1rem" }} to="/tv">
          <li onClick={() => setClicked(false)}>Tv Series</li>
        </Link>

        <div className="srch-bar">
          {show && (
            <input
              type="search"
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(search);
              }}
              onBlur={() => {
                if (search.length < 2) {
                  setShow(false);
                }
              }}
              onEmptied={() => setDone(false)}
              autoFocus
            />
          )}
        </div>
        <div className="srch-btn" onClick={handleSearchClick}>
          <FiSearch />
        </div>
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <FaBars />
      </div>
    </div>
  );
}

export default Nav;
