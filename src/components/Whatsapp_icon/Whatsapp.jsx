import React from 'react';
import './whatsapp.css';
import { Link } from 'react-router-dom';

const Whatsapp = () => {
  return (
   <>
    <Link to="https://api.whatsapp.com/send/?phone=85297468144&amp;text=learn&amp;type=phone_number&amp;app_absent=0" className="whatsapp_float" target="_blank"><i className="bi bi-whatsapp my_float"></i></Link>
   </>
  )
}

export default Whatsapp;