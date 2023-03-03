import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { useParams } from "react-router-dom";

function Item() {
  const [item, setItem] = useState([]);
  const [updated, setUpdated] = useState(false); // new state variable to track whether an item has been updated
  const { categoryId } = useParams(); // get the category ID from the URL params

  useEffect(() => {
    fetch(`/items`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data); // check what the response from the server is
        setItem(data);
      });
  }, [updated]); // add updated as a dependency so that the effect is re-run when an item is updated

  const handleItemUpdate = () => {
    setUpdated(true);
  };

  return (
    <div>
      <h3>These are the current items</h3>
      <div>
        {item
          .filter((i) => i.category.id === Number(categoryId)) // filter items based on category ID
          .map((i) => (
            <ItemCard
              key={i.id}
              id={i.id}
              i={i}
              onItemUpdate={handleItemUpdate} // pass a callback function to each ItemCard
            />
          ))}
      </div>
    </div>
  );
}

export default Item;
