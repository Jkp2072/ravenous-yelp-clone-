const apikey='';

const yelp ={
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
              Authorization:  `Bearer ${apiKey}`  // headers is added which has authorization ,which we need to provide to the browser.
            }
        }).then(response =>{
            return response.json();
        }).then(jsonResponse =>{
            if(jsonResponse.business){
                return jsonResponse.business.map(business =>({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,   // if any of the jsonresponse.buisness exists then we will get all info regarding it in these part.
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default yelp;