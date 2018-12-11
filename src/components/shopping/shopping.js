import React,{Component} from 'react';
import data from '../../data.json';
import './shopping.css';
import Cart from '../cart/cart';
import { Link } from 'react-router-dom';
class Shopping extends Component {
    state ={
        cart: [],
        cartstatus: false,
        filtersize: []
    }
    addtocart(id){
      if(this.state.cart.includes(id) )  {
        alert("item already there") ;
      } 
      else {
        this.setState(prevstate => ({ cart: [...prevstate.cart, id] }));
        if(localStorage.getItem("items") === null)
        {   
            let item = this.state.cart;
            localStorage.setItem("items", JSON.stringify(item));
        }
        else {
            let items = JSON.parse(localStorage.getItem('items'));
            items.push(id);
            localStorage.setItem("items", JSON.stringify(items));
        }
      } 
        this.setState({cartstatus: true});
    }
    handleCart(){
        const assign = this.state.cartstatus ? false : true;
        this.setState({cartstatus: assign});
    }
    filtersizes(e){
        if(this.state.filtersize.includes(e.target.id))
        {
            let index = this.state.filtersize.indexOf(e.target.id);
            let arr = [...this.state.filtersize];
            arr.splice(index , 1);
            this.setState({filtersize: arr})
         }
        else {
        this.setState({filtersize:[...this.state.filtersize , e.target.id]});
        console.log(this.state.filtersize);
        }
    }
    render(){
        const dataa =  data.items.map(data => {
            if(this.state.filtersize.length <= 0){
                return (
                    <div className ="four-col" key ={data.id}>
                <div className ="image-wrap">
                <Link to = {{pathname: `/${data.id}`} } >
                  <img src = {data.imageurl} alt="shopping" />
               </Link>
                </div> 
                <div className="name-wrap">
                  <h3> {data.name}</h3> 
                  <h4> Cost: {data.cost} </h4>
                  <button className="add-cart" onClick ={() => this.addtocart(data.id)}> Add To Cart </button>
                </div>
                </div>
                    )
            }
            else {
                return (
                    this.state.filtersize.includes(data.size) ?
                    <div className ="four-col" key ={data.id}>
             
               <div className ="image-wrap">
                 
               <Link to = {{pathname: `/${data.id}`} } >
                  <img src = {data.imageurl} alt="shopping" />
               </Link>
                </div> 
                <div className="name-wrap">
                  <h3> {data.name}</h3> 
                  <h4> Cost: {data.cost} </h4>
                  <button className="add-cart" onClick ={() => this.addtocart(data.id)}> Add To Cart </button>
                </div>
                </div> : null
                    )
            }
        }    
    ); 
        return(
            <React.Fragment>
            <div className="container">
            <div className="filter-sizes">
                <div className={this.state.filtersize.includes("xl") ? "size active" : "size"} id="xl" onClick={this.filtersizes.bind(this)}>  xl </div>
                <div className={this.state.filtersize.includes("l") ? "size active" : "size"} id="l" onClick={this.filtersizes.bind(this)}>  l </div>
                <div className={this.state.filtersize.includes("m") ? "size active" : "size"} id="m" onClick={this.filtersizes.bind(this)}> m </div>
            </div>
            <h2 className="heading">React Shopping Cart Example</h2>
            <div className="cart-button" onClick = {this.handleCart.bind(this)}>
                {this.state.cartstatus ?  "Close Cart"  : "Go To cart"}
            </div>
                   {dataa}
                   
            </div>
            {this.state.cartstatus ?
            <Cart array={this.state.cart}/> 
            : null
            }
            
            </React.Fragment>
        )
    }
}
export default Shopping;