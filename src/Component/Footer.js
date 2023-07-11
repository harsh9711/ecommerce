import {styled} from "styled-components";
import { NavLink } from "react-router-dom";
import{Button} from "../styles/Button";
import {FaDiscord,FaInstagram,FaYoutube} from "react-icons/fa";
const Footer=()=>{
   return  (
   <Wrapper>
 <section className="contact-short">
    <div className="grid grid-two-column">
        <div>
            <h3>READY TO GET STARTED</h3>
            <h3>TALK TO US TODAY</h3>
        </div>
        <div>
        <Button>
            <NavLink to ="/contact">Get Started</NavLink>
        </Button>
        </div>
    </div>
    </section>
{/* main footer */}
<footer>
    <div className="container-grid-grid-four-column">
        <div className="footer-about">
            <h3>Technical University</h3>
            <p>Lorem106 Lorem106 Lorem106
             Lorem106 Lorem106 Lorem106</p>
        </div>
        <div className="footer-subscribe">
        <h3>Subscribe to get important questions</h3>
        <form action="#" className="subscribecss">
            <input type="email" placeholder="your email"/>
            <input type="submit" value="Subscribe"/>
        </form>
        </div>
        <div className="footer-social">
            <h3>FOLLOW US</h3>
            <div className="footer-social--icons">
                <div>
                    <FaDiscord className="icons"/>
                </div>
                <div>
                    <FaInstagram className="icons"/>
                </div>
                <div>
                    <a
                     href="https://www.youtube.com/watch?v=X6EfH1KlZlk&t=350s&ab_channel=ThapaTechnical"
                     target="blank">
                     <FaYoutube className="icons"/>
                     </a>
                </div>   
            </div>
        </div>
        <div className="footer-contact">
                    <h3>CALL US</h3>
                    <a href="tel:9711904891">+91 9711904891</a>
                </div>
    </div>

{/* bottom footer */}
    <div className="footer-bottom--section">
                    <hr/>
                <div className="container-grid-grid-two-column">
              <p>
              @{new Date().getFullYear()} Thapa Technical. All rights reserved.
              </p>
                    <p>Privacy Policy<br/><br/>Terms and Conditions</p>                                                                                      
                    </div>
                    </div>
</footer>
   </Wrapper>
   );
};
const Wrapper=styled.section`
.iSIFGq{
    margin:0;
}
.contact-short{
   max-width:60vw;
   margin:auto;
   padding: 5rem 10rem;
   background-color:${({theme})=>theme.colors.bg};
   border-radius:1rem;
   box-shadow:${({theme})=>theme.colors.shadowSupport};
   transform:translateY(50%);

.grid div:last-child{
justify-self:end;
align-self:center;
}
}
.footer-contact{
    margin-left:6rem;
    font-size:23px;
}
.footer-subscribe{
    margin-right:14rem;
    .subscribecss{  
        justify-content:center;
        flex-direction:column;
        display:flex;
        gap:1rem;
        input[type='email'] {
          width: 80%; /* Increase the width to 100% */
          max-width: 30rem; /* Set a maximum width */
        }
    }
}

.container-grid-grid-four-column{
    margin-left:42rem;
    display:flex;
   flex-direction:row:
}
footer{
    padding:14rem 0 9rem 0;
    background-color:${({theme})=>theme.colors.footer_bg};
h3{
    color:${({theme})=>theme.colors.hr};
    margin-bottom:2.4rem;
    display:flex;
}
p{
    display:flex;
    width:50%;
    color:${({theme})=>theme.colors.hr};
}
.footer-social--icons{
    display:flex;
    gap:1rem;
    padding: 10px;
div{ 
    display:flex;
    padding:1rem;
    border-radius:50%;
    border:2px solid ${({theme})=>theme.colors.hr};
.icons{
    display:flex;
    color:${({theme})=>theme.colors.hr};
    font-size:2.4rem;
    position:relative;
    cursor:pointer;
}
}
}
}
.container-grid-grid-two-column{
    display:flex;
    max-width:100%;
    justify-content: center;
    align-items: center;
}
.container-grid-grid-two-column p{
        margin-left:39rem;
        display: flex;
    }
.footer-bottom--section{
    padding-top:2rem;
   } 
hr{
    margin-top:5rem;
    margin-bottom:1rem;
    color:${({theme})=>theme.colors.hr};
    height:0.1px;
}

@media(max-width:${({theme})=>theme.media.mobile})
{
.contact-short
{
max-width:80vw;
margin:4.8rem auto;
transform:translateY(0%);
text-align:center;

.grid div:last-child{
   justify-self:center; 
}
}
footer{
    padding:9rem 0 9rem 0;
}
.footer-bottom--section{
    padding-top:4.8rem;
}
}
`;
export default Footer;



