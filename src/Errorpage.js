import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Button} from "./styles/Button";
const Errorpage=()=>
{
return <Wrapper>
    <div className="container">
        <div>
            <h2> 404 </h2>
            <h3> UH OH! you are lost </h3>
            <p>
            Well, we're not all perfect, but we try.  Can you try this
again or maybe visit
            </p>
            <NavLink to="/">
            <Button>GO back to Home</Button>
            </NavLink>         
        </div>
    </div>
</Wrapper>
};
const Wrapper=styled.section`
.container{
    padding:9rem 0;
    text-align:center;
    h2{
        font-size:10rem;
    }
    p{
        margin:2rem 0;
    }
    h3{
        font-size:4.2rem;
    }
}
`;
export default Errorpage;