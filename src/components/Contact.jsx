import React, { useState, useEffect } from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.submit();
  };

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const showSuccessAlert = () => {
    setFormSubmitted(true);
  };

  return (
    <div className='border-b border-neutral-900 pb-20'>
        {formSubmitted && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 text-center">
                Message sent successfully!
            </div>
        )}
        <motion.h1 
        whileInView={{y:0, opacity:1, rotate:360}}
        initial={{y:-100, opacity:0, rotate:0}}
        transition={{duration:1}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center tracking-tighter md:w-1/3">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href="#" className="border-b">{CONTACT.email}</a>
                <div className="my-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.920578634567!2d-122.084249684692!3d37.42206597982595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e0b5b5b5b5%3A0x5b5b5b5b5b5b5b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633021234567!5m2!1sen!2sus"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <form 
                className="flex flex-col md:w-2/3 p-4"
                action='https://docs.google.com/forms/d/e/1FAIpQLSc9_Dy3mcUrfAqn9TWni2Le76U8UDbiODBltEtip7eTl9dFXQ/formResponse'
                method='POST'
                target='hidden_iframe'
                onSubmit={handleSubmit}
            >
                <input type="text" placeholder="Name" className="my-2 p-2 border border-neutral-900 bg-transparent" id='entry.2005620554' name='entry.2005620554' />
                <input type="email" placeholder="Email" className="my-2 p-2 border border-neutral-900 bg-transparent" id='entry.1045781291' name='entry.1045781291'/>
                <textarea placeholder="Message" className="my-2 p-2 border border-neutral-900 bg-transparent" rows="4" id='entry.839337160' name='entry.839337160'></textarea>
                <button type="submit" className="my-2 p-2 bg-neutral-900 text-white">Submit</button>
            </form>
            <iframe name="hidden_iframe" style={{ display: 'none' }} onLoad={showSuccessAlert}></iframe>
        </div>
    </div>
  )
}

export default Contact