import React from 'react'
import './register.css';
import { TbPasswordMobilePhone } from "react-icons/tb";
export const Register = () => {
  return (
    <div className='container-fluid register d-flex justify-content-center'>
      <div className="register-box mt-5">
<div>
  <button className='register-button m-3'>REGISTER YOUR ACCOUNT</button>
  </div>

<div>
  <span>PLEASE REGISTER BY USING PHONE NUMBER AND EMAIL</span>
</div>

<div className='phone mt-2'>
<span class="material-symbols-outlined">
phone_android
</span>
  <span>PHONE NUMBER</span>
  </div>

<div>
  <input type="text" className='register-input m-2'/>
  </div>

<div>
<TbPasswordMobilePhone style={{fontSize:25}}/>
<span> VERIFICATION CODE</span>
</div>

<div>
<input type="text" className='register-input m-1'/>
</div>

<div>
<span class="material-symbols-outlined">
mail
</span>
<span>EMAIL</span>
</div>

<div>
<input type="text"className='register-input m-1' />
</div>

<div>
<span class="material-symbols-outlined">
lock
</span>
<span>SET PASSWORD</span>
</div>

<div>
<input type="text" className='register-input m-1'/>
</div>

<div>
<span class="material-symbols-outlined">
lock
</span>
<span>CONFIRM PASSWORD</span>
</div>

<div>
<input type="text" className='register-input '/>
</div>

<div className='agree d-flex flex-row justify-content-center mt-2'>
<input type="radio" name="" id=""  />
  <label htmlFor=""> I have read and agree on the terms and condition</label>
</div>
<div><button className='register-button mt-3'> REGISTER</button></div>
      </div>
      </div>
  
  )
}
