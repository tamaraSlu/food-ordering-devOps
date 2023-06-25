import { List, ListItem, ListItemText } from "@mui/material";

export const RecommendationsList = (props) => {
    const {recommendations}=props;
    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {recommendations.map((recommendation)=><ListItem>
                    <ListItemText primary={`${recommendation.grade} ${recommendation.score}`} secondary={recommendation.date} />
                </ListItem>)}
                
            </List>
        </div >
    );
}