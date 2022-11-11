
import './App.css';
import Navbar from './componets/Navbar';
import Banner from './componets/Banner';
import MovieList from'./componets/MovieList';
import Favourites from './componets/Favourites';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/"  element={<><Banner/>
     <MovieList/></>}/>
     <Route path="/favourites" element={<><Favourites/></>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
