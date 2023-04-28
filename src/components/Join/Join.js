import React from 'react'
import { useRef } from 'react';
import emailjs, { send } from "@emailjs/browser";
import './Join.css';
import { useState } from 'react';

export default function Join() {
    const [message, setMessage] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_ss33jtk",
            "template_utiz80k",
            e.target,
            "ciJkjSP9nlrYt5JNK"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
        setMessage(true);
      };

  return (
    <div className='join' id='join-us'>
        <div className='left-j'>
          <hr/>
          <div>
            <span className='stroke-text'>READY TO</span>
            <span> LEVEL UP</span>
          </div>
          <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'> WITH US?</span>
          </div>


        </div>
        <div className='right-j'>
            <form action='' className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter Your Email Address'/>
                <button className='btn btn-j'>Join Now</button>
             
            </form>
            {message && (
            <span className="reply">Thanks! I will reply asap :)</span>
          )}

        </div>
        
    </div>
  )
}
