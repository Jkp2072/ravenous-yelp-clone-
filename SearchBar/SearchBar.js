import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        term :'',
        location :'', // state is like prop with 3 arguments for a particular search(object).
        sortBy: 'best_match'
      };

      this.sortByOptions = {
        'Best Match':'best_match',   // types of sort class.
        'Highest Rated':'rating',
        'Most Reviewed':'review_count'
    }; 
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this); // binding method as used as props int the methods given below.

    } 
    getSortByClass(sortByOption){
      if(this.state.sortBy === sortByOption){
        return 'active'; //to know whic sorting method or class is active at the moment.
      }
      return '';
    } 
    handleSortByChange(sortByOption){
      this.setState({sortBy: sortByOption}); // to decide the method by which sorting method is required(3 are there.)
    }
    
    handleTermChange(event){
      this.setState({term : event.target.value});
    }

    handleLocationChange(event){
      this.setState({location : event.target.value}); // setting the value typed int he text box,so .target.value used.
    }

    handleSearch(event){
      this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy); // passing arguments to the searchYelp function created in app.js.
      event.preventDefault(); // to prevent default clicking of the link.
    }
  
  
  renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            var sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOption)}  >{sortByOption}</li>
        });
    } // to render sort by optipns for sorting on clicking.

    render(){
      return(
        <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
     {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
    <input placeholder="Where?"  onChange={this.handleLocationChange}/>
  </div>
  <div className="SearchBar-submit">
    <a onClick={this.handleSearch}>Let's Go</a>
  </div>
</div>
      );
    }// after using search bar this shoulde be there.
}

export default SearchBar;

