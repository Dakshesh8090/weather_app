import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox({updateInfo}){

    let[city, setCity] = useState("")
    let[error, setError] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "20dda3f6e075bee32b509b0c7ed3863a"

    let getWeatherInfo = async () => {
        // eslint-disable-next-line no-useless-catch
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse)
            
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description
            }

            return result;
        } catch(error){
            throw error;
        }
        }


    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let handleSubmit = async (event) => {
    try {
        event.preventDefault();
        setError(false); 
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setCity(""); 
    } catch (error) {
        setError(true); 
    }
};


    
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                 <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                 <br></br>
                 <br></br>
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}