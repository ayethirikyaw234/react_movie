import { Card } from "flowbite-react";
import { Link } from "react-router";

function MovieCard({ movie }) {
  return (
    <>
      <Link to={`/movies/details/${movie.id}`}>
        <div className="max-w-sm mx-auto rounded-xl">
          <Card className="max-w-sm overflow-hidden">
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
              {movie.overview.slice(0, 150)}...
            </p>

            <div className="flex gap-4 mt-2">
              <span className="bg-indigo-500 hover:bg-gray-500 text-white p-2 rounded-xl">
                <i className="fa-solid fa-star me-2 mb-2"></i>
                {movie.vote_average}
              </span>

              <span className="bg-indigo-500 hover:bg-gray-500 text-white p-2 rounded-xl">
                <i className="fa-solid fa-calendar-days me-2 mb-2"></i>
                {movie.release_date}
              </span>
            </div>
          </Card>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
