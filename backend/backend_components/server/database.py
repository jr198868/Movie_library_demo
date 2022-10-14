import motor.motor_asyncio
from bson.objectid import ObjectId


#MONGO_DETAILS = "mongodb://localhost:27017"
MONGO_DETAILS = "mongodb+srv://jr198868:jr198868@cluster0.fu78m.mongodb.net/Rayflix_movie_library"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.Rayflix_movie_library
movie_rating_collection = database.get_collection("movies_ratings_data")
movie_tag_collection = database.get_collection("movies_tags_data")
most_rating_movies_collection = database.get_collection("most_rating_movies_data")


async def retrieve_movie_rating():
    res = []
    async for i in movie_rating_collection.find():
        if len(i["rating"].split(',')) == 1:
            rating_sum = (float(i["rating"].split(',')[0].split('[')[1].split(']')[0]))
            tmp = [i["title"], i["genres"], round(rating_sum, 2), i["rating"]]
            res.append(tmp)

        else:
            rating_1st = float(i["rating"].split(',')[0].split('[')[1])
            rating_last = float(i["rating"].split(',')[-1].split(']')[0])
            rating_middle = [float(j) for j in i["rating"].split(',')[1:-1]]
            rating_sum = sum([rating_1st] + rating_middle +[rating_last])
            tmp = [i["title"], i["genres"], round(rating_sum/len([rating_1st] + rating_middle +[rating_last]), 2), i["rating"]]
            res.append(tmp)
        
    return res


async def retrieve_movie_user_tag():
    res = []
    async for i in movie_tag_collection.find():   
        tmp = [str(i["userId"]), i["title"], i["tag"]]
        res.append(tmp)
    return res


async def retrieve_most_rating_movies():
    res = []
    async for i in most_rating_movies_collection.find():
        res.append([i["title"], i["rating"], i["rating users"], i["rating-user index"]])
    return res
