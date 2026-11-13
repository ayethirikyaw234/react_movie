import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function Movies() {
  let movies = [];

  movies = useSelector((state) => state.movies.movies);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <h1>There is no movie</h1>
        )}
      </div>
    </div>
  );
}
export default Movies;
