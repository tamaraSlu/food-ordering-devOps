import React,{ useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { RecommendationsList } from '../RecommendationsList/RecommendationsList';
import { useNavigate } from 'react-router-dom';

export const ResautantCard = (props) => {
  const navigate = useNavigate();
  const { restaurant,setOrderFrom } = props;
const [isOpenPopover,setIsOpenPopover]=useState(false);
  const handleRecommendationClick=()=>{
    setIsOpenPopover(true);
  }

  const handleOrderClick=()=>{
    setOrderFrom(restaurant);
    navigate("/order");
  }

  return (
    <Card id={`restaurant${restaurant.id}`} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {restaurant.type}
        </Typography>
        <Typography variant="h5" component="div">
          {restaurant.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {restaurant.address.street}{restaurant.address.street_number}, {restaurant.address.city}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOrderClick}>Order Now</Button>
        <Button  onClick={handleRecommendationClick} size="small">See Recommendations</Button>
        <Popover id={restaurant.id}
          open={isOpenPopover}
          anchorEl={document.getElementById(`restaurant${restaurant.id}`)}
          onClose={()=>setIsOpenPopover(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          >
            <Typography sx={{ p: 2 }}><RecommendationsList recommendations={restaurant.grades}/></Typography>
          </Popover>
      
      </CardActions>
    </Card>
  );
}