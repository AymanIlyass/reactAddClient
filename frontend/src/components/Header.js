import React from 'react'

const Header = () => {
  return (
    <div className='topnav'>
        <a className="logo" href='/'>Clients Add</a>
        <div className="search-container">
            <form>
                <a href='/'>Add client</a>
                <input type="text" placeholder='Search...' name='Search' />
                <button type="submit"><i className='fa fa-search'></i></button>
            </form>
        </div>
    </div>
  );
}
 export default Header;