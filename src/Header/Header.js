import React from 'react';
import user from '../Images/user.jpg';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <div className="title">MegaMovies</div>
      </Link>
      {/* <div className="input">
        <input type="text" placeholder='searchformovies'/>
      </div> */}

      <div className="user-image">
        <img src={user} alt="A user's " />
      </div>

    </div>
  )
}

export default Header
