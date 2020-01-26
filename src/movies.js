import React from 'react';
import AddModal from './Modal.js'
import Rating from './Rating.js';

const Movies = (props) => {
    return (<div className="container">
        {props.data.map(el => <li className="movies-bloc">
        <img className="movies-img" src={el.source}></img>
        <div  >
            <h2 className="movies-name" >{el.title}</h2>
            
            
        </div>
        <p  >{el.year}</p>
            <Rating  rating={el.rating} setRate={() => {}}/>
    </li>
    )}
    {(props.text === '' && props.rating === 1) && <button className="add-movie" > <AddModal addNewMovie={x => props.addNewMovie(x)}/></button> }
    </div>
    
    )

}


export default Movies;

