import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import { useState } from "react"
import Footer from "./Footer.jsx"

export default function WeatherApp () {
    const CPY_URL = "https://www.transparentpng.com/thumb/copyright-symbol/WdjyD0-copyright-symbol-images-png"

    const[weatherInfo , setWeatherInfo] = useState({
        city:  "Delhi",
        feelsLike:24.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        weather : "Haze"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style = {{textAlign : "center"}}> 
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            <Footer/>
        </div>
    )
}