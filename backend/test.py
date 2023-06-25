from backend.main import *
from backend.mock import *
import pytest

def test_home():
    assert home() == {"message":"This is The Default Page"}

def test_get_restaurants_by_city():
    assert Get_restaurants_by_city("Tel Aviv") == [restaurant1]
    assert Get_restaurants_by_city("RamatGan") == []
    assert Get_restaurants_by_city("Ramat Gan") == [restaurant2]

def test_get_restaurants_by_type():
    assert Get_restaurants_by_type(1) == []
    assert Get_restaurants_by_type(2) == [restaurant1,restaurant2]
    with pytest.raises(TypeError):
        test_get_restaurants_by_type("aa")

def test_get_restaurants_by_dish_name():
    assert Get_restaurants_by_dish_name("Nuggets") == [restaurant1]
    assert Get_restaurants_by_dish_name("NO") == []

def test_place_order():
    assert Place_order(order1)=={"message":"We successfully got your order!"}
    with pytest.raises(TypeError):
        test_get_restaurants_by_type("aa")