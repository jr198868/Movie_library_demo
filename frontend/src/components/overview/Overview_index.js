import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import { BarChart, Line, Area, ComposedChart, Bar, CartesianGrid, Legend, XAxis, YAxis, Label, Tooltip } from 'recharts';


export default function Overview_index () {
const [moviemost, setMoviemost] = useState([])
const fetchData_moviemost = () => {
  fetch("http://localhost:8000/most_rating_movies")
    .then(response => {
      return response.json()
    })
    .then(data => {
        var res = []
        for (let i of data["data"][0]) {
          res.push(i)
          setMoviemost(res)
        }
    })
}

useEffect(() => {
    fetchData_moviemost()
}, [])



const moviemost_plot = []


for (const i of moviemost) {
    var tmp = {}
    tmp['Movie'] = i[0]
    tmp['Rating user']= i[2]
    tmp['Rating-user index']= i[3]
    moviemost_plot.push(tmp)
}

console.log(moviemost_plot)

return (
    <Box sx={{width: '100%', typography: 'body1' }}> 
    <h5> Top 50 highest rating movies with Rating-user index</h5> 
    <ComposedChart width={1600} height={250} data={moviemost_plot}>
        
            <XAxis dataKey="Movie" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="Rating user" barSize={20} fill="#413ea0" />
            <Area type="monotone" dataKey="Rating-user index" stroke="#F39C12" />
    </ComposedChart>
    </Box>
)
}
