import React, { Component } from 'react';

class Rating extends Component{
    constructor(props){
        super(props)
       
    }

    render(){
        let arr = [];
        for (let i = 0; i <= 4; i++) {
            if(this.props.rating > i){
                arr.push(<i onClick={() => this.props.setRate(i + 1)} class="fas fa-star"></i>)
            }else{
                arr.push(<i onClick={() => this.props.setRate(i + 1)} class="far fa-star"></i>) 
            }
        }
        return(
            <div >
                {arr}
            </div>
        )
    }
}

export default Rating;