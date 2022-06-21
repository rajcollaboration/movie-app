import Header from "./components/Header";
import './App.css';
import Banner from "./components/Banner";
import AllMovies from "./components/AllMovies";
import AddToFeveret from "./components/AddToFeveret";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
    <Routes>
      {/* <Route path="/" element={<App />}> */}
        <Route path="/" element={[<Banner/>,<AllMovies/>]} />
        <Route path="/feverates" element={[<AddToFeveret/>]} />
        <Route path="/allMovies" element={[<AllMovies/>]} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
     {/* 
     <Banner/>
     <AllMovies/>
     <AddToFeveret/> */}
    </div>
  );
}

export default App;
