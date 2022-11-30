import React, {Component} from 'react';

class Counter extends Component {

    render(){
        return <div className=''>      
            <span className={this.getBadgeColor()}>{this.props.count.value}</span>
            <button className={this.buttonColor()}  onClick={() =>this.props.onIncrement(this.props.count)}>{this.buttonText()}</button>
            <button className="btn btn-lg m-2 btn-danger" onClick={() =>this.props.onDelete(this.props.count.id)}>Delete</button>
            </div>;

    }
    // Button styles 
    getBadgeColor(){
        let clasess = "m-2 badge bg-";
        clasess += (this.props.count.value === 0) ? "danger" : "primary";
        return clasess;
       }
        buttonColor(){
            let classes = "btn btn-lg m-2 btn-outline-";
            if (this.props.count.value === 0){
                classes += "danger";
            } else{
                classes+="primary";
            }
            return classes;
        }
        buttonText(){
            const button = 'NONE';
            const button1 = 'SELECTED'
            if(this.props.count.value === 0) {
                return button;
            }else{
                return button1;
            }
            
        }

        
    
}
export default Counter;