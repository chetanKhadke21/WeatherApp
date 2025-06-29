import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({city, weather, setCity, setWeather, searchWeather}) => {

    function handleChange(event){
        setCity(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        setCity("");
    }

  return (
    <div>
        <h2>Skynote</h2>

        <form onSubmit={handleSubmit}>
            <Box
            component="div"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            name='city'
            >
                <TextField id="outlined-basic" label="City Name" variant="outlined" onChange={handleChange} value={city}/>
            </Box>

            <Button variant="contained" startIcon={<SearchIcon />} type='submit' onClick={searchWeather}>Search</Button>
        </form>
    </div>
  )
}

export default SearchBar
