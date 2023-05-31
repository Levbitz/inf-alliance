import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavbarTwo from '../../components/NavbarTwo/NavbarTwo';
import Logo from "../../assets/logo.jpeg"

export const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n8krfvs', 'template_xoa067k', form.current, 'WQgWmpXgZme7mnAjD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div style={{
      height:140
    }} className='black'>
   <NavbarTwo/> 
    </div>
    
    <div className="container">
    
    <div className="row">
    <div className="col l6">
   <div style={{
    marginTop:50
   }}>

   <h5>Please Leave Us A Message!</h5>
   <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Phone</label>
      <input type="number" name="phone" />
      <label>Reason For Contact</label>
      <textarea name="message" />
      <input className='btn black white-text z-depth-0' type="submit" value="Send" />
    </form>
   </div> 
    
    
    </div>

    <div className="col l5 offset-l1">
    <div style={{
        marginTop:"10vh"
    }}>

   
    </div>
    </div>
    </div>
    
    </div>
    </>
  );
};
export default ContactPage
