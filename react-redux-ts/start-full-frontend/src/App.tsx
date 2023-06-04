import './App.css';
import { Navigation } from './components/Navigation';
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage';

export const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favourite' element={<FavouritesPage/>}/>
      </Routes>
    </>
  );
}
