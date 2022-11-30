import React, { Component } from 'react';

class Navbar extends Component {
     
    render() { 
        return (
            <nav class="navbar bg-light">
                <div class="container-fluid">       
                    <a class="navbar-brand" href="#">
                   <b> ITEMS SELECTED</b>
                    <span className={this.getBadgeColor()}>{this.props.totalCounters}</span></a>
                </div>
            </nav>
        );
    }
    getBadgeColor(){
        let clasess = "m-2 badge bg-";
        if (this.props.totalCounters === 0) {
            clasess = clasess + "danger";
        } else {
            clasess = clasess + "primary";
        }
        // clasess += (this.props.totalCounters === 0) ? "danger" : "primary";
        return clasess;
       }
}
 
export default Navbar;