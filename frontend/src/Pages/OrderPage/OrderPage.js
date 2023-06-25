import { Button, Card, CardActions, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import React, {  useState } from "react"
import { Header } from "src/components/Header/Header"
import { placeOrder } from "src/network/requests";
import { useNavigate } from 'react-router-dom';

export const OrderPage = (props) => {
    const { restaurant } = props;
    
    const navigate = useNavigate();
    const [order,setOrder]=useState({restaurantName:restaurant.name,dishes:[],paymentMethod:'1'});

    const handleCheck=(event,isChecked)=>{
        const dishes=order.dishes;
        let checkedId=event.target.id.slice(-1);
        if(isChecked)
        {
            dishes.push(restaurant.menu[checkedId].name);
        }
        else{
            var index = dishes.indexOf(restaurant.menu[checkedId].name);
            if (index !== -1) {
                dishes.splice(index, 1);
            }
        }
        const updatedOrder={...order,dishes:dishes}
        setOrder(updatedOrder);
        
    }

    const requestOrder = async () => {
        navigate("/success");
        const res = await placeOrder(order);
        
      }
    return (
        <div>
            <Header title={`Order From ${restaurant.name}`} />
            <div className="body-container">
                <Card id={`restaurant${restaurant.id}`} sx={{ minWidth: 500 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                            {restaurant.type}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {restaurant.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {restaurant.address.street}{restaurant.address.street_number}, {restaurant.address.city}
                        </Typography>
                        <FormGroup>
                            {restaurant.menu.map((item,index)=><FormControlLabel key={index} onChange={handleCheck} control={<Checkbox id={`checkbox-${index}`} />} label={`${item.name} • • • • • • • • • • • • • • • • ${item.price} ₪`}/>)}
                        </FormGroup>
                    </CardContent>
                    <CardActions>
                        <Button onClick={requestOrder} size="small">Order</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}