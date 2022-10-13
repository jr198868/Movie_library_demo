import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import { BarChart, Bar, CartesianGrid, Legend, XAxis, YAxis, Label, Tooltip } from 'recharts';


export default function Most_frequent_user() {


  const [frequser, setFrequser] = useState([])
  const fetchData_frequser = () => {
    fetch("http://localhost:8000/movie_tag")
      .then(response => {
        return response.json()
      })
      .then(data => {
          var res = []
          for (let i of data["data"][0]) {
            res.push(i)
            setFrequser(res)
          }
      })
  }

  useEffect(() => {
    fetchData_frequser()
  }, [])

  const frequser_plot = []
  const frequser_dict = new Object()

  for (const i of frequser) {
    if ('Uid' + i[0].toString() in frequser_dict) {
      frequser_dict['Uid' + i[0].toString()] += 1
    } 
    else
    {
      frequser_dict['Uid' + i[0].toString()] = 1
    }
  }

  for (const [key, value] of Object.entries(frequser_dict)) {
      var tmp = {}
      tmp['user'] = key
      tmp['User ID']= value
      frequser_plot.push(tmp)
  }
  

  return (       
    <Box sx={{width: '100%', typography: 'body1' }}> 
      <h5> Most frequent user of writing movie rating views</h5>                    
      <BarChart width={1600} height={300} data={frequser_plot} >
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="user" style={{ marginBottom: "10px" }} />
          <YAxis>
            <Label angle={270} position='left' offset={-1} style={{fontSize: '1.0rem', fontWeight: '400', textAnchor: 'middle' }}>
                Number of writing rating views
            </Label>
          </YAxis>
          <Legend />
        <Tooltip />
        <Bar dataKey="User ID" fill="#8884d8" />
      </BarChart>
      <br />
    </Box>
    
  )
}