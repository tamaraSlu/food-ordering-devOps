from pydantic import BaseModel
from datetime import datetime
from backend.models.types import Currency,RestaurantType,PaymentMethod

class Address(BaseModel):
    city:str
    street:str
    # building
    street_number:int
    # coord: []
    latitude:float|None
    longtitude:float |None   


class Dish(BaseModel):
    name:str
    price:float
    currency:Currency
    

class Restaurant(BaseModel):
    name: str
    type:RestaurantType
    address:Address
    menu: list[Dish]

class CreditCardDetails(BaseModel):
    cardNumber:str
    expiredDate:datetime
    cvv:str

class Order(BaseModel):
    restaurantName:str
    dishes:list[Dish]
    paymentMethod:PaymentMethod
    paymentDetails:CreditCardDetails|None