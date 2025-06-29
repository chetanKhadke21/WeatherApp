import { useState, useEffect } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Button from '@mui/material/Button';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CloudOffIcon from '@mui/icons-material/CloudOff';

const WeatherInfo = ({weather, setWeather, loading}) => {


  const [theme, setTheme] = useState(false);
  
    function changeTheme(){
      setTheme((theme) => !theme);
      console.log(theme)
    }

    useEffect(() => {
      document.body.style.backgroundColor = theme ? " rgb(223, 243, 245)" : " rgb(226, 224, 233)"; 
    }, [theme])



  return (
    <div>
        <Card sx={{ maxWidth: 345 }} id='card'>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={weather.temp > 30 ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyfGVufDB8fDB8fHww" : (weather.temp > 18 && weather.temp <= 30) ? "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D" : "https://plus.unsplash.com/premium_photo-1669990950563-8b31d8ed237b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyc3xlbnwwfHwwfHx8MA%3D%3D"}
            alt="green iguana"
            />
            <CardContent>
                {
                  loading ?
                  <h1>Loading...</h1> :
                  <>
                    <Typography gutterBottom variant="h5" component="div">
                          {weather.city} {weather.temp > 30 ? <BeachAccessIcon/> : (weather.temp > 18 && weather.temp <= 30) ? <ThunderstormIcon/> : <AcUnitIcon/>}   
                    </Typography>
                    <Typography variant="div" sx={{ color: 'text.secondary' }}>
                          <p>Description : <b>{weather.description}</b></p>
                          <p>Temperature : <b>{weather.temp}&deg;C</b></p>
                          <p>Humidity : <b>{weather.humidity}</b></p>
                          <p>Minimum Temperature : <b>{weather.tempMin}&deg;C</b></p>
                          <p>Maximum Temperature : <b>{weather.tempMax}&deg;C</b></p>
                          <p>Feels Like : <b>{weather.feelsLike}&deg;C</b></p>    
                    </Typography>
                  </>
                }
            </CardContent>
        </CardActionArea>
        </Card>
        <br />
        <Button variant='contained' onClick={changeTheme}  startIcon={theme ? <CloudOffIcon/> : <CloudQueueIcon/>}>Change Theme</Button>
    </div>
  )
}

export default WeatherInfo