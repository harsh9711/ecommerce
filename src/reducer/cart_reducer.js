const cartReducer=(state = [],action = [])=>{
    console.log({state, action});
    if(action.type==="ADD_TO_CART")
    {
        let {id,colors,amount,product}=action.payload;
        let existingProduct=state.cart.find(
            (curItem)=>curItem.id===id+colors
        );
        if(existingProduct)
        {
            let updatedProduct=state.cart.map((curElem)=>{
                if(curElem.id===id+colors){
                    let newAmount=curElem.amount+amount;
                    if(newAmount>=curElem.max){
                        newAmount=curElem.max;
                    }
                return{
                    ...curElem,
                    amount:newAmount,
                };  
            } else{
                return curElem;
            }
            });
            return{
                ...state,
                cart:updatedProduct,
            };
        }else{
        let  cartProduct={
            id:id+colors,
            name:product.name,
            colors,
            amount,
            image:product.image[0].url,
            price:product.price,
            max:product.stock, 
        };
        return{
            ...state,
            cart:[...state.cart,cartProduct],
        };
    }
    }
   if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });

    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });

    return { ...state, cart: updatedProduct };
  }

    if(action.type==="REMOVE_ITEM"){
        let updatedCart=state.cart.filter(
        (curItem)=>curItem.id!==action.payload
        );
        return{
            ...state,
            cart:updatedCart,
        };
    }
    if(action.type==="CLEAR_CART"){
        // let updatedCart=state.cart.filter(
        // (curItem)=>curItem.id!==action.payload);
        return{
            ...state,
           cart:[],
        };
    } 
    if(action.type==="CART_TOTAL_ITEM"){
      let updatedItemVal=state.cart.reduce((initialval,curElem)=>{
        let {amount}=curElem;
        initialval=initialval+amount;
        return initialval;
      },0);
      return {
        ...state,
        total_item:updatedItemVal,
      };
    }
    return state;
};
export default cartReducer;