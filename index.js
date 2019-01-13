const fetch = require('node-fetch');

fetchWeather = async () => {
    /*fetch('https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((err) => {
        console.log(err);
    })*/
    const data = 
    await fetch('https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22')
    .then(response => response.json())
    .catch(err => console.log(err));
    console.log(data);  
}

const saySomething = (whatToSay) => console.log(whatToSay);
//setTimeout(() => saySomething("3 seconds passed"), 3000); // asynchronous
//saySomething('Bleh!'); // synchronous

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const failureCallback = () => console.log('Error!');
wait(3000).then(() => saySomething("3 seconds passed")).catch(failureCallback);