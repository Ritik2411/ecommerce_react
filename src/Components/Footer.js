import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_components">
                <Link to="/" style={{textDecoration:'none',color:'black'}}>
                    <div className="image_div">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" height="50px" width="1000px"/>
                </div>    
                </Link>    
                    
                <h2 style={{marginTop:"10px"}}>Thank you for visiting!!!</h2>        
            </div>
        </div>
    )
}

export default Footer
