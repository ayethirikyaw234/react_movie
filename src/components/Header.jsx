import { Navbar, NavbarBrand } from "flowbite-react";
import { useRef } from "react";
import { Link } from "react-router";
import { api, api_key } from "../api/apiResponse";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

function Header() {
  const searchMovie = useRef("");
  const dispatch = useDispatch();

  const searchData = async () => {
    if (searchMovie.current.value !== "") {
      const res = await api.get(
        `/search/movie?query=${searchMovie.current.value}&api_key=${api_key}`
      );
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`/movie/top_rated?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  };

  return (
    <div>
      <Navbar className="bg-gradient-to-r from-pink-400 to-blue-500 text-white shadow-md">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-4">
          <NavbarBrand as={Link} to="/">
            <span className="self-center whitespace-nowrap text-2xl font-poppins font-extrabold tracking-wide">
              Code Lab Movie Channel
            </span>
          </NavbarBrand>
        </div>
      </Navbar>

      <div className="flex justify-center py-4">
        <form className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-3 py-2 text-black  border-2"
            ref={searchMovie}
          />
          <button
            type="button"
            onClick={() => searchData()}
            className="bg-pink text-white px-4 py-2 rounded-lg "
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
