import Header from "./components/Header";
import './App.css';
import Banner from "./components/Banner";
import AllMovies from "./components/AllMovies";

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <AllMovies/>
    </div>
  );
}

export default App;
