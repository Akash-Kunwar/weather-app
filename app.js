const request =require('request')
const geocode =require('./geocode.js')
const forecast=require('./forecast.js')


const location =process.argv[2]

if(location){
	geocode(location,function(error,response){
	if(error){

		console.log('error',error)

	}else{

		forecast(response.latitutde,response.longitude, (error, data) => {

			if(error){

				console.log(error)

			}
			else{
				console.log('Location: ',response.location,' Data: ',data)
			}
  })

	}
})
}
else{
	console.log('Please Provide A Location')
}




	