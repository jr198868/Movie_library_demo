from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from server.database import (
    retrieve_movie_rating,
    retrieve_movie_user_tag,
    retrieve_most_rating_movies,


)
from server.models.model import (
    ErrorResponseModel,
    ResponseModel,
)

router = APIRouter()