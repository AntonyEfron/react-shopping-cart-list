import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
   
    render() { 
        return <div className='' style={{alignItems: 'center'}}>
            <button className="btn btn-lg btn-outline-primary m-2" onClick={this.props.reset}>RESET</button>
            {this.props.counters.map(counter => (
            <Counter key={counter.id} 
             onDelete={this.props.onDelete} 
             count={counter} 
             onIncrement={this.props.onIncrement}> 
            </Counter>))}
        </div>;
    }
}
 
export default Counters;