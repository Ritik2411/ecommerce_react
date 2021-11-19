import React from 'react'
import './Order.css'

function Order({order}) {

    return (
        <div className="order">
            <div className="order_container">
                <p style={{fontWeight:'bold'}}>Ordered on {order.data.created}</p>

                    {
                        order.data.cart?.map((data)=>(
                            <div className="order_details_1">
                                <img src={data.image} style={{maxHeight:'200px'}}/>
                                
                                <div className="order_details_2">
                                    <p>{data.title}</p>
                                    <p>${data.price}</p>
                                    <div>
                                        {
                                            Array(data.rating).fill().map(()=>{
                                                return(
                                                    <i className="material-icons star_icon">star</i>
                                                )
                                            })
                                        }
                                    </div>    
                                </div>
                            </div>
                        ))
                    }

                <p style={{textAlign:'right',fontWeight:"bold"}}>Total Amount: ${order.data.amount}</p>
            </div>
        </div>
    )
}

export default Order
