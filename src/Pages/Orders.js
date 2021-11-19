import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../ContextApi/Stateprovider'
import { db } from '../firebase'
import Order from './Order'
import './Orders.css'
import Expire from '../Components/Expire'

function Orders() {

    const [{user},dispatch] = useStateValue()
    const [orders,setOrders] = useState([])
    const history = useHistory()

    useEffect(async()=>{
        if(user){
            await db.collection('users').doc(user?.uid).collection('orders').orderBy('created','desc').onSnapshot(snapshot=>(
                setOrders(snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data()
                })))
            ))
        }

        else{
            setOrders([])
            history.push("/")
        }
        
    },[])

    console.log(orders)
    return (
        <div className="orders">
            <h2>Orders</h2>
            {
                (orders.length>0)?(
                    <div className="orders_container">
                        {
                            
                            orders.map(order=>{
                                return(
                                    <Order order={order}/>
                                )
                            })
                        }
                    </div>
                ):(
                    <>
                    <h2 style={{textAlign:"center"}}>
                        No orders yet :(
                    </h2>
                    </>
                )    
            }
            
            
 
        </div>
    )
}

export default Orders
