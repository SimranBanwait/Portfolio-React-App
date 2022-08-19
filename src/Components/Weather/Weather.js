import React , {useState,useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import './Weather.css';

import weatherIcon from '../../Photos/ICONS/weather.png';


const Weather = () => {

    const [dCity,setDCity]= useState("");
    const [city, setCity] = useState("Chandigarh");
    const [tapman, setTapman] = useState(""); 
    const [state,setState]= useState("");
    const [country,setCountry]= useState("");
    const [status,setStatus]= useState(""); 
    const [statusIcon,setStatusIcon]= useState(""); 
    const [wind,setWind]= useState(""); 
    const [visibility,setVsibility]= useState("");
    const [humid,setHumid]= useState("");
    const [degree,setDegree]= useState("");
    const [direction,setDirection]= useState("");

    
    const url = ( `http://api.weatherapi.com/v1/current.json?key=1fe0cd30e73248f584c114450221605&q=${city}&aqi=yes` )
    const getTemperature = async() => {
        await axios.get(url)
            .then((response) => {
                // console.log(response.data);
                setDCity(response.data.location.name);
                setState(response.data.location.region);
                setCountry(response.data.location.country);
                setStatus(response.data.current.condition.text);
                setStatusIcon(response.data.current.condition.icon);
                setTapman(Math.floor(response.data.current.temp_c));
                setWind(response.data.current.wind_kph);
                setVsibility(response.data.current.vis_km);
                setHumid(response.data.current.humidity);
                setDegree(response.data.current.wind_degree);
                setDirection(response.data.current.wind_dir);


            }).catch((err) => {
                console.log(err, "Sorry Can't Find");
                setCity("Not Found");
                setState("State Not Available")
                setStatus("Not Available");
                setTapman("0");
                setWind("0");
                setHumid("0");
                setVsibility("0");
            })
    }










    //the gode for button to press and get location========================================//

    // const getLocation=()=>{

    //     const success=(e)=>{
    //         const lati=e.coords.latitude;
    //         const longi=e.coords.longitude;
    //         console.log(lati);
    //         console.log(longi);

    //         const url2 = (`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=metric&appid=ff543258a19d0edb482ce573e3c6ba6c&lang=en`);
            
    //         const getTemperature2= async()=>{
    //             await axios.get(url2)
    //             .then((res)=>{
    //                 console.log(res.data.main.temp);
    //                 setCity(res.data.name);
    //                 setStatus(res.data.weather[0].main);
    //                 setTapman(res.data.main.temp);
    //                 setWind(res.data.wind.speed);
    //                 setHumid(res.data.main.humidity);
    //             })
    //             .then((err)=>{
    //                 // console.log(err, "Sorry Nigga");
    //                 setCity("City not Found");
    //                 setStatus("Not Available");
    //                 setTapman("0");
    //                 setWind("0");
    //                 setHumid("0");
    //             })
    //         }

    //         return getTemperature2();
   
    //     }
    //     const error=()=>{
    //         return alert("Sorry Can't get the location access"); 
    //     }
    //     navigator.geolocation.getCurrentPosition(success,error);
    // }










    // all about the date and time ====================================== //

    // let localTime = () => {
    //     const now = new Date();

    //     const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //     const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //     let fetchDay = dayArray[now.getDay()];
    //     let fetchMonth = monthArray[now.getMonth()];
    //     let fetchDate = now.getDate();
    //     let fetchHour = now.getHours();
    //     let fetchMinute = now.getMinutes();

    //     let period = "AM";
    //     if (fetchHour >= 11) {
    //         period = "PM";
    //     }
    //     if (fetchHour > 12) {
    //         fetchHour = fetchHour - 12;
    //     }
    //     if (fetchHour < 10) {
    //         fetchHour = `0${fetchHour}`;
    //     }
    //     if (fetchMinute < 10) {
    //         fetchMinute = `0${fetchMinute}`;
    //     }

    //     return `${fetchDay} | ${fetchMonth}, ${fetchDate} | ${fetchHour}:${fetchMinute} ${period} `;
    // }

    
    



    // icons change according to thew weather status with this for the older version
    // function condition (){
    //     if (status==="Clear"){
    //         return "fa-solid fa-sun indicator sun";
    //     }
    //     else if(status==="Clouds"){
    //         return "fa-solid fa-cloud indicator ";
    //     }
    //     else if(status==="Haze"){
    //         return "fa-solid fa-cloud-sun indicator ";
    //     }
    //     else if (status === "Rain") {
    //         return "fa-solid fa-cloud-rain indicator "; 
    //     }
    //     else if(status==="Mist"){
    //         return "fa-solid fa-wind indicator"; 
    //     }
    //     else if (status ==="Thunderstorm"){
    //         return "fa-solid fa-cloud-bolt indicator"
    //     }
    //     else if (status === "Drizzle") {
    //         return "fa-solid fa-cloud-rain indicator"
    //     }
    //     else if (status === "Dust") {
    //         return "fa-solid fa-smog indicator "; 
    //     }
    //     else if (status === "Fog") {
    //         return "fa-solid fa-smog indicator ";
    //     }
    //     else if (status === "Smoke") {
    //         return "fa-solid fa-wind indicator ";
    //     }
    //     else{
    //         return "fa-solid fa-spinner indicator"; 
    //     }
    // }



    // when the page loads it runs this and provides the intial view
    useEffect( ()=>{
        getTemperature();
    },[ ]);


    // enter button funtionality
    const enterPress = (event) => {
        if (event.key === "Enter") {
            getTemperature();
        }
    }




    return (
        <>
            <section className='weather-container'> 



                <div className="weather-top">
                    <div className="weather-top-left">
                        <img src={weatherIcon} alt="weatherIcon"/>
                        <h1>Accu. Weather</h1>
                    </div>

                    <div className="weather-top-right">
                        <input 
                        type="search" 
                        placeholder='Search City...'
                        onChange={(e) => { setCity(e.target.value) }}
                        onKeyPress={enterPress}
                        />
                        <button onClick={getTemperature}>Search</button>
                    </div>
                </div>





                <div className="weather-middle">    
                    <div className="weather-middle-content">

                        <div className="weather-temperature">                    
                            <h1>{tapman}°c</h1> 
                        </div>
                        <div className="weather-location">
                            <h3>{dCity} <img src={statusIcon} alt="Icon" /></h3>
                            <p>{status} </p>
                            <p>{moment().format('Do')} {moment().format('MMMM')}  |  {moment().format('YYYY')}  |  {moment().format('h:mm a')}</p>
                            <p>{state} | {country}</p>
                        </div>
                    </div>
                </div>





                <div className="weather-bottom">

                    <div className="weather-humidity">
                        <h3>{humid}<span>%</span></h3>
                        <p>Humidity</p>
                    </div>

                    <div className="weather-windspeed">
                        <h3>{wind} <span>km/h</span></h3> 
                        <p>Wind Speed</p>
                    </div>

                    <div className="weather-visibility">
                        <h3>{visibility} <span>km</span></h3>
                        <p>Visibility</p>
                    </div>


                    <div className="weather-condition">
                        <h3>{degree}°</h3>
                        <p>{direction}</p>
                    </div>

                </div>


                
            </section>
            








        </>
    )
}

export default Weather;