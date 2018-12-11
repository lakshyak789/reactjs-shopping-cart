import React from 'react';
import './cart.css';
import data from '../../data.json';
const Cart = (props) =>
{ 
    let lid = 0;
    let sum= 0;
    
    const listitems = data.items.map( data => (
        props.array.includes(data.id) ? 
            <frameElement>
                <div className="hidden"> {sum = data.cost +sum} </div> 
                <div className="item-id"> <h4>{lid= lid+1 }</h4>  </div> 
                <div className="itemname"> <h4>{data.name} </h4> </div> 
                <div className="itemcost"><h4> {data.cost}</h4></div>
                <div className="cart-image-wrap"> <img src={data.imageurl} alt="item"></img> </div> 
           </frameElement>  :  null
    ))
    return(
        <div className="cart-main">
            <h2>User Cart</h2> 
            <div className="item-wrap">
            <div className="item-id"> <h4>Item Number</h4> </div>
            <div className="itemname"> <h4>Item Name</h4> </div>
            <div className="itemcost"> <h4>Item Cost </h4></div>
            <div className="cart-image-wrap"><h4>Image</h4></div>
            {listitems}
            </div>
            <div className="total">
            <h2>Total: {sum}</h2>
            </div>
        </div>
    )
}

export default Cart;