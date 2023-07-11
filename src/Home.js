import React from "react";
import HeroSection from "./Component/HeroSection";
import Trusted from "./Component/Trusted";
import Service from "./Component/Service";
import FeatureProduct from "./Component/FeatureProduct";
const Home=()=>{
    const data={
        name:"thapa store",
    }; 
    return(
    <>
   <HeroSection myData={data}/>
    <FeatureProduct/>
    <Service/>
    <Trusted/>
    </>
    );
};
export default Home;