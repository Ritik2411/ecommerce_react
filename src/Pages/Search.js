import React from 'react'
import { useParams } from 'react-router'
import './Search.css'

function Search() {
    let data = [{
        id:1,
        title:"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
        price:'$10.39',
        rating:'3',
        image:'https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        
        {
            id:2,
            title:"Zero to One: Notes on Start Ups, or How to Build the Future",
            price:'$13.49',
            rating:'5',
            image:'https://images-eu.ssl-images-amazon.com/images/I/51z7mZZKRgL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        },

        {
            id:3,
            title:"OPPO F19 Pro+ 5G (Fluid Black, 8GB RAM, 128GB Storage)",
            price:"$346.53",
            rating:"3",
            image:"https://m.media-amazon.com/images/I/71nT6xat93L._SX679_.jpg"
        },

        {
            id:4,
            title:"iQOO Z5 5G (Arctic Dawn, 8GB RAM, 128GB Storage) | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge ",
            price:"$319.86",
            rating:"5",
            image:"https://www.shopwish.in/wp-content/uploads/2021/10/New-Project-1.png"
        },

        {
            id:5,
            title:"ASUS ROG Phone II (Black, 128 GB) (8 GB RAM)",
            price:"$546.65",
            rating:"3",
            image:"https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone2-1.jpg",
        },

        {
            id:6,
            title:"ASUS ZenBook Duo 14 2021 Intel 14 inches FHD Dual-Screen Touch Business Laptop",
            price:"$1333.2",
            rating:"3",
            image:"https://m.media-amazon.com/images/I/81K9Es2DDFL._AC_SS450_.jpg",
        },

        {
            id:7,
            title:"Lenovo Legion 5 AMD Ryzen 5 4600H 15.6 inch (39.62 cms) Full HD IPS Gaming Laptop",
            price:"$933.33",
            rating:"5",
            image:"https://m.media-amazon.com/images/I/61ItfhQmaFL._SL1000_.jpg",
        }
    ]

    const params = useParams().search

    let result = data.filter((item)=>(
        item.title.toLowerCase().includes(params.toString().toLowerCase())
    )) 
    console.log(result)

    return (
        <div className="search">
            <h1 className="search_title">Your search items</h1>

            <div className="search_container">
                {
                    result.map(data=>(
                        <div className="search_items">
                          <img src={data.image}  className="search_image"/>
                          <div className="search_item_details">
                              <p style={{marginBottom:'5px',fontWeight:'bold'}}>{data.title}</p>
                              <p style={{marginBottom:'5px',fontWeight:'bold'}}>{data.price}</p>
                              {
                                  Array(parseInt(data.rating)).fill().map(()=>(
                                    <i className="material-icons star_icon">star</i>
                                ))
                              }  
                          </div>  
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search
