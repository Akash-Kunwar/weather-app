const request =require('request')

const url='https://api.darksky.net/forecast/2d573d48c9aa79a7cea64d7eeaaa30d5/37.8267,-122.4233?units=si'


request({url:url,json:true},function(error,response){

	// const data =JSON.parse(response.body)
	// console.log(data.currently)
	if(error){
          console.log('unable to connect to weather web service')
	}else if(response.body.error){
		console.log('unable to find location')
	}
	else{	
		console.log(response.body.daily['summary']+'It is '+response.body.currently.temperature+' out there '+response.body.currently.precipProbability +'% chances of Rain')
    }


})


const url1='https://api.mapbox.com/geocoding/v5/mapbox.places/12hi.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoiYWthc2gta3Vud2FyIiwiYSI6ImNrNWpiY2x5ODAxaDkzcmxiZ2d4Y2N4dGoifQ.boCOgGfvJCLl8F4hs2HkSg&limit=1'

request({url:url1,json:true},function(error,response){

	if(error){
		console.log('unable to connect to geoCoding web services')

	}
	else if(response.body.message){
		console.log('unable to find co-ordinates')
	}
	else if(response.body.features.length===0){
		console.log('Try with different city name!')

	}
	else{
			const lat=response.body.features[0].center[1]
	        const lon=response.body.features[0].center[0]
	        console.log(lat,lon)
	}

})