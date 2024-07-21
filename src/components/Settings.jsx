import React from 'react';
import logo from '../images/logo.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import question from '../images/questionMark.png';
import round from '../images/roundimage.png';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import pro from '../images/pro.png';
import changeProfile from '../images/changeProfile.png';
import './settings.css';
export const Settings = () => {
  return (
    <div className='container-fluid'>
    <div className='row align-items-center'>
      <div className='col-6 d-flex justify-content-start'>
        <div className="top-left d-flex justify-content-evenly">
          <div className='icon'>
            <span className="material-symbols-outlined m-4">arrow_back_ios</span>
          </div>
          <div>
            <img className='logo1 m-2' src={logo} alt="Logo" />
          </div>
          <div>
            <input className='text m-4' type="text" />
          </div>
          <div className='icon'>
            <span className="material-symbols-outlined mt-4">search</span>
          </div>
        </div>
      </div>
      <div className='col-6 d-flex justify-content-end'>
        <div className="top-right d-flex justify-content-evenly">
          <div className="group d-flex justify-content-evenly">
            <div>
              <img className='questionMark m-2' src={question} alt="Question Mark" />
            </div>
            <div>
              <img className='roundImg m-2' src={round} alt="Round Image" />
            </div>
            <div>
              <input className="wallet m-3" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slider d-flex flex-row justify-content-center">
      <div className="slider-track d-flex flex-row">
        <div className="image1">
          <img className='divImages' src={image1} alt="Image 1" />
        </div>
        <div className="image1">
          <img className='divImages' src={image2} alt="Image 2" />
        </div>
        <div className="image1">
          <img className='divImages' src={image3} alt="Image 3" />
        </div>
        <div className="image1">
          <img className='divImages' src={image4} alt="Image 4" />
        </div>
        <div className="image1">
          <img className='divImages' src={image5} alt="Image 5" />
        </div>
      </div>
    </div>
    <div className="content-wrapper">
      <div className="left-box me-1 text-center">
        <div className=' mt-2'>
          <img  className="pro"src={pro} alt="" />
          </div>
        <div className=' mt-2'>
        <span className='userP-text'>USER NAME</span>
        </div>
        <div>
        <button className='pro-btn  mt-2'>
          PROFILE
        </button>
        </div>
        <div className="proBox mt-4 p-2">
          <div className='home-btn'>
            HOME
          </div>
          <hr className='line m-2' />
          <div className='history-btn'>
            HISTORY
          </div>
          <hr className='line m-2' />
          <div className='leader-btn'>
            LEADER BOARD
          </div>
          <hr className='line m-2' />
         <div className='wallet-btn'>
            WALLET
          </div>
          <hr className='line m-2' />
          <div className='notification-btn'>
            NOTIFICATIONS
          </div>
          <hr className='line m-2' />
          <div className='refer-btn'>
            REFER AND EARN
          </div>

        </div>
        <div className="pro-logout mt-4 ms-3">
          LOGOUT
        </div>
      </div>
      <div className="center-box">
      <button className='featuredGames-btn'>
        SETTINGS
      </button>
      <div className='settings-box m-4 d-flex flex-row justify-content-center'>
 
        <div className="setting-left">
          <div className="details text-center mt-3">
            <div>
              NAME:ABC
              <span class="material-symbols-outlined">
border_color
</span>
            </div>
            <hr className='line' />
            <div >
              PHONE NUMBER: 9087654321
              <span class="material-symbols-outlined">
border_color
</span>
            </div>
            <hr className='line' />
            <div >
            EMAIL ID:ABC@GMAIL.COM
            <span class="material-symbols-outlined">
border_color
</span>
            </div>
          </div>
          <div className='m-2'>
            SECURITY INFORMATION:
          </div>
          <div className="details-pass mt-1 text-center">
<div> CHANGE PASSWORD:
<span class="material-symbols-outlined">
border_color
</span>
</div>
<hr />
<div>BANK DETAILS
<span class="material-symbols-outlined">
border_color
</span>
</div>
<hr />
<div> UPDATED VERSION 
<span class="material-symbols-outlined">
border_color
</span>
</div>
          </div>

        </div>
        <div className="setting-right text-center m-3">
          <div className='m-3'>
          <img src={changeProfile} className='changeProfile' alt="" />
          </div>
          <div className='m-2'>
          CHANGE PROFILE PICTURE
          </div>
          <div className='m-3'>
          <button className='uid'>
          
          UID:123456789
      
        </button>
          </div>
        
          <div className='m-5'>
            <button className='help-btn'>
              GET HELP
            </button>
          </div>
        
         
        </div>
        

        </div>
      </div>
      <div className="right-box ms-1 text-center">
        <div>
          <button className='bet-sel'>
            BET SLIP
          </button>
        </div>
     
        <div className='betSelectionBox mt-3'>
          <span>YOUR BET SELECTION WILL APPEAR HERE</span>

        </div>
      </div>
    </div>
  </div>
  )
}
