/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/exhaustive-deps */
import { Card } from "flowbite-react";
import { Link, useParams } from "react-router";
import { api, api_key } from "../api/apiResponse";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedMovie, unselectedMovie } from "../redux/action/movies";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const movieDetails = async () => {
    const res = await api.get(`/movie/${id}?api_key=${api_key}`);
    dispatch(selectedMovie(res.data));
  };

  useEffect(() => {
    if (id) {
      movieDetails();
    }

    return () => dispatch(unselectedMovie({}));
  }, [id]);

  let movie = useSelector((state) => state.movies.movie);

  return (
    <div className="flex justify-center py-10">
      <div className="w-[2000px] p-6">
        <Link to="/">
          <span className="text-blue-600 text-lg font-semibold underline hover:text-blue-400 transition-colors duration-200">
            BACK
          </span>
        </Link>
      </div>

      <Card className="max-w-xl overflow-hidden">
        <div className="overflow-hidden rounded-lg ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="hover:bg-yellow-500"
          />
        </div>

        <h3 className="text-3xl mt-2 flex items-center gap-2 hover:bg-yellow-200 underline italic ">
          <i className="fa-solid fa-film"></i>
          {movie.title}
        </h3>

        <p className="font-normal text-gray-700 dark:text-gray-400 mt-1 hover:bg-yellow-200  ">
          {movie.overview}
        </p>

        <div className="flex gap-4 mt-2">
          <span className="bg-indigo-500 hover:bg-gray-500 text-white p-2 rounded-xl">
            <i className="fa-solid fa-flag me-2 mb-2"></i>
            {movie.vote_average}
          </span>

          <span className="bg-indigo-500 hover:bg-gray-500 text-white p-2 rounded-xl">
            <i className="fa-solid fa-users me-2 mb-2"></i>
            {movie.vote_count}
          </span>
        </div>
      </Card>
    </div>
  );
}

export default Details;
