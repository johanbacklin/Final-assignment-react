import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SingleNumberPlate from "./pages/SingleNumberPlate";
import AllNumberPlates from "./pages/AllNumberPlates";
import AddNumberPlate from "./pages/AddNumberPlate";
import Home from "./pages/Home";
import "./app.scss";

function App() {
  //console.log(response);

  return (
    <>
      <BrowserRouter>
        <header>
          <nav className="header">
            <ul className="header__all">
              <li>
                <Link to="./pages/Home">Home</Link>
              </li>
              <li>
                <Link to="./pages/AllNumberPlates">All Numberplates</Link>
              </li>
              <li>
                <Link to="./pages/AddNumberPlate">Add Numberplate</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            exact
            path="/pages/AllNumberPlates"
            element={<AllNumberPlates />}
          />
          <Route exact path="/pages/Home" element={<Home />} />
          <Route
            exact
            path="/NumberPlate/:id"
            element={<SingleNumberPlate />}
          />
          <Route
            exact
            path="/pages/AddNumberPlate"
            element={<AddNumberPlate />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
