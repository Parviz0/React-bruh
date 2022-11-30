import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = ({ id, title, img, url, deleteTask }) => {
	return (
		<Card sx={{ maxWidth: 345 }} key={id}>
			<CardMedia
				component="img"
				height="140"
				image={img}
				alt="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with
					over 6,000 species, ranging across all continents except
					Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button 
                    onClick={e => deleteTask(id)}
                    size="small" 
                    sx={{ background: "red", color: "white" }}
                >
					delete
				</Button>
					<Button className="bruh" size="small">EDIT</Button>
			</CardActions>
		</Card>
	);
};

export default Item;
