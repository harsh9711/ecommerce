import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {FaCheck} from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import {Button} from "/Users/harshsahcdeva/Desktop/l/ecommerce/src/styles/Button.js";
import { useCartContext } from "../context/cart_context";
import { logDOM } from "@testing-library/react";


const AddtoCart=({product})=>{
    const {addtoCart}=useCartContext();
    const {id,colors,stock}=product;
    const[color,setcolor]=useState(colors[2]);
    const[amount,setAmount]=useState(1);
    const setDecrease=()=>{
        amount>1?setAmount(amount-1):setAmount(1);
    };  
    const setIncrease=()=>{
        amount<stock?setAmount(amount+1):setAmount(stock);
    };  
    return(
        <Wrapper>
            <div className="colors">
                <p>
                    Colors:
                    {colors.map((curColor,index)=>{ 
                        console.log({curColor})                 
                    return(
                    <button 
                    key={index}
                    style={{backgroundColor:curColor}}
                    className={color === curColor?"btnStyle active":"btnStyle"}
                    onClick={()=>setcolor(curColor)}>
                    {color === curColor ? <FaCheck className="checkStyle"/>:null}
                    </button>
                    );
                    })}
                </p>
            </div>
            {/* add to cart */}
            <CartAmountToggle
                amount={amount}
                setIncrease={setIncrease}
                setDecrease={setDecrease}
            />
            <NavLink to="/cart" onClick={()=>addtoCart(id,colors,amount,product)}>
                <Button>Add To Cart</Button>
            </NavLink>

        </Wrapper>
    );
};
const Wrapper=styled.section`
.colors p{
    display:flex;
    justify-content:flex-start;
    align-items:center;

}
.btnStyle{
    width:2rem;
    height:2rem;
    background-color:#000;
    border-radius:50%;
    margin-left:1rem;
    border:none;
    outline:none;
    opacity:0.5;
    cursor:pointer;
&:hover{
    opacity:1;
}
}
.active{
    opacity:1;
}
.checkStyle{
    font-size:1rem;
    color:#fff;
}
.amount-toggle{
    margin-top:3rem;
    margin-bottom:1rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:1.4rem;
button{
    border:none;
    background-color:#fff;
    cursor:pointer;
}
.amount-style{
    font-size:2.4rem;
    color:${({theme})=>theme.colors.btn};
}
}
`;
export default AddtoCart;