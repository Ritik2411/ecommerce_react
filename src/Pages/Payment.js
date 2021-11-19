import { Link,useHistory } from 'react-router-dom'
import CheckoutProduct from '../Components/CheckoutProduct'
import { useStateValue } from '../ContextApi/Stateprovider'
import "./Payment.css"
import { totalPrice } from '../ContextApi/reducer'
import { db } from '../firebase'
import StripeCheckout from 'react-stripe-checkout'

function Payment() {

    const [{cart,user},dispatch] = useStateValue()
    const history = useHistory()

    const onToken = (token) => {
        console.log(token.card.name)
        if(user){
            db.collection('users').doc(user?.uid).collection('orders').doc(token.id).set({
                cart: cart,
                amount: totalPrice(cart).toFixed(2),
                created: new Date().toLocaleDateString(token.created) 
            })

            alert(`Payment successfully done\nYour transaction id is ${token.id}`)

            history.replace("/orders")
            dispatch({
                type:'EMPTY_CART'
            })
        }
        else{
            alert("Please Sign first to complete payment")
            history.replace("/")
        }
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <div className="payment_container_reviews">
                    <div className="payment_checkout">
                         <h1>Checkout&nbsp;(
                             <Link to="/checkout" className="payment_link">${cart?.length} items</Link>
                         )</h1>   
                    </div>
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                        
                        <div style={{width:'100%'}}>
                            {
                                cart?.map((cart)=>{
                                    return(
                                        <CheckoutProduct
                                            id={cart.id}
                                            image={cart.image}
                                            title={cart.title}
                                            price={cart.price}
                                            rating={cart.rating}
                                        />
                                    )
                                })
                            }
                        </div>    
                    </div>

                                    
                </div>

                <div className="payment_section">
                    <div className="payment_title_2">
                         <h3>Payment Method</h3>       
                    </div>

                    {
                        (user)?(
                            <div style={{display:"flex",flexDirection:'column',paddingLeft:"10px"}}>
                                <StripeCheckout
                                    stripeKey="pk_test_51JuY1pSEyeWTTVHU82xiyeyJUMW3IptVuVLHrzCSTHo7XEvdEmcfmKlqdbYPi5NzZiWVF1KpHuwlrEVSKCMFo08X00OdI0BaRA"
                                    label="Pay Now"
                                    billingAddress
                                    shippingAddress
                                    image="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-640x400.png"
                                    description={`Total for price is ${totalPrice(cart).toFixed(2)}`} //Price for user
                                    currency="USD"
                                    amount={totalPrice(cart).toFixed(2)*100} //Price for Stripe
                                    panelLabel="Buy Now"
                                    token={onToken}
                                >
                                    <button className="payment_buy_now_btn">Buy Now</button>
                                </StripeCheckout>

                                <div style={{marginTop:'10px',fontWeight:'bold'}}>
                                    <p>Test Card Number: 4242 4242 4242 4242</p>
                                    <p>Expiry Date: 05/2025</p>
                                    <p>CVV: 4242</p>
                                </div>
                            </div>
                        ):(
                        <h2>Signin first to proceed further</h2>
                        )
                    }  
                </div>
            </div>    
        </div>
    )
}

export default Payment
