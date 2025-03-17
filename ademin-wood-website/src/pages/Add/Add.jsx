import React, { useState } from "react";
import "./Add.css";
import "../../index.css";
import { assets } from "../../assets/admin_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  // const url = "https://food-delivery-backend-flws.onrender.com";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", data.name);
  //   formData.append("description", data.description);
  //   formData.append("price", Number(data.price));
  //   formData.append("category", data.category);
  //   formData.append("image", image);

  //   const response = await axios.post(`${url}/api/food/add`, formData);
  //   if (response.data.success) {
  //     setData({ name: "", description: "", price: "", category: "Salad" });
  //     setImage(false);
  //     toast.success(response.data.message);
  //   } else {
  //   }
  // };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", Number(data.price));
      formData.append("category", data.category);
      formData.append("image", image);
  
      const response = await axios.post(`${url}/api/food/add`, formData);
  
      if (response.data.success) {
        setData({ name: "", description: "", price: "", category: "Salad" });
        setImage(false);
        toast.success(response.data.message || "Food added successfully!");
      } else {
        toast.error("Failed to add food item.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };
  
  return (
    <div className="add">
      <form action="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            type="text"
            name="name"
            value={data.name}
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            id=""
            rows={6}
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="Category" id="">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">ure Veg</option>
              <option value="Paste">Paste</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div
            onChange={onChangeHandler}
            value={data.price}
            className="add-price flex-col"
          >
            <p>Product Price</p>
            <input type="Number" name="Price" placeholder="$20" />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
