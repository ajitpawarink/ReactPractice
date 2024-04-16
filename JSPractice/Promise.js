const myPromise = new Promise((success,reject)=>{
	const num = Math.random();
	if( num >= 0.5 ){
		success( num );
	} else {
		reject( new Error('Number '+ num +' is less than 0.5') );
	}
});

myPromise.then(
	(randomNumber)=>{
		console.log('Generated random number is', randomNumber );
	}
).catch( 
	(error)=>{
		console.log('Error Happened', error );
	}
);