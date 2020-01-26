import React from 'react';
import Header from './header';
import Movies from './movies';
import AddModal from "./Modal";
import './App.css';

 

class App extends React.Component{
  constructor(props){
  super(props)
  this.state={
    MoviesDescription:[
      {
        source: "https://media.senscritique.com/media/000004710747/source_big/Inception.jpg",
        title: " Inception",
        rating: 4,
        year: 2010
      },
    
      {
        source: "https://images-na.ssl-images-amazon.com/images/I/81nMSrJHrJL._AC_SY445_.jpg",
        title: " No escape",
        rating: 5,
        year: 2015
        
      },
      {
        source: "http://fr.web.img4.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/19/09/16/11/03/3523781.jpg",
        title: " Fractured",
        rating: 2,
        year: 2019
       
      },
      {
        source: "http://www.linflux.com/wp-content/uploads/2018/03/blade-runner-2049-affiche.jpg",
        title: " Blade Runner",
        rating: 3,
        year: 2017
        
      },
      {
        source: "http://fr.web.img2.acsta.net/r_1280_720/pictures/19/10/16/09/16/4845967.jpg",
        title: "Under Water",
        rating: 5,
        year: 2019
       
      },
      {
        source: "http://fr.web.img4.acsta.net/c_215_290/pictures/19/02/25/12/06/2908996.jpg",
        title: "The Lion King",
        rating: 4,
        year: 2019
       
      },
      
    ],
    keyword:"",
    rating: 1
  }
}
search = (keyword) =>{
  this.setState({
    keyword: keyword
  })
}
setRate = number =>{
  this.setState({
    rating: number
  })
}

addNewMovie = movie => {
  this.setState({MoviesDescription: this.state.MoviesDescription.concat(movie)})
}

  render()
  {return (
    <div className="App">
      <Header rating={this.state.rating} setRate={x => this.setRate(x)} search={x => this.search(x)} />
      <div className="movies-section">
          <Movies text={this.state.keyword} rating={this.state.rating} addNewMovie={x => this.addNewMovie(x)} data={this.state.MoviesDescription.filter(el => el.rating >= this.state.rating && el.title.toLowerCase().includes(this.state.keyword.toLowerCase().trim() ) )} /> 
          
         
        </div>
      
       
        
    </div>
  );}
}

export default App;
