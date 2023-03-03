import React, { useEffect, useState,useContext } from "react";
import CategoryCard from "./CategoryCard";
import { UserContext } from "./UserContext";

function Category() {
  const [category, setCategory] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch("/categories")
      .then((resp) => resp.json())
      .then((data) => setCategory(data));
  }, []);

  // Array of image URLs
  const imageUrls = [
    "https://www.lifeyield.com/wp-content/uploads/2021/01/Household.png",
    "https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/Outdoor-Power-Guides-MOBv2.jpg",
    "https://npr.brightspotcdn.com/03/9c/3a2e47fc412a857e60875267fc30/clothing-istock-vectorikart-2021-0730.jpg",
    "https://i.ytimg.com/vi/wiHZ-VEm3o0/maxresdefault.jpg",
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Old_Electronics_hero_1.jpg",
    "https://i1.wp.com/www.carsrus.co.ke/wp-content/uploads/2019/11/SOME-IMPORTANT-CAR-PARTS.jpg?fit=640%2C384&ssl=1"
  ];

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <div>
        {category.map((categoriz, index) => (
          <CategoryCard
            key={categoriz.id}
            id={categoriz.id}
            c={categoriz}
            imageUrl={imageUrls[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
