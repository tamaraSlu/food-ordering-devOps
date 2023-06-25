from enum import Enum

class RestaurantType(Enum):
    vegan = 1
    american = 2
    home_food = 3
    italian = 4
    bar = 5
    mediterranean = 6
    bistro=7
    chef=8

class Currency(Enum):
    ils = 1
    dolar = 2
    euro = 3

class PaymentMethod(Enum):
    cache=1
    creditCard=2