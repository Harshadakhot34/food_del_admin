import React from "react";
import "./Add.css";
import '../../index.css'
import { assets } from "../../assets/admin_assets/assets";
const Add = () => {
  return (
    <div className="add">
      <form action="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input type="text" name="name" placeholder="Type here" />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            name="description"
            id=""
            rows={6}
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select name="Category" id="">
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
        </div>
        <div className="add-price flex-col">
          <p>Product Price</p>
          <input type="Number" name="Price" placeholder="$20"/>
        </div>
        <button type="submit" className="add-btn">ADD</button>
      </form>
    </div>
  );
};

export default Add;
