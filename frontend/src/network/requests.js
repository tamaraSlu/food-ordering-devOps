import axios from "axios"

export const getInitialData=async ()=>{
    return await (await axios.get("http://127.0.0.1:8000")).data;
}

export const getRestaurantsByType=async (type)=>{
    return await (await axios.get(`http://127.0.0.1:8000/restaurants/get-by-type?restaurant_type=${type}`)).data;
}

export const getRestaurantsByCity=async (city)=>{
    return await (await axios.get(`http://127.0.0.1:8000/restaurants/get-by-city?city=${city}`)).data;
}

export const getRestaurantsByDish=async (dishName)=>{
    return await (await axios.get(`http://127.0.0.1:8000/restaurants/get-by-dish?dish_name=${dishName}`)).data;
}

export const placeOrder=async (order)=>{
    return (await axios.post(`http://127.0.0.1:8000/submit/place-order`,{order})).data;
}