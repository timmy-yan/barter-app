import React, { useState } from "react";
import "../css/form.css";
import Cookies from "js-cookie";

function Home({ user }) {
  const [name, setName] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const user_id = Cookies.get("user_id");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    switch (selectedCategory) {
      case "HouseHold":
        setCategoryId(1);
        break;
      case "Tools/Outdoor Items":
        setCategoryId(2);
        break;
      case "Clothing":
        setCategoryId(3);
        break;
      case "Games/Toys":
        setCategoryId(4);
        break;
      case "Electronics":
          setCategoryId(5);
      break;
      case "Vehicle/Parts":
        setCategoryId(6);
        break;
      default:
        setCategoryId("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !image_url || !category) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    const res = await fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: document.cookie,
      },
      body: JSON.stringify({ name, image_url, category_id: categoryId , user_id}),
    });

    if (res.ok) {
      setName("");
      setImageUrl("");
      setCategory("");
      setCategoryId("");
      alert("Item posted successfully!");
    } else {
      
    }
  };

  return (
    <div>
      <div class="form-container">
        <form action="#" id="form" onSubmit={handleSubmit}>
          <h1>Want to Add an Item?</h1>
          <input type="text" name="subject" id="subject" placeholder="Name of the Item" onChange={(event) => setName(event.target.value)}
          value = {name}/>
          <input type="text" placeholder=" Image url" id="name" onChange={(event) => setImageUrl(event.target.value)}
          value = {image_url}/>
          
          <label>
            Category Selection:
            <select value={category} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="HouseHold">HouseHold</option>
            <option value="Tools/Outdoor Items">Tools/Outdoor Items</option>
            <option value="Clothing">Clothing</option>
            <option value="Games/Toys">Games/Toys</option>
            <option value="Electronics">Electronics</option>
            <option value="Vehicle/Parts">Vehicle/Parts</option>

          </select>
          </label>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button className="button1" type="submit" id="submitButton" >POST Item</button>
        </form>
      </div>
      
      <div className="container">
  <img 
    src="https://www.citypng.com/public/uploads/small/11641212959ieprpxnnresp8e1dwhz9wr2zuvt3jdxn4ckhn8illuhqrbkyr2mqyupdlj0venabywed3eavjmcdej82ewqckb8ift3jaoa0nouz.png"
    height={100}
    width={105}
    alt={"handshake white outline"}
  />
  <img
    src="https://www.citypng.com/public/uploads/small/11641212951vqoiupuphms2owsoeutwqanls25yooucsmjxajt1uz2l2cchxqndb2zfsf9vtiycq08jabqty3jozktgilbtmlf61szklkfvxggr.png"
    height={100}
    width={125}
    alt={"handshake black outline"}
  />
  <ul>
    <h1 className="justify-content-center">barterOnly.com</h1>
    <li>"Currency folks just don't get it.."</li>
  </ul>
</div>


    </div>
  );
}

export default Home;
