import React from "react";
import { NavLink } from "react-router-dom";
const Product=(curElem)=>{
    const {id,name,img,price,category}=curElem;
    return <NavLink to={`/singleProduct/${id}`}>
    <div className="card">
        <figure>
            <img src={img} alt={name}/>
            <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
        <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{price}</p>
        </div>
        </div>
    </div>
    </NavLink>
};
export default Product;