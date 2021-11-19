import React from 'react'
import './Home.css'
import Product from '../Components/Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    src="https://m.media-amazon.com/images/I/51yE2y7E9rL._SX3000_.jpg"
                    className="home_image"
                    alt=""
                />

                <div className="home_row">
                    <Product id={1}
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={10.39}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                        rating={3}
                    />
                    <Product  id={2}
                        title="Zero to One: Notes on Start Ups, or How to Build the Future"
                        price={13.49}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51z7mZZKRgL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                        rating={5}
                    />
                    
                </div>

                <div className="home_row">
                <Product id={3}
                        title="OPPO F19 Pro+ 5G (Fluid Black, 8GB RAM, 128GB Storage)"
                        price={346.53}
                        image="https://m.media-amazon.com/images/I/71nT6xat93L._SX679_.jpg"
                        rating={3}
                    />
                    <Product id={4}
                        title="iQOO Z5 5G (Arctic Dawn, 8GB RAM, 128GB Storage) | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge "
                        price={319.86}
                        image="https://www.shopwish.in/wp-content/uploads/2021/10/New-Project-1.png"
                        rating={5}
                    />    
                    <Product id={5}
                        title="ASUS ROG Phone II (Black, 128 GB)  (8 GB RAM)"
                        price={546.65}
                        image="https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone2-1.jpg"
                        rating={3}
                    />
                </div>

                <div className="home_row">
                <Product id={6}
                        title="ASUS ZenBook Duo 14 2021 Intel 14 inches FHD Dual-Screen Touch Business Laptop"
                        price={1333.2}
                        image="https://m.media-amazon.com/images/I/81K9Es2DDFL._AC_SS450_.jpg"
                        rating={3}
                    />
                    <Product id={7}
                        title="Lenovo Legion 5 AMD Ryzen 5 4600H 15.6 inch (39.62 cms) Full HD IPS Gaming Laptop"
                        price={933.33}
                        image="https://m.media-amazon.com/images/I/61ItfhQmaFL._SL1000_.jpg"
                        rating={5}
                    />        
                </div>   
            </div>
        </div>
    )
}

export default Home
