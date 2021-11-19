import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../ContextApi/Stateprovider'

function CheckoutProduct({id,image,title,price,rating}) {

    const [{cart},dispatch] = useStateValue()

    const removeFromCart = () => {
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} className="checkout_image"/>
            
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">${price}</p>
            
                <div>
                    {
                        Array(rating).fill().map(()=>{
                            return(
                                <i className="material-icons star_icon">star</i>
                            )
                        })
                    }
                </div>
                
                <div className="checkoutProduct_remove">
                    <button onClick={removeFromCart} className="remove_button"> 
                        Remove Product From Cart
                    </button>
                </div>    
            </div>    
            
        </div>
    )
}

export default CheckoutProduct
