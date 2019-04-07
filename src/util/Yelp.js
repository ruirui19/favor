const apiKey = 'geqc3CgaePa_15MVfOTZF3NyhH1SXV56Dfl4a4vk7JHytK5vWhrUukqaebXE2E1Mf-Wjq7M0PZc2b_x407a9mtPxkUNEYOsp0ZSqcDOz3GZwX5FhcipcbZiDIpVsXHYx';

const Yelp = {
	search(term, location, sortBy){
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
		{ headers: {
		    Authorization: `Bearer ${apiKey}` 
		  }
		}).then(response=>{
			return response.json();
		}).then(jsonResponse=>{
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business=>{
					return {
					  id: business.id,
					  imageSrc: business.image_url,
					  name:business.name,
					  address: business.location.address1,
					  city: business.location.city,
					  state: business.location.state,
					  zipCode: business.location.zip_code,
					  category: business.categories[0].title,
					  rating: business.rating,
					  reviewCount: business.review_count
					}
				});
			}
		});
	}
}

export default Yelp;