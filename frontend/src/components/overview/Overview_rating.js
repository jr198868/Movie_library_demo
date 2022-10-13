import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import { BarChart, Line, Area, ComposedChart, Bar, CartesianGrid, Legend, XAxis, YAxis, Label, Tooltip } from 'recharts';


export default function Overview_rating () {
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
    tmp['Average rating']= i[1]
    tmp['rating user']= i[2]
    moviemost_plot.push(tmp)
}

console.log(moviemost_plot)

return (
    <Box sx={{width: '100%', typography: 'body1' }}> 
    <h5> Most frequent user of writing movie rating views</h5> 
    <ComposedChart width={1600} height={250} data={moviemost_plot}>
        
            <XAxis dataKey="Movie" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="Average rating" barSize={20} fill="#DC3545" />
            <Line type="monotone" dataKey="Average rating" stroke="#413ea0" />
    </ComposedChart>
    </Box>
)
}
