import React from 'react'
import logo from '../../image/icon/logo.png';
import search from '../../image/icon/search-icon.png';
import cart from '../../image/icon/cart.png'

function Header() {
  return (
    <div className="outer-wrapper">
 <header className="header-wrapper">
        <div className="internal-wrapper">
          <div className="header-link-wrapper">
            <ul>
              <li id="logo">
                <a href="/search/"
                  ><img src={logo} alt=""
                /></a>
              </li>
              <li><a href="#">mac</a></li>
              <li><a href="#">iphone</a></li>
              <li><a href="#">ipad</a></li>
              <li><a href="#">watch</a></li>
              <li><a href="#">tv</a></li>
              <li><a href="#">music</a></li>
              <li><a href="#">support</a></li>
              <li id="search">
                <a href="/search/"
                  ><img src={search} alt=""
                /></a>
              </li>
              <li id="cart">
                <a href="/cart/"><img src={cart}alt="" /></a>
              </li>
            </ul>
          </div>
        </div>
      </header>


    </div>
  )
}
export default Header;
