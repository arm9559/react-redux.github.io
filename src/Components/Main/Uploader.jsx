import React from 'react';
import icon from './../Images/icon.png';
export default function Uploader() {
  return (
      <div className='uploader container col-sm-8'>
          <img src={icon} alt='image' title='title' height='55px'/>
      </div>
  );
}
