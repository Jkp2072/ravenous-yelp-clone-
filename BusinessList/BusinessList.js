import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';// import Buisness to make a list.

class BusinessList extends React.Component{
    render() {
        return(
        <div className="BusinessList">
            {
                this.props.businesses.map(business =>{
                    return <Business business={business} key={business.id}/> // call business and pass elements from array in app.js one by one respectively.
                })
            
            }
         </div>
        );
    }
}
export default BusinessList;

