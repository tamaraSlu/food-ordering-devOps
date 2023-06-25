import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { ResultsPage } from './Pages/ResultsPage/ResultsPage';
import { WelcomePage } from './Pages/WelcomePage/WelcomePage';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { getInitialData, getRestaurantsByCity, getRestaurantsByDish, getRestaurantsByType } from "src/network/requests"
import { useState, useEffect } from 'react';
import { OrderPage } from './Pages/OrderPage/OrderPage';
import { SuccessPage } from './Pages/SuccessPage/SuccessPage';

function App() {
  const [initialData, setInitialData] = useState(null);
  const [searchFilter,setSearchFilter]=useState({id:0,value:0});
  const [searchResults,setSearchResults]=useState(null);
  const [orderFrom,setOrderFrom]=useState(null);

  const requestForInitData = async () => {
    const res = await getInitialData();
    setInitialData(res)
  }

  const requestRestaurantsByType = async (type) => {
    const res = await getRestaurantsByType(type);
    setSearchResults(res);
  }

  const requestRestaurantsByCity = async (city) => {
    const res = await getRestaurantsByCity(city);
    setSearchResults(res);
  }

  const requestRestaurantsByDish = async (dishName) => {
    const res = await getRestaurantsByDish(dishName);
    setSearchResults(res);
  }

  useEffect(() => {
    requestForInitData();
  }, [])

  useEffect(() => {
    if(searchFilter.id===1)
    {
      requestRestaurantsByCity(searchFilter.value)
    }else if(searchFilter.id===2)
    {
      const restaurantType=initialData?.restaurantTypes.find((type)=>type.name===searchFilter.value);
      requestRestaurantsByType(restaurantType.index)
      
    }else if(searchFilter.id===3)
    {
      requestRestaurantsByDish(searchFilter.value)
    }
  }, [searchFilter])


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage setSearchFilter={setSearchFilter} initialData={initialData} />} />
            <Route path="/restaurants" element={<ResultsPage setOrderFrom={setOrderFrom} restaurantTypes={initialData?.restaurantTypes} searchResults={searchResults}/>} />
            <Route path="/order" element={<OrderPage restaurant={orderFrom} />} />
            <Route path="/success" element={<SuccessPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
