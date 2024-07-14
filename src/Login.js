import React from 'react'
import Logo from './images/Logo.webp'
import "./Section.css"
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
        {/* login header */}
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
        <div className="login_btn">Login</div>
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

       
       {/* main login part */}
       <div className="login">
        <div className="login_con">
            <div className="upper_login">
                <div className="login_head">India's last minute app</div>
                <div className="login_">Log in or Sign up help</div>
            </div>
            <div className="midel_login">
                <div className="inputnumber">
                    +91
                    <input type="number" name="" id="" placeholder='Enter Your Mobile Number' />
                </div>
                <Link to='/'>
                <div className="submit">
                    <button>
                        Continue
                    </button>
                </div>
                </Link>
            </div>
            <div className="lower_login">
                <span>By continuing, you agree to our Terms of service & Privacy policy</span>
            </div>
        </div>
        </div>
       {/* //// */}

       {/* login footer */}
       <div>
        <div className="footer">
          <div className='main_footer'>
          <div className="left_footer">
    <div className="footer_title">Useful Links</div>
    <div className="footer_listed">
        <div className="footer_list">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Lead</li>
            <li>Value</li>
        </div>
        <div className="footer_list">
            <li>Privacy</li>
            <li>Terms</li>
            <li>FAQs</li>
            <li>Security</li>
            <li>Mobile</li>
            <li>Contact</li>
        </div>
        <div className="footer_list">
            <li>Partner</li>
            <li>Express</li>
            <li>Seller</li>
            <li>Warehouse</li>
            <li>Deliver</li>
            <li>Resources</li>
        </div>
    </div>
          </div> 
          <div className="right_footer">
     <div className="footer_title">Categories</div>
    <div className="footer_listed">
        <div className="footer_list">
            <li>Vegetables & Fruits</li>
            <li>Cold Drinks & Juices</li>
            <li>Bakery & Biscuits</li>
            <li>Dry Fruits, Masala & Oil</li>
            <li>Paan Corner</li>
            <li>Pharma & Wellness</li>
            <li>Ice Creams & Frozen Desserts</li>
            <li>Beauty & Cosmetics</li>
        </div>
        <div className="footer_list">
            <li>Dairy & Breakfast</li>
            <li>Instant & Frozen Food</li>
            <li>Sweet Tooth</li>
            <li>Sauces & Spreads</li>
            <li>Organic & Premium</li>
            <li>Cleaning Essentials</li>
            <li>Personal Care </li>
            <li>Toys & Games</li>            
        </div>
        <div className="footer_list">
            <li>Munchies</li>
            <li>Tea, Coffee & Health Drinks</li>
            <li>Atta, Rice & Dal</li>
            <li>Chicken, Meat & Fish</li>
            <li>Baby Care</li>
            <li>Home & Office</li>
            <li>Pet Care</li>
            <li>Print Store</li>
        </div>
    </div>        
          </div>
          </div>
          </div>
          <div className="links_list">
        <div className="copyright">
        © Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2024
        </div>
        <div className="social_links">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>  
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="#1F1F1F"></rect><path d="M75 34.6178C73.4015 35.5058 71.4479 36.0386 69.6718 36.2162C71.6255 34.973 73.0463 33.0193 73.7568 30.7104C71.9807 31.7761 70.027 32.6641 67.7181 33.1969C65.9421 31.2432 63.6332 30 60.9691 30C55.8185 30 51.556 34.4402 51.556 40.1236C51.556 40.834 51.556 41.722 51.7336 42.4324C43.9189 42.0772 36.9923 37.9923 32.3745 31.9537C31.4865 33.3745 31.1313 35.1506 31.1313 37.1042C31.1313 40.6564 32.7297 43.6757 35.2162 45.4517C33.6178 45.4517 32.1969 44.9189 30.9537 44.2085V44.3861C30.9537 49.1815 34.1506 53.2664 38.4131 54.332C37.7027 54.5097 36.8147 54.6873 35.9266 54.6873C35.3938 54.6873 34.6834 54.6873 34.1506 54.5097C35.3938 58.5946 38.7683 61.4363 42.8533 61.4363C39.6564 64.1004 35.5714 65.6988 31.3089 65.6988C30.5985 65.6988 29.888 65.6988 29 65.5212C33.0849 68.3629 38.0579 70.139 43.3861 70.139C60.6139 70.139 70.027 54.8649 70.027 41.5444C70.027 41.1892 70.027 40.6564 70.027 40.3012C72.1583 38.5251 73.7568 36.749 75 34.6178Z" fill="white"></path></svg>
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6973_248115)"><rect width="100" height="100" rx="50" fill="white"></rect><path d="M49.5935 59.3496C54.5326 59.3496 58.5366 55.3456 58.5366 50.4065C58.5366 45.4674 54.5326 41.4634 49.5935 41.4634C44.6544 41.4634 40.6504 45.4674 40.6504 50.4065C40.6504 55.3456 44.6544 59.3496 49.5935 59.3496Z" fill="#1F1F1F"></path><path d="M60.7724 28.4553H38.4146C35.1626 28.4553 32.3171 29.4716 30.4878 31.3008C28.6585 33.1301 27.6423 35.9756 27.6423 39.2276V61.5854C27.6423 64.8374 28.6585 67.6829 30.6911 69.7155C32.7236 71.5447 35.3659 72.561 38.6179 72.561H60.7724C64.0244 72.561 66.8699 71.5447 68.6992 69.7155C70.7317 67.8862 71.748 65.0407 71.748 61.7886V39.4309C71.748 36.1789 70.7317 33.5366 68.9024 31.5041C66.8699 29.4716 64.2276 28.4553 60.7724 28.4553ZM49.5935 64.2276C41.8699 64.2276 35.7724 57.9268 35.7724 50.4065C35.7724 42.6829 42.0732 36.5854 49.5935 36.5854C57.1138 36.5854 63.6179 42.6829 63.6179 50.4065C63.6179 58.1301 57.3171 64.2276 49.5935 64.2276ZM64.0244 39.2276C62.1951 39.2276 60.7724 37.8049 60.7724 35.9756C60.7724 34.1463 62.1951 32.7236 64.0244 32.7236C65.8537 32.7236 67.2764 34.1463 67.2764 35.9756C67.2764 37.8049 65.8537 39.2276 64.0244 39.2276Z" fill="#1F1F1F"></path><path d="M50 0C22.3577 0 0 22.3577 0 50C0 77.6423 22.3577 100 50 100C77.6423 100 100 77.6423 100 50C100.203 22.3577 77.6423 0 50 0ZM76.626 61.7886C76.626 66.4634 75 70.5285 72.1545 73.374C69.3089 76.2195 65.2439 77.6423 60.7724 77.6423H38.6179C34.1463 77.6423 30.0813 76.2195 27.2358 73.374C24.187 70.5285 22.7642 66.4634 22.7642 61.7886V39.4309C22.7642 30.0813 29.065 23.5772 38.6179 23.5772H60.9756C65.6504 23.5772 69.5122 25.2033 72.3577 28.0488C75.2032 30.8943 76.626 34.7561 76.626 39.4309V61.7886V61.7886Z" fill="#1F1F1F"></path></g><defs><clipPath id="clip0_6973_248115"><rect width="100" height="100" rx="50" fill="white"></rect></clipPath></defs></svg>
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="#1F1F1F"></rect><path d="M38.5 37.5H28V72H38.5V37.5Z" fill="white"></path><path d="M64.0045 37.5C58 37.5 56.335 39.468 55 42V37.5H44.5V72H55V52.5C55 49.5 55 46.5 60.25 46.5C65.5 46.5 65.5 49.5 65.5 52.5V72H76V52.5C76 43.5 74.5 37.5 64.0045 37.5Z" fill="white"></path><path d="M33.25 34.5C36.1495 34.5 38.5 32.1495 38.5 29.25C38.5 26.3505 36.1495 24 33.25 24C30.3505 24 28 26.3505 28 29.25C28 32.1495 30.3505 34.5 33.25 34.5Z" fill="white"></path></svg>

        </div>
          </div>
          <div className="footer_last">
    “Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
          </div> 
       </div>
    </div>
  )
}

export default Login
