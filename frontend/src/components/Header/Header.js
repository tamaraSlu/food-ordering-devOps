import React from 'react';
import './Header.css';
import deliveryLogo from '../../deliveryLogo.png'
import { Typography } from '@mui/material';

export const Header =(props)=>{
    const {title}=props;
    return (
    <div className="Header">
        <img style={{height:'80px',width:'85px',margin:'10px 0 10px 5px'}} src={deliveryLogo} alt="logo" />
        {title&&<Typography className="Title" variant='h3'>{title}</Typography>}
        <div style={{height:'80px',width:'85px'}}></div>
    </div>
    )
}