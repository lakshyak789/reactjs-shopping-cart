import React,{Component} from 'react';
import Data from '../../data.json';
import './iteminfo.css';
class Iteminfo extends Component{
    
    render(){
        const itemid = this.props.match.params.dataid
        const movieinfo = Data.items.map(data =>{
            if(itemid.includes(data.id)) {
            return  (
                <div className="item-wrapp">                   <div className ="image-wrapper">
                      <img src={data.imageurl} alt ="item img" />
                    </div>
                    <div className ="item-info">
                        <div className="item-name">
                            <h1>Item Name :  {data.name}</h1>
                            <h6> Company : {data.company}</h6>
                        </div>
                        <div className ="cost">
                            <h2> MRP: {data.cost}</h2>
                        </div>
                    </div>                    
                    </div>
 
            )
          }
        })
        var total = 0;
        var stars =0;
        const itemreviews = Data.reviews.map(data => {
            if(itemid.includes(data.itemid)) {
                total = total +1;
                stars =stars + data.stars;
            return(
                <div className="reviews">
                   <h2>
                       {data.name}
                   </h2>
                    <h3>
                        {data.review}
                    </h3>
                    <h5>
                        Stars Given: {data.stars}
                    </h5>
                </div>
            )
            }
        })
        const totalreviews = parseFloat(stars / total).toFixed(1)
        return(
            <div className="content-wrapper">
                {movieinfo} 
                <div className ="review-wrap">
                <div className="stars"><h2>Total Average Ratings : {totalreviews}</h2></div>
                {itemreviews}
                </div>
            </div>
        )
    }
}
export default Iteminfo;