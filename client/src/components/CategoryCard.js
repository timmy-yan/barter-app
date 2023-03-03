import React from "react";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CategoryCard({ c, id, imageUrl }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/categories/${id}/items`);
  };

  return (
    <Card sx={{ display: 'inline-block', height: 599, padding: '46px', justifyContent: 'center', gap: '10px', transform: 'scale(0.6)', width: 545, marginTop: '-110px' }}>
      <CardMedia
        component="img"
        height="410"
        image={imageUrl}
        alt="category"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {c.name}
        </Typography>
        <Button onClick={handleClick} to = {`${id}`}>
          Press
        </Button>
      </CardContent>
    </Card>
  )
}

export default CategoryCard;
