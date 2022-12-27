import React from 'react'
import { useState } from 'react-router-dom'
import {MdOutlinePlace} from 'react-icons/md'
import {GoCalendar} from 'react-icons/go'
import "./Portfolio.css"
import {BiArrowBack} from 'react-icons/bi'
import portrait from "../images/portrait.jpg"
 

const Portfolio = () => {
  const joined = "March,2015";
  const address = "Ontario,USA";
  const email = "fjsandjkfn @gmail.com";
  const phone = "032184897";
  const website = "wewewewqewqewqewe";
  const about ="fjnaskljdfnkjewnfkjnjewbrjkwenrkewqr "

  return (
    <div className="container">
      <div className="header">
        <div className='image_header'>
          <img src={portrait}></img>
        </div>
        <button className='back_button'> <i><BiArrowBack/></i> </button>
      </div>

      <div className="add" >
        <div className="infor">
          <div className="item">
            <div id="item1">
              <span id='address'><MdOutlinePlace/></span>
              <span className='infor_staff'>{joined}</span>
            </div>
            
            <div id="item2">
              <span id='calendar'><GoCalendar/></span>
              <span className='infor_staff'>{address}</span>
            </div>  
          </div>


          <div className="infor_item">
            <label>Email Address:</label>
            <span className='infor_staff'>{email}</span>
          </div>

          <div className="infor_item">
            <label>Phone:</label>
            <span className='infor_staff'>{phone}</span>
          </div>

          <div className="infor_item">
            <label>Website:</label>
            <span className='infor_staff'>{website}</span>
          </div>

          <div className="infor_item">
            <label>About:</label>
            <span className='infor_staff'>{about}</span>
          </div>
        </div>
      </div>

      <div className="image" >
        <img src={portrait}></img>
        <button type='submit' className="button_edit">EDIT</button>
      </div>
    </div>
  )
} 

export default Portfolio