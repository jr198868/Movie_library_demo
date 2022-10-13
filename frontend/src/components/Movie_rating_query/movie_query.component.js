import MUIDataTable from "mui-datatables";
import React, {useState, useEffect} from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

export default function Movie_query() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    { name: "Movie Title", options: { filterOptions: { fullWidth: true } } },
    "Genres of Movie",
    "Average Rating"
  ];


  const [value, setValue] = React.useState('1')

  const [movierating, setMovierating] = useState([])
  const fetchData_movierating = () => {
    fetch("http://localhost:8000/movie_rating")
      .then(response => {
        return response.json()
      })
      .then(data => {
          var res = []
          for (let i of data["data"][0]) {
            res.push(i.slice(0, 3))
            setMovierating(res)
          }
      })
  }

  useEffect(() => {
    fetchData_movierating()
  }, [])

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };

  const data = movierating;

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Responsive Option
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={responsive}
            style={{ width: "200px", marginBottom: "10px", marginLeft: 15, marginRight: 15 }}
            onChange={(e) => setResponsive(e.target.value)}
          >
            <MenuItem value={"vertical"}>vertical</MenuItem>
            <MenuItem value={"standard"}>standard</MenuItem>
            <MenuItem value={"simple"}>simple</MenuItem>

            <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
            <MenuItem value={"scrollMaxHeight"}>
              scrollMaxHeight (deprecated)
            </MenuItem>
            <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Table Body Height
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tableBodyHeight}
            style={{ width: "200px", marginBottom: "10px", marginLeft: 15, marginRight: 15 }}
            onChange={(e) => setTableBodyHeight(e.target.value)}
          >
            <MenuItem value={""}>[blank]</MenuItem>
            <MenuItem value={"400px"}>400px</MenuItem>
            <MenuItem value={"800px"}>800px</MenuItem>
            <MenuItem value={"100%"}>100%</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Max Table Height
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tableBodyMaxHeight}
            style={{ width: "200px", marginBottom: "10px", marginLeft: 15, marginRight: 15 }}
            onChange={(e) => setTableBodyMaxHeight(e.target.value)}
          >
            <MenuItem value={""}>[blank]</MenuItem>
            <MenuItem value={"400px"}>400px</MenuItem>
            <MenuItem value={"800px"}>800px</MenuItem>
            <MenuItem value={"100%"}>100%</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Search Button</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={searchBtn}
            style={{ width: "200px", marginBottom: "10px", marginLeft: 15, marginRight: 15 }}
            onChange={(e) => setSearchBtn(e.target.value)}
          >
            <MenuItem value={"true"}>{"true"}</MenuItem>
            <MenuItem value={"false"}>{"false"}</MenuItem>
            <MenuItem value={"disabled"}>disabled</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Download Button</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={downloadBtn}
            style={{ width: "200px", marginBottom: "10px", marginLeft: 15, marginRight: 15 }}
            onChange={(e) => setDownloadBtn(e.target.value)}
          >
            <MenuItem value={"true"}>{"true"}</MenuItem>
            <MenuItem value={"false"}>{"false"}</MenuItem>
            <MenuItem value={"disabled"}>disabled</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Print Button</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={printBtn}
            style={{ width: "200px", marginLeft: 15, marginBottom: "10px" }}
            onChange={(e) => setPrintBtn(e.target.value)}
          >
            <MenuItem value={"true"}>{"true"}</MenuItem>
            <MenuItem value={"false"}>{"false"}</MenuItem>
            <MenuItem value={"disabled"}>disabled</MenuItem>
          </Select>
        </FormControl>
        <MUIDataTable
          title={"GroupLens Movie Database"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}
