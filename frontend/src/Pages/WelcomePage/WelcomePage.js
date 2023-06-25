
import { Button, ButtonGroup, CircularProgress, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Header } from "src/components/Header/Header"
import { choosingMethods } from "src/constants"
import './WelcomePage.css'
import foodLocation from '../../foodLocation.png'
import { ChoosingMethods } from "src/components/ChoosingMethod/CoosingMethodsAutocomplete"
import { useNavigate } from "react-router-dom"


export const WelcomePage = (props) => {
    const { initialData,setSearchFilter } = props;
    const navigate = useNavigate();
    const [choosingMethod, setChoosingMethod] = useState({ label: "", id: 0 });
    const [restaurantsType, setRestaurantsType] = useState(null);
    const [selectedValue,setSelectedValue]= useState('');
    const [dishes, setDishes] = useState(null);

    useEffect(() => {
        if (initialData) {
            const { restaurantTypes, dishes } = initialData;
            const filteredRestaurantTypes=restaurantTypes.map(x=> x.name);
            setRestaurantsType(filteredRestaurantTypes);
            setDishes(dishes)
        }
    }, [props]);

    const onSearchClick=()=>{
        setSearchFilter({id:choosingMethod.id,value:selectedValue})
        navigate("/restaurants");
    }

    return (
        <div>
            <Header />
            {dishes ? <div>
                <div className="body-container">
                    <div className="row">
                        <img style={{ height: '50px', width: '50px', margin: '0px 5px' }} src={foodLocation} alt="logo" />
                        <Typography className="body-header" variant="h3">Food delivery app</Typography>
                        <img style={{ height: '50px', width: '50px', margin: '0px 5px' }} src={foodLocation} alt="logo" />
                    </div>
                    <Typography style={{ marginBottom: '10px' }} variant="h5">Let us help you to choose.. :)</Typography>
                    <ButtonGroup variant="outlined" color="primary" aria-label="outlined primary button group">
                        {choosingMethods.map((method) => <Button  style={{  backgroundColor: choosingMethod===method ? '#009688' : '',color: choosingMethod===method ? 'whitesmoke' : ''}}  onClick={() => setChoosingMethod(method)}>{method.label}</Button>)}
                    </ButtonGroup>
                    <ChoosingMethods setSelectedValue={setSelectedValue} dishes={dishes} restaurantsType={restaurantsType} method={choosingMethod} />
                </div>
                <div className="footer">
                    <Button  style={{border: '1px solid'}} onClick={onSearchClick}>Search</Button>
                </div>
            </div> : <div className="body-container"> <Typography className="body-header" variant="h3">Please wait!</Typography><CircularProgress /></div>}
            
        </div>
    )
}