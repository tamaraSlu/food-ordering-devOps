import { Autocomplete, TextField } from "@mui/material";
import { cities } from "src/constants";
import React from "react";

export const ChoosingMethods = (props) => {
    const { restaurantsType, dishes, method, setSelectedValue} = props;

    const options = {
        0: [],
        1: cities,
        2: restaurantsType,
        3: dishes
    }

    const labels = {
        0: "Please select ordering filter",
        1: "cities",
        2: "restaurant types",
        3: "dishes"
    }

    const onChange=(event,value)=>{
        if(method.id===1)
        {
            setSelectedValue(value.label)
        }
            
        else{
            setSelectedValue(value)
        }
    }
    

    return (
        <div style={{ margin: '20px 0px' }}>
            {method.id!==0?
            <Autocomplete
                onChange={onChange}
                key={method.id}
                autoComplete
                disablePortal
                id="combo-box-demo"
                options={options[method?.id]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label={`${labels[method.id]}`} />}
            />:<>{labels[method.id]}</>}
        </div>
    );
}