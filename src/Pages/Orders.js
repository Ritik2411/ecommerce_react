import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../ContextApi/Stateprovider'
import { db } from '../firebase'
import Order from './Order'
import './Orders.css'
import ClipLoader from 'react-spinners/ClipLoader'

function Orders() {

    const [{user},dispatch] = useStateValue()
    const [loading,setLoading] = useState([false])
    const [orders,setOrders] = useState([])
    const history = useHistory()
    
    useEffect(async()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);

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
                loading?(
                    <div style={{textAlign:'center'}}>
                        <ClipLoader css="cliploader" size={30} color={"#123abc"} loading={loading}/>
                    </div>):(
                    (orders.length)>0?(
                        <>
                            <div className="orders_container">
                            {
                                
                                orders.map(order=>{
                                    return(
                                        <Order order={order}/>
                                    )
                                })
                            }
                            </div>
                        </>
                        ):(
                            <h2 style={{textAlign:"center"}}>
                                No orders yet :(
                            </h2>
                        )
                )
            }
            {/*{
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
            }*/}
            
            
 
        </div>
    )
}

export default Orders
