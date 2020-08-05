import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar'; // importing businesslist,searchbar components,react and css file.

import yelp from '../../util/yelp';

/*var business ={
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5, // the object business hard coded
reviewCount: 90
}*/

/*const businesses =[
  business,
  business,  // it is an array for 6 business for the whole page.so 1 page contains 6 buisness.
  business,
  business,
  business,
  business // hard coded.
]; */

class App extends React.Component {
  
// add a constructor state.
constructor(props){
  super(props);
  this.state={
    businesses : []
  };

  this.searchYelp= this.searchYelp.bind(this);
}

  searchYelp(term, location, sortBy){
    //console.log('searching yelp with'+ {term}+','+ {location} + ','+ {sortBy}+'.'); // search Yelp function 
    yelp.search(term, location, sortBy).then(businesses =>{
      this.setState({businesses : businesses});
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1> 
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList  businesses={this.state.businesses}/>
      </div>
    );
  }// rendering app calls searchbar,and businesslist with array as an argument.(to avoid writing 6 times the businesslist.)
}

export default App ;