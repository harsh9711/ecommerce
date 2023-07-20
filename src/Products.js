import React from "react";
import styled from "styled-components";
import FilterSection from "./Component/FilterSection";
import Sort  from "./Component/Sort";
import ProductList from "./Component/ProductList";
import { useFilterContext } from "./context/filter_context";
const Products=()=>{
    const {filter_products}=useFilterContext();
   
return (
<Wrapper>
<div className="container grid grid-filter-column">
<div className="filter-section">
          <FilterSection />
        </div>
    <section className="product-view--sort">
       <div className="sort-filter">
        <Sort/>
       </div> 
       <div className="main-product">
        <ProductList/>
       </div>
    </section>
</div>
</Wrapper>
);
};

const Wrapper=styled.section`
.filter-section {
    flex: 0.2;
  }

  .product-view--sort {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sort-filter {
    margin-bottom: 1rem;
  }

.grid-filter-column{
    display: flex;
    gap: 2rem;
    grid-temlplate-columns:0.2fr 1fr;
} 
@media (max-width: ${({theme})=>theme.media.mobile})
{
    .grid-filter-column{
        grid-template-columns:1fr;
    }
}
`;
export default Products;