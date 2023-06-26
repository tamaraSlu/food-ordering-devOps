
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
# "mongodb+srv://clusterfoodordering.vbb1tnt.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority
conn_str = "mongodb+srv://food-ordering-devOps:LUrb0oCWj73XGUD1@clusterfoodordering.vbb1tnt.mongodb.net/?retryWrites=true&w=majority"


# conn_str = "mongodb+srv://food-ordering-devOps:a5f7f9f7-4be9-49af-8bc2-c8546d1926d3@clusterfoodordering.vbb1tnt.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(conn_str, server_api=ServerApi('1'), serverSelectionTimeoutMS=5000)
db =client["food_ordering_data"]
collection = db["restaurants"]


def get_collection_object():
    return collection

def get_all_dishes():
    menues = [];
    for menu in collection.find({},{'_id': 0,"menu":1}):
        for e in list(menu.values()):
            content=next(iter(next(iter(menu.values()))))
            menues.append(content['name'].lower())
    menues=list(set(menues))
    menues.sort()
    return menues

def get_restaurants_by_city(city):
    return list(collection.find({"address.city":city},{'_id': 0}))

def get_restaurants_by_type(type):
    return  list(collection.find({"type":type},{'_id': 0}))


def get_restaurants_by_dish(dish_name):
    return list(collection.find({"menu.name":dish_name},{'_id': 0}))
