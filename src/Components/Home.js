import React from 'react'

function Home(props){
    console.warn("remove",props)
    return (
    <div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="image-wrapper item">
                <img src="https://i.ibb.co/Lpt5Zm6/phone.jpg" />
            </div>
            <div className="text-wrapper item">
                <span>I-Phone</span><br/>
                <span>Price : 10000.00</span>
            </div>
            <div className="btn-wrapper item">
                <button onClick={()=>
                    props.addToCartHandler({price:1000,name:'i-phone'})}>
                    Add to cart</button>
                    <button className="remove-btn-cart" onClick={()=>
                    props.removeToCartHandler({price:1000,name:'i-phone'})}>
                    Remove to cart</button>
            </div>
        </div>
    </div>
    )
}

export default Home;