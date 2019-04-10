let express = require('express'),
    path = require('path'),
    request = require('request'),
    iplocation = require("iplocation").default,
    node_where = require('node-where'),
    nodejs_publicip = require('nodejs-publicip'),
    getIP = require('external-ip')();
;

server = express();
//Setting
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'View'));
server.use(express.static(path.join(__dirname, 'Publics')));

let weatherUrl = `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`;

// inside middleware handler
const publicIp = require('public-ip');
server.get('/', (req, response)=>{
    // nodejs_publicip





        // Get Location via public ip
        getIP((err, ip) => {
            if (err) {
                // every service in the list has failed
                console.log(`error: ${err}`);
                return;
            }
        console.log("IP: ", ip);

             iplocation(ip, [], (error, res) => {
                console.log("Result: ", res);
                weatherUrl = `https://samples.openweathermap.org/data/2.5/weather?lat=${res.latitude}&lon=${res.longitude}&appid=2646e764a56e406564fc68b866216316`;
                request(weatherUrl, function (errors, ress, body) {
                    console.log("body: ", body)
                    let weatherResult = JSON.parse(body);
                    console.log("URL: ", weatherResult);
                    // console.log();
                    let weather = {
                        temp: Math.ceil( (weatherResult.main.temp-273.15)),
                        wind: weatherResult.wind.speed,
                        clouds: weatherResult.clouds.all,
                        icon: weatherResult.weather[0].icon,
                        description: weatherResult.weather[0].description,
                        city: res.city
                
                
                    };
                    console.log("We: ", weather);
                    response.render('index', {weather: weather});
                
                 });//Wheather--
            });//Ip Location
         });//publicIp
  
   

    

});// Home page
// Port Listening
let port = process.port || 8071;
server.listen(port, ()=>console.log("Listening"))