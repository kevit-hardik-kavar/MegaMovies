import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import MovieDetai from './Movies/MovieDetail';
import PageNotFound from './PageNotFound/PageNotFound';
import Footer from './Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:imdbID' element={<MovieDetai/>} />
          <Route  element={<PageNotFound/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
