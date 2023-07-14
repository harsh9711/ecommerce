import React from "react";
import GridView from "./GridVIew";
import { useFilterContext } from "../context/filter_context";
const ProductList=()=>{
    const {filter_products,setGridView}=useFilterContext();
    // return <div>ProductList</div>;
    if(setGridView){
        return <GridView products={filter_products}/>;
    }  
};
export default ProductList;