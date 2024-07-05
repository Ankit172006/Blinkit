import React from 'react'
import Logo from './images/Logo.webp'
import bigbanner from "./images/banner/Bigbanner.webp"
import minibnnr1 from './images/banner/Banner1.avif'
import minibnnr2 from './images/banner/Banner2.avif'
import minibnnr3 from './images/banner/Banner3.avif'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
       <div className='main_header'>
      <div className="container1">
        <div className="logo_con">
         <img src={Logo} alt="" />   
        </div>
        <div className="location_con">
            <div className='min11'>Delivery in 11 minutes</div>
            <div className="location">Chandigarh, India</div>
        </div>
      </div>
      <div className="searchbox">
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
	     <path fill="#000" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6" />
      </svg>
      <input type="text" placeholder='Search' />
      </div>
      <div className="container22">
        <Link to='login/sign_in'>
          <div className="login_btn">Login</div>
        </Link>
        <div className="cart_con">
            <div className="cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
	          <path fill="white" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
            </svg>
        My Cart
            </div>

        </div>
      </div>
 
       </div>
       <div className="banner_section">
         <div className="big_banner">
             <img src={bigbanner} alt="" />
         </div>
         <div className="collection_banner">
             <img src={minibnnr1} alt="" />
             <img src={minibnnr2} alt="" />
             <img src={minibnnr3} alt="" />
         </div>
       </div>
       </>
  )
}

export default Header
