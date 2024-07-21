import React from 'react';
import './login.css';

export const Login = () => {
  return (
   <div className='container-fluid login'>
    <form action="">
    <div className="login-container ">
    <div className="login-box ">
     <div> 
      <button className='login-button m-5'>
        LOGIN WITH PHONE NUMBER
      </button>
      </div>
      <div className='icons'>
      <span class="material-symbols-outlined">
smartphone
</span>
        <button className='login-button'>PHONE NUMBER</button>
        
        </div>
     <div> 
      <input type="text" className='login-input m-3'/>
      </div>
      <div>
      <span class="material-symbols-outlined">
lock
</span>
        <button className='login-button'>PASSWORD</button>
        </div>
         <div style={{ margin: '16px 0', position: 'relative' }}>
      <input type="text" className="login-input" style={{  width: '60%' }} />
      <span className="material-symbols-outlined" style={{ position: 'absolute', right: '73px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
        visibility_off
      </span>
    </div>
       <div>
        <input type="radio" name="" id="" />
        <label> remember password?</label>
        </div>
       <div>
        <button className='login-button m-3'>LOGIN</button>
        </div>
    </div>
   </div>
   </form>
   </div>
  )
}
