import React from 'react';
import './Business.css';


class Business extends React.Component {
    render() {
      return(
    <div className="Business">
    <div className="image-container">
      <img src={this.props.business.imagesrc} alt=''/>
    </div>
    <h2>{this.props.business.name}</h2>
    <div className="Business-information">
      <div className="Business-address">
    <p>{this.props.business.address}</p>
      <p>{this.props.business.address}</p>
    <p>{`${this.props.business.city} ${this.props.business.zipcode}`}</p>
      </div>
      <div className="Business-reviews">
    <h3>{this.props.business.category}</h3>
    <h3 className="rating">{this.props.business.rating} rating</h3>
    <p>{this.props.business.reviewCount} reviews</p>
      </div>
    </div>
  </div>
      );
    } // this is an 1 part of business object of 6.
}

export default Business;