import { CircularProgress, List, ListItem, Typography } from "@mui/material"
import { Header } from "src/components/Header/Header"
import { ResautantCard } from "src/components/ResautantCard/RestaurantCard"

export const ResultsPage = (props) => {
    const { searchResults,restaurantTypes,setOrderFrom } = props;

    const updatedRestaurant=(index,restaurant)=>{
        const restaurantType=restaurantTypes.find((type)=>type.index===restaurant.type);
        restaurant.type=restaurantType?.name;
        const grades=restaurant.grades.map((grade)=>{
            grade.date=new Date(grade.date).toDateString()
            return grade;
        })
        restaurant.grades=grades;
        return { id: index, ...restaurant }
    }

    return (
        <div>
            <Header title="Search Results" />
            {searchResults?.length>0?
                <div className="body-container">
                    <List>
                        {searchResults.map((result, index) => {
                            return  <ListItem><ResautantCard setOrderFrom={setOrderFrom}  restaurant={updatedRestaurant(index,result)} /></ListItem>
                        })}

                    </List>
                </div> : <div className="body-container">
                    <Typography className="body-header" variant="h3">{searchResults?.length===0?'No Results Found':'Please wait!'}</Typography>
                    {!searchResults&&<CircularProgress />}
                </div>}
        </div>
    )
}