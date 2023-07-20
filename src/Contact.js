import userEvent from "@testing-library/user-event";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const Contact = () => 
{
  const {isAuthenticated,user}= useAuth0();
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return(
  <Wrapper>
    <h2 className="common-heading">Contact page</h2>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.680945677201!2d77.05889268818198!3d28.61955615268675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d088f7ac93%3A0x1db406bd94cf6e8e!2sUttam%20Nagar%20East%2C%20Uttam%20Nagar%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1688531988385!5m2!1sen!2sin" 
    width="2100"
     height="450" 
     style={{border:0}}
     allowfullscreen="" 
     loading="lazy" 
     referrerpolicy="no-referrer-when-downgrade"></iframe>
     <div className="container">
      <div className="contact-form">
         <form action="https://formspree.io/f/mrgwgzkw" 
         method="POST" 
         className="contact-inputs">
         <input
          type="text" 
          placeholder="username"
           name="username"
          value= {isAuthenticated ? user.name:""}
            required 
            autocomplete="off"
         />
         <input 
         type="email"
         name="Email"
         placeholder="Email"
         autocomplete="off"
         value= {isAuthenticated ? user.email:""}
         required
        />
        <textarea
        name="Message"
        cols="30"
        rows="10"
        required
        autocomplete="off"
        placeholder="Enter Your Message"></textarea>
        
        <input type="submit" value="send"/>
         </form>
      </div>
     </div>
  </Wrapper>
  );
};
export default Contact;