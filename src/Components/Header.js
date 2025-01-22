import React from 'react'

function Header(props){
    return (
    <div>
        <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
            <img src="https://i.ibb.co/B3PdBST/cart.png" style={{"height":'40px'}}/>
        </div>
    </div>
    )
}

export default Header;