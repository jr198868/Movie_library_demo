from fastapi import FastAPI
from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
from server.routes.router import ResponseModel
from server.routes.router import router as rnaRouter
from server.database import retrieve_movie_rating
from server.database import retrieve_movie_user_tag
from server.database import retrieve_most_rating_movies
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.include_router(rnaRouter, tags=["rna"], prefix="/rna")


origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/movie_rating", response_description = "Movie rating data retrieved")
async def get_movie_rating_data():
    movie_title_data = await retrieve_movie_rating()
    if movie_title_data:
        return ResponseModel(movie_title_data, "Movie rating data retrieved successfully")
    return ResponseModel(movie_title_data, "Empty list returned")

@app.get("/movie_tag", response_description="Movie user data retrieved")
async def get_movie_user_tag():
     user_tag_data = await retrieve_movie_user_tag()
     if user_tag_data:
         return ResponseModel(user_tag_data, "Movie user data retrieved successfully")
     return ResponseModel(user_tag_data, "Empty list returned")


@app.get("/most_rating_movies", response_description="Most rating movies data retrieved successfully")
async def get_most_rating_movies():
    most_rating_movies_data = await retrieve_most_rating_movies()
    if most_rating_movies_data:
        return ResponseModel(most_rating_movies_data, "Most rating movies data retrieved successfully")
    return ResponseModel(most_rating_movies_data, "Empty list returned")


# @app.get("/tp53_gene/{tp53_gene_data}", response_description="tp53 gene data retrieved")
# async def get_tp53_gene():
#      gene_data = await retrieve_tp53_gene()
#      if gene_data:
#          return ResponseModel(gene_data, "tp53 gene data retrieved successfully")
#      return ResponseModel(gene_data, "Empty list returned")
