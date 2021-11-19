import React from 'react'
import './Checkout.css'
import CheckoutProduct from '../Components/CheckoutProduct'
import { useStateValue } from '../ContextApi/Stateprovider'
import Subtotal from '../Components/Subtotal'

function Checkout() {
    const [{cart},dispatch] = useStateValue()
    
    console.log(cart)
    return (
        <div className="checkout">
            <div className="checkout_left">
                <h2 className="checkout_title">Your Shopping Cart</h2>
                {
                    cart.map(data=>{
                        return(
                            <CheckoutProduct
                                id={data.id}
                                image={data.image}
                                title={data.title}
                                price={data.price}
                                rating={data.rating}
                            />
                        )
                    })
                }
            </div>

            <div className="checkout_right">
                <Subtotal/>
            </div>        
        </div>
    )
}

export default Checkout
