import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import "./index";
import NotFound from "./components/NotFound";
import Details from "./components/Details";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies/details/:id" element={<Details></Details>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
