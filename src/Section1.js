import React from 'react'
import "./Section.css"

function Section1() {

    const upperdata =[
    {   id:1,
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    },
    {   
        id:2,
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
    },
    {
        id:3,
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png"
    },
    {
        id:4,
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png"
    },
    {
        id:5,
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png"
    },
    {
        id:6,
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png"
    },
    {
        id:7,
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png"
    },
    {
        id:8,
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png"
    },
    {
        id:9,
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png"
    },
    ];
    const lowerdata=[
        {   id:1,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png",
           
        },
        {   
            id:2,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png",
        },
        {
            id:3,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png"
        },
        {
            id:4,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png"
        },
        {
            id:5,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png"
        },
        {
            id:6,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png"
        },
        {
            id:7,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png"
        },
        {
            id:8,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png"
        },
        {
            id:9,
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png"
        },
    ]
  return (
    <div className='main_item_con'>
        <div className="upper_con">
       {
        upperdata.map((break_data)=>{
            const { id, img} = break_data;
            return(
                
                 <div className="item_container" key={id}>
                    <div className="img_con">
                        <img src={typeof img === 'string' ? img : img.default} alt="" />
                    </div>
                    
                 </div>
             
            )
        })
       }
       </div>
       <div className="lower_con">
        {
              
                lowerdata.map((break_data)=>{
                    const { id, img, text} = break_data;
                    return(
                        
                         <div className="item_container" key={id}>
                            <div className="img_con">
                                <img src={typeof img === 'string' ? img : img.default} alt="" />
                            </div>
                            <div className="text_con">{text}</div>
                         </div>
                     
                    )
                })
               } 
        
       </div>
    </div>
  )
}

export default Section1
