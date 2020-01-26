import React from "react";
import { render } from "@testing-library/react";
import uuid from "uuid";
import Rating from "./Rating";

class Header extends React.Component {
  constructor(props){
super(props);

}
 
  
  
render(){
  return (
    <div className="header">
      <div>
        <input
          className="movies-search"
          type="text"
          placeholder="Type movie name to search"
          onChange={e => this.props.search(e.target.value)
          }
         
        />
        <input className="button-search" type="button" value="Search" />
      </div>
      <div className="rating" >
        <span>Minimum rating</span>
        <Rating rating={this.props.rating} setRate={x => this.props.setRate(x)}/>
        
      </div>
      </div>
     
  )}
};

export default Header;
