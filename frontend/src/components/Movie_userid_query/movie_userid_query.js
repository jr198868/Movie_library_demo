import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Movieuseridquery from "./movie_userid_query.component";
import Mostfrequentuser from './most_frequent_user';


function Movie_user() {
  return (
    <div>
        <Mostfrequentuser />
        <Movieuseridquery />   
    </div>
  );
}

export default Movie_user;