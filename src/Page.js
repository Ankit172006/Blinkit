import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer';
import Logo from './images/Logo.webp'
import { Link } from 'react-router-dom';
import "./Page.css"
const dairydata =[
  {
      id:1,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/479207a.jpg?ts=1687950375",
      productname:"Verka Paneer",
      weight:"200g",
      price:"₹85"
  },
  {
      id:2,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/21b53d7f-5f47-499b-b4f7-68e07ee9c975.jpg?ts=1708965776",
      productname:"Bonn High Fibre Brown Bread",
      weight:"400g",
      price:"₹48"
  },
  {
      id:3,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/479197a.jpg?ts=1688618551",
      productname:"Verka Curd",
      weight:"400g",
      price:"₹32"
  },
  {
      id:4,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7514beed-37f7-4c8c-b50a-4b39842009b8.jpg?ts=1707312315",
      productname:"Amul Salted Butter",
      weight:"500g",
      price:"₹285"
  },
  {
      id:5,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5d991307-e953-45f4-961a-9510e073694e.jpg?ts=1712325667",
      productname:"Verka Standerd Fresh Milk",
      weight:"500ml",
      price:"₹31"
  },
  {
      id:6,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7d48ff24-6659-4107-be92-6d05b7230504.jpg?ts=1716382216",
      productname:"Table White Eggs (6 pieces)",
      weight:"6 pieces",
      price:"₹54"
  },
  {
      id:7,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478746a.jpg?ts=1690813921",
      productname:"Kitty Hi-Fiber Brown Bread",
      weight:"400g",
      price:"₹50"
  },
  {
      id:8,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0bf028f7-3fa5-4f71-9d69-8b5e93c16392.jpg?ts=1714320599",
      productname:"Bonn Atta Whole Wheat Bread",
      weight:"400g",
      price:"₹48"
  },
  {
      id:9,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/401217d5-6db6-4b16-86f8-25a72c733a3c.jpg?ts=1716382213",
      productname:"Table White White Eggs (10 pieces)",
      weight:"10 pieces",
      price:"₹88"
  },
  {
      id:10,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2d48ef3c-4323-40ec-8f90-a84add8382bb.jpg?ts=1708953276",
      productname:"Nestle Milkmaid Sweetened Condensed...",
      weight:"380g",
      price:"₹147"
  },
  {
      id:11,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/479198a.jpg?ts=1687950375",
      productname:"Verka Curd",
      weight:"180g",
      price:"₹20"
  },
  {
      id:12,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/464204a.jpg?ts=1700205036",
      productname:"Bonn White Bread",
      weight:"400g",
      price:"₹38"
  },
  {
      id:13,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/58b5aa65-857c-41b0-9c2b-a816bb318c89.jpg?ts=1716382208",
      productname:"Table White White Eggs - 30 Pieces Tray",
      weight:"30 pieces",
      price:"₹241"
  },
  {
      id:14,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/53ea2845-9642-4ce3-bdb4-4635392e4f1d.jpg?ts=1712325663",
      productname:"Verka Double Toned Fresh Milk",
      weight:"500ml",
      price:"₹25"
  },
  {
      id:15,
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/170a.jpg?ts=1704366792",
      productname:"Amul Cheese Cubes",
      weight:"200g",
      price:"₹135"
  },
]
 function Page() {
  let {productid} =useParams();
  var data = dairydata.find(p=> p.id === parseInt(productid));
  if(!data)
      {
        return (
         <div> Sorry </div>
        )
      }
        return (
        <>
        {/* //header */}
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
       </>
       <div className="product_detail">
        <div className="img_section">
          <img src={data.img} alt="" />
        </div>
        <div className="pro_info">
        <div className="pro_name_d">
          <div className="upper_title_d">
            <p>Home / Concentrates & Syrups /</p>{data.productname}
          </div>
          <div className="main_name">
            <h1>{data.productname}</h1>
          </div>
        </div>
        <div className="price_section_d">
          <div className="left_d">
            <div className="weight_d">
              <p>{data.weight}</p>
            </div>
            <div className="price_d">
            <span> MRP:</span>{data.price}
            </div>
          </div>
          <div className="right_d">
          <div className="btn">
                            ADD
                        </div>
          </div>
        </div>
        <div className="last_d">
          <div className="last_title">Why shop from blinkit?</div>
          <div className="last_column">
            <div className="column">
              <div className="last_img">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" alt="" />
              </div>
              <div className="last_dis">
                	
               Superfast Delivery <br />
              Get your order delivered to your doorstep at the earliest from dark stores near you.
              </div>
            </div>
            <div className="column">
              <div className="last_img">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png" alt="" />
              </div>
              <div className="last_dis">
              Best Prices & Offers <br />
              Best price destination with offers directly from the manufacturers.
              </div>
            </div>
            <div className="column">
              <div className="last_img">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png" alt="" />
              </div>
              <div className="last_dis"> 	
              Wide Assortment <br />
              Choose from 5000+ products across food, personal care, household & other categories.
              </div>
            </div>
          </div>
        </div>
        </div>
        
       </div>
        <Footer/>
        </>)
 }

export default Page
