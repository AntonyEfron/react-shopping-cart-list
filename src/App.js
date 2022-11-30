// import logo from './logo.svg';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = { 
    counters:[
        {id: 0,value:0},
        {id: 1,value:0},
        {id: 2,value:0},
        {id: 3,value:0 }
        
    ]
 };
 deleteHandler = (counterId) =>{
    const count = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: count});
 };
 handleIncrement = (con) =>{
    const duparray = [...this.state.counters];
    let index = duparray.indexOf(con);
    duparray[index].value++;
    this.setState({ duparray });    
 };
 restHandler = ()=>{
      const array = this.state.counters.map( c => {
        c.value=0
        return c;
       }); 
       this.setState({array});    
 };
 navcount = () =>{
  let number = this.state.counters.filter( n => n.value > 0).length;
  return number;
}
 render(){
  return (
    <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter( n => n.value > 0).length}/>
        <Counters
         counters= {this.state.counters}
         reset={this.restHandler}
         onIncrement={this.handleIncrement}
         onDelete={this.deleteHandler}/>
    </React.Fragment>    
  );
 }
}
export default App;
