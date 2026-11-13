/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { api, api_key } from "../api/apiResponse";
import Movies from "./Movies";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";
function Home() {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const res = await api.get(`/movie/top_rated?api_key=${api_key}`);
    dispatch(fetchMovies(res.data.results));
    // console.log(res.data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Movies />
    </>
  );
}
export default Home;
