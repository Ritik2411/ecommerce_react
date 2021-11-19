import { Button } from '@mui/material'
import React from 'react'
import { useStateValue } from '../ContextApi/Stateprovider'
import './Product.css'

function Product({id,title,price,image,rating}) {

    const [{cart},dispatch] = useStateValue()
    
    const addToCart = () => {
        //add item into DL
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id:id,
                title:title,
                price:price,
                image:image,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p className="product_title">{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_,i)=>{
                            return(
                                <i className="material-icons star_icon">star</i>
                            )
                        })
                    }
                </div>

                <img src={image}
                    alt=""
                    className="product_img"
                />

                <div className="home_addTocart_button">
                    
                    <Button variant="contained" style={{backgroundColor:'#ff9100'}} onClick={addToCart}>
                        Add To Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Product
