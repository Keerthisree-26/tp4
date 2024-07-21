import React from 'react';
import {useNavigate} from 'react-router-dom';
import './welcome.css';
import logoImage from "../images/logoImage.jpeg";

export const Welcome = () => {
    const navigate = useNavigate();
  return (
    
    <div className=' container-fluid welcome d-flex justify-content-center'>
    
        <div className="box mt-5">
        <h1>WELCOME </h1>
        <h1 >TO</h1>
        <div>
        <img className='logoImage' src={logoImage} alt="" />
        </div>
        <div>
        <div >
            <button className="login-btn mt-4" onClick={() => navigate('/login')}>
                
                Login to continue
            </button>
        </div>
        <h2><span>or</span></h2>

        <div >
            <button className="register-btn" onClick={() => navigate('/register')}>
                New user ? Register now!!
            </button>
        </div>
        </div>
 </div>
        
    </div>
    

  )
}
