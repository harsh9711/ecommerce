import HeroSection  from "./Component/HeroSection";
import {useProductContext} from "./context/productcontext";
const About=()=>{
    const {myName}=useProductContext();
    const data={
        name:"HS Ecommerece",
    };
return(
  <>
  {myName}
  <HeroSection myData={data}/>{" "}  
  </>  
);
};
export default About;