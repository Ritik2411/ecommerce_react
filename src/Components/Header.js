import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link,useHistory} from 'react-router-dom'
import { useStateValue } from '../ContextApi/Stateprovider';
import { auth } from '../firebase';

function Header(){
   const [{cart,user},dispatch] = useStateValue()
   const [search,setSearch] = useState("")
   const history = useHistory()
   
   const handleSignin = () => {
       console.log(user)
       if(user){
            auth.signOut()
       }
   }

    return(
        <div className="header">
            <Link to="/">        
                <img
                    src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-640x400.png"
                    className="header_logo"
                    alt=""
                />
            </Link>
        
            <div className="header_search">
                <input
                    type="text"
                    className="header_search_bar"
                    value={search}
                    onChange={e=>setSearch(e.target.value)}
                />

                <button className="header_search_btn" onClick={()=>{
                    history.push(`/search/${search}`)
                }}>
                    <SearchIcon className="header_search_icon"/>
                </button>
               
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLine_1">
                        {user?`Hello ${user.providerData[0].email}`:"Hello Guest"}
                    </span>
                    <Link to={!user && "/login"} className="header_optionLine_2">
                        <span onClick={handleSignin}>
                            {user?"Sign Out":"Sign In"}                 
                        </span>
                    </Link>
                </div>

                <div className={user?"header_option":null}>
                        {
                            user?(
                                <>
                                    <span className="header_optionLine_1">
                                        Returns
                                    </span>
                                    <Link to="/orders" style={{textDecoration:"none"}}>
                                        <span className="header_optionLine_2">
                                            & Orders
                                        </span>
                                    </Link>
                                </>
                            ):(null)
                        }
                            
                </div>

                <div className="header_option">
                    <span className="header_optionLine_1">
                        Your
                    </span>
                    <span className="header_optionLine_2">
                        Prime
                    </span>
                </div>

                <div className="header_option_cart">
                   <Link to="/checkout" style={{textDecoration:"none",color:"black"}}>
                       <ShoppingCartIcon/>
                        <span className="header_optionLine_2_cartCount">
                            {cart?.length}
                        </span>
                   </Link> 
                </div>
            </div>
        </div>
    )
}

export default Header