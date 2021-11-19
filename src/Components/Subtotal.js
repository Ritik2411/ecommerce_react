import React from 'react'
import { useHistory } from 'react-router-dom'
import { totalPrice } from '../ContextApi/reducer'
import { useStateValue } from '../ContextApi/Stateprovider'
import './Subtotal.css'

function Subtotal() {
    const [{cart},dispatch] = useStateValue()
    const history = useHistory()
    
    return (
        <div className="subtotal">
            <div className="subtotal_container">
                <p className="subtotal_container_line_1">
                    Subtotal ({cart?.length} items):&nbsp;
                    <strong>${totalPrice(cart).toFixed(2)}</strong>
                </p>
                <p className="subtotal_container_line_2">
                    <input type="checkbox"/>&nbsp;This order contains a gift
                </p>
            </div>

            <div 
                className="subtotal_checkout_button"
                onClick={()=>{
                    history.push('/payment')
                }}
            >
                <button>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Subtotal
