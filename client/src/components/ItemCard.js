import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ItemCard({ i, id, onItemUpdate }) {
  const [editing, setEditing] = React.useState(false);
  const [name, setName] = React.useState(i.name);
  const [image_url, setUrl] = React.useState(i.image_url);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setName(i.name);
    setUrl(i.image_url);
  };

  const handleDeleteClick = async () => {
    const response = await fetch(`/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      onItemUpdate(); // call the callback function to notify the parent component that an item has been updated
    } else {
      // handle error
    }
  };
  
  const handleSaveClick = async () => {
    const response = await fetch(`/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: { name, image_url } }),
    });

    if (response.ok) {
      setEditing(false);
      onItemUpdate(); // call the callback function to notify the parent component that an item has been updated
    } else {
      // handle error
    }
  };
  
  return (
    <Card sx={{ display: 'inline-block', height: 599, padding: '46px', justifyContent: 'center', gap: '16px', transform: 'scale(0.6)', width: 545, marginTop: '-120px' }}>
      <CardMedia component="img" alt="green iguana" height="340" image={i.image_url} />
      <CardContent>
      {editing ? (
          <>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "24px" }}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} sx={{ fontSize: "24px", width: "300px" }} />
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "24px" }}>
              <input type="text" value={image_url} onChange={(e) => setUrl(e.target.value)} sx={{ fontSize: "24px", width: "300px" }} />
            </Typography>
          </>
        ) : (
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "24px" }}>
            {i.name}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {editing ? (
          <>
            <Button size="big" onClick={handleSaveClick}>
              Save
            </Button>
            <Button size="big" onClick={handleCancelClick}>
              Cancel
            </Button>
          </>
        ) : (
          <Button size="big" onClick={handleEditClick}>
            Update
          </Button>
        )}
      <Button size="big" onClick={handleDeleteClick}>
  Delete
</Button>

      </CardActions>
    </Card>
  );
}
