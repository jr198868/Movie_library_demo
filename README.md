# Rayflix_movie_library

## About this project 🚀：
Front-end tech stack: React.js  
Back-end tech stack: FastAPI JupyterLab  
Database: MongoDB  

Frontend deployment: Netlify  
Backend deployment: Heroku

![alt text](https://github.com/jr198868/software_developer_salary_tool/blob/main/SDEsalarytool.jpg)


## Project Structure 🚀

```sh
Rayflix_movie_library
├── README.md
├── backend
│   ├── backend_components
│   │   ├── __init__.py
│   │   ├── main.py
│   │   └── server
│   │       ├── __pycache__
│   │       │   ├── app.cpython-38.pyc
│   │       │   └── database.cpython-38.pyc
│   │       ├── app.py
│   │       ├── database.py
│   │       ├── models
│   │       │   ├── __pycache__
│   │       │   │   └── model.cpython-38.pyc
│   │       │   └── model.py
│   │       └── routes
│   │           ├── __pycache__
│   │           │   └── router.cpython-38.pyc
│   │           └── router.py
│   └── requirements.txt
├── database
│   ├── most_rating_movies.csv
│   ├── movies_ratings_ratings.csv
│   └── movies_tags_tags.csv
├── frontend
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── index.html
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── components
│       │   ├── Movie_rating_query
│       │   │   ├── movie_query.component.js
│       │   │   ├── movie_query.css
│       │   │   └── movie_query.js
│       │   ├── Movie_userid_query
│       │   │   ├── most_frequent_user.js
│       │   │   ├── movie_userid_query.component.js
│       │   │   └── movie_userid_query.js
│       │   ├── assets
│       │   │   └── SDEsalarytool.jpeg
│       │   ├── header
│       │   │   ├── Navbar.css
│       │   │   └── Navbar.js
│       │   ├── overview
│       │   │   ├── Overview_index.js
│       │   │   ├── Overview_rating.js
│       │   │   └── Overview_user.js
│       │   └── sidebar
│       │       ├── Sidebar.css
│       │       └── Sidebar.js
│       ├── index.css
│       └── index.js
└── ml_latest_small_data
    ├── README.txt
    ├── data_cleaning.ipynb
    ├── links.csv
    ├── most_rating_movies.csv
    ├── movies.csv
    ├── movies_ratings.csv
    ├── movies_ratings_ratings.csv
    ├── movies_tags.csv
    ├── movies_tags_tags.csv
    ├── ratings.csv
    └── tags.csv


20 directories, 47 files
```

## Getting Started 🚀
### How to run it on a local computer 🚀

### Front-end:
```sh
$ git clone git@github.com:jr198868/Rayflix_movie_library.git  

$ cd Rayflix_movie_library/

$ npm install package.json

$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Back-end:
```sh
$ python3.9 -m venv venv
$ source venv/bin/activate
$ export PYTHONPATH=$PWD
$ pip install -r requirements.txt
```

Navigate to [http://localhost:8000] (http://localhost:8000) in your browser. 

## Acknowledgments 🚀
