import React from 'react'
import { Link } from 'react-router-dom'

function Section2() {
    const dairydata =[
        {
            id:"1",
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
    const snacksdata=[
        {
            id:1,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/87199d95-d68a-49e0-8644-3695381d7faa.jpg?ts=1707313057",
            productname:"Haldiram's Punjabi Tadka Namkeen ",
            weight:"220g",
            price:"₹54"
           },
        {
            id:2,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9af2d503-ad5d-4d10-b59a-981e39518c4c.jpg?ts=1717418804",
            productname:"Doritos Sweet Chilli Flavour Nachos",
            weight:"2 X 82.5g",
            price:"₹80"
           },
           {
            id:3,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_481985.jpg?ts=1710347281",
            productname:"Haldiram's Classic Salted Peanuts ",
            weight:"2 X 200g",
            price:"₹103"
           },
           {
            id:4,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/11150a.jpg?ts=1688463551",
            productname:"Uncle Chipps Spicy Treat Flavour Potato",
            weight:"50g",
            price:"₹20"
           },
           {
            id:5,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19251a.jpg?ts=1687948393",
            productname:"Haldiram's Lite Mixture Namkeen",
            weight:"150g",
            price:"₹35"
           },
           {
            id:6,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/8ba69483-4edb-4d43-ab78-17d38bad99bb.jpg?ts=1708588995",
            productname:"Haldiram's Punjabi Masala Papad",
            weight:"200g",
            price:"₹65"
           },
           {
            id:7,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/240092a.jpg?ts=1687324818",
            productname:"Lay's India's Magic Masala Potato Chips",
            weight:"40g",
            price:"₹20"
           },
           {
            id:8,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19274a.jpg?ts=1688625383",
            productname:"Haldiram's Bhelpuri / Bhelpuri",
            weight:"200g",
            price:"₹50"
           },
           {
            id:9,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_481990.jpg?ts=1710347281",
            productname:"Haldiram's Boondi - Pack of 2",
            weight:"440g",
            price:"₹99"
           },
           {
            id:10,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/11142a.jpg?ts=1688472268",
            productname:"Haldiram's Fatafat Bhelpuri",
            weight:"150g",
            price:"₹35"
           },
           {
            id:11,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/89515817-d207-4ddd-ac47-23ff26a1b1b5.jpg?ts=1718139903",
            productname:"Cheetos Flamin' Hot Twisted Corn Puffs",
            weight:"30g",
            price:"₹171"
           },
           {
            id:12,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19266a.jpg?ts=1688625382",
            productname:"Haldiram's Bhujia",
            weight:"400g",
            price:"₹111"
           },
           {
            id:13,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/432818a.jpg?ts=1688444559",
            productname:"Doritos Cheese Nachos",
            weight:"60g",
            price:"₹30"
           },
           {
            id:14,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c227161-9280-43f0-81d5-dc6fee24b22b.jpg?ts=1708591572",
            productname:"Haldiram's Lite Chiwda Namkeen",
            weight:"150g",
            price:"₹30"
           },
           {
            id:15,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a28f4dec-a3fb-4f9e-a4e5-8acfe5722a1f.jpg?ts=1707312781",
            productname:"Lay's American Style Cream ",
            weight:"40g",
            price:"₹20"
           },
    ]
    const juicesdata=[
        {
            id:1,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1f415f60-c955-4099-9056-a363383d51fb.jpg?ts=1709714322",
            productname:"Hamdard Rooh Afza Rose Sharbat",
            weight:"750ml",
            price:"₹175"
        },
        {
            id:2,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cfeaa68b-2ce1-4c1e-95c5-450bbb9bb281.jpg?ts=1708591243",
            productname:"Bisleri Packaged Water",
            weight:"5l",
            price:"₹70"
        },
        {
            id:3,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/31ebb055-2c57-45ea-8174-9efd5645f68f.jpg?ts=1717418859",
            productname:"Maaza Mango Drink 600 ml",
            weight:"2 X 600 ml",
            price:"₹76"
        },
        {
            id:4,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1f7b5070-0921-40c8-ba01-7847b2a84b03.jpg?ts=1719409251",
            productname:"Real Fruit Power Coconut Water",
            weight:"1l",
            price:"₹91"
        },
        {
            id:5,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2217f2ec-4dc7-47ec-b67c-65fe1b848db4.jpg?ts=1707312716",
            productname:"Red Bull Energy Drink (250 ml)",
            weight:"250ml",
            price:"₹125"
        },
        {
            id:6,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6b98633c-7c6a-4708-a372-e2b49da568ab.jpg?ts=1707312322",
            productname:"Coca-Cola Soft Drink (750 ml)",
            weight:"750ml",
            price:"₹40"
        },
        {
            id:7,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/29280a12-2e73-458c-912c-97a29b217229.jpg?ts=1707312715",
            productname:"Real Activ Fibre+ Multi Fruit Juice",
            weight:"1l",
            price:"₹140"
        },
        {
            id:8,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/071735a6-fd6a-49b0-af08-b634857645ea.jpg?ts=1708591243",
            productname:"Bisleri Soda Water",
            weight:"750ml",
            price:"₹20"
        },
        {
            id:9,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ce7b1587-90c5-44c7-8191-41d36a2e2106.jpg?ts=1719382321",
            productname:"Storia 100% Tender Coconut Water ",
            weight:"1l",
            price:"₹116"
        },
        {
            id:10,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/374687a.jpg?ts=1688469730",
            productname:"Sting Energy Drink (250 ml)",
            weight:"250ml",
            price:"₹20"
        },
        {
            id:11,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/482620a.jpg?ts=1690813234",
            productname:"Ice Cubes by Dras Ice",
            weight:"1kg",
            price:"₹70"
        },
        {
            id:12,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/377a.jpg?ts=1697204030",
            productname:"Gatorade Blue Bolt Flavour Drink",
            weight:"500ml",
            price:"₹50"
        },
        {
            id:13,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/07749000-b488-422a-b89c-823d8a06bfcf.jpg?ts=1707312715",
            productname:"Real Activ 100% Apple Juice",
            weight:"1l",
            price:"₹113"
        },
        {
            id:14,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/401282a.jpg?ts=1687328280",
            productname:"Real Fruit Power Masala Mixed Juice",
            weight:"1l",
            price:"₹72"
        },
        {
            id:15,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/700eabda-0ece-4dee-b140-b18591978846.jpg?ts=1717833655",
            productname:"Real Fruit Power Cranberry Juice",
            weight:"1l",
            price:"₹130"
        },
        
    ]
    const candiesdata=[
        {
            id:1,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0cdb751e-a797-4f76-ba3d-00a4c6130c19.jpg?ts=1710154019",
            productname:"Happydent Wave Sugarfree Mint Chewin",
            weight:"29g",
            price:"₹46"
        },
        {
            id:2,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/440073a.jpg?ts=1704911343",
            productname:"Orbit Mixed Fruit Flavour Chewing",
            weight:"22g",
            price:"₹50"
        },
        {
            id:3,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/458221a.jpg?ts=1690815447",
            productname:"Center Fresh Chewy Mints Spearmint",
            weight:"33g",
            price:"₹45"
        },
        {
            id:4,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495587a.jpg?ts=1680680930",
            productname:"Center Fruit Pineapple Chewing Gum ",
            weight:"67g",
            price:"₹45"
        },
        {
            id:5,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495586a.jpg?ts=1690813422",
            productname:"Center Fresh Sugar Free Mint Candy",
            weight:"84g",
            price:"₹35"
        },
        {
            id:6,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/440074a.jpg?ts=1704911343",
            productname:"Wrigley's Doublemint Lemonmint Candy",
            weight:"32g",
            price:"₹35"
        },
        {
            id:7,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495586a.jpg?ts=1690813422",
            productname:"Center Fresh Sugar Free Mint Candy",
            weight:"35g",
            price:"₹84"
        },
        {
            id:8,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/440074a.jpg?ts=1704911343",
            productname:"Wrigley's Doublemint Lemonmint Candy",
            weight:"32g",
            price:"₹50"
        },
        {
            id:9,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/440075a.jpg?ts=1704911343",
            productname:"Wrigley's Doublemint Peppermint Candy",
            weight:"32g",
            price:"₹50"
        },
    ]
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  return (
    <>
    {/* 1st */}
    <div className='dairycontainer'>
        <div className="section_title">
        Dairy, Bread & Eggs
        </div>
      <div className='dairy_container'>
    <div className="main_dairy_con">
      {
        dairydata.map((dairy_data)=>{
           
            const {id,img,productname,weight,price}=dairy_data;
            // var titlepath = dairy_data.productname.replace(/\s+/g,'-').toLowerCase(); 
            return(
                <div className="dairy_item" key={id}>
                 <div className="container1">
                    <img src={typeof img === 'string' ? img : img.default}  alt="" />
                 </div>
                 <div className="container2">
                    <div className="name_weight">
                    <Link to={`/product/${dairy_data.id}`}>
                        <div className="name" key={dairy_data.id} onClick={scrollToTop}>                          
                            {productname}
                        </div>
                    </Link>   
                        <span className='weight'>{weight}</span>
                    </div>
                    <div className="btn_price">
                        <div className="price">{price}</div>
                        <div className="btn">
                            ADD
                        </div>
                    </div>
                 </div>
                </div>
            )
        })
      }    
    </div>  
     </div>

    </div>

    {/* 2nd */}
    <div className='dairycontainer'>
        <div className="section_title">
        Snacks & Munchies
        </div>
    <div className='dairy_container'>
    <div className="main_dairy_con">
      {
        snacksdata.map((dairy_data)=>{
            const {id,img,productname,weight,price}=dairy_data;
            return(
                <div className="dairy_item" key={id}>
                 <div className="container1">
                    <img src={typeof img === 'string' ? img : img.default}  alt="" />
                 </div>
                 <div className="container2">
                    <div className="name_weight">
                        <div className="name">{productname}</div>
                        <span className='weight'>{weight}</span>
                    </div>
                    <div className="btn_price">
                        <div className="price">{price}</div>
                        <div className="btn">
                            ADD
                        </div>
                    </div>
                 </div>
                </div>
            )
        })
      }    
    </div>  
    </div>
    </div>

    {/* 3rd */}
    <div className='dairycontainer'>
        <div className="section_title">
        Cold Drinks & Juices
        </div>
    <div className='dairy_container'>
    <div className="main_dairy_con">
      {
        juicesdata.map((dairy_data)=>{
            const {id,img,productname,weight,price}=dairy_data;
            return(
                <div className="dairy_item" key={id}>
                 <div className="container1">
                    <img src={typeof img === 'string' ? img : img.default}  alt="" />
                 </div>
                 <div className="container2">
                    <div className="name_weight">
                        <div className="name">{productname}</div>
                        <span className='weight'>{weight}</span>
                    </div>
                    <div className="btn_price">
                        <div className="price">{price}</div>
                        <div className="btn">
                            ADD
                        </div>
                    </div>
                 </div>
                </div>
            )
        })
      }    
    </div>  
    </div>
    </div>

    {/* 4th */}
    <div className='dairycontainer'>
        <div className="section_title">
        Candies & Gums
        </div>
    <div className='dairy_container'>
    <div className="main_dairy_con">
      {
        candiesdata.map((dairy_data)=>{
            const {id,img,productname,weight,price}=dairy_data;
            return(
                <div className="dairy_item" key={id}>
                 <div className="container1">
                    <img src={typeof img === 'string' ? img : img.default}  alt="" />
                 </div>
                 <div className="container2">
                    <div className="name_weight">
                        <div className="name">{productname}</div>
                        <span className='weight'>{weight}</span>
                    </div>
                    <div className="btn_price">
                        <div className="price">{price}</div>
                        <div className="btn">
                            ADD
                        </div>
                    </div>
                 </div>
                </div>
            )
        })
      }    
    </div>  
    </div>
    </div>
    </>
  )
}

export default Section2
