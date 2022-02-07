import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

function FirstContainer({pageInfo}) {
    const [toggleDiv,setToggleDiv] = useState()
    const toggle = () =>{
        setToggleDiv(true)
        if(toggleDiv === true){
            setToggleDiv(!true)
        }
    }
  return (
      <div className='container first-container' onClick={toggle}>
          <div className='container navigation-first'>
            <ul className='container'>
                <li>
                    {pageInfo.tabs[2].data.systems[0].system_name}
                </li>
                <li>
                    {pageInfo.tabs[2].data.systems[0].id}
                </li>
                <li>
                    {pageInfo.tabs[2].data.systems[0].created_date}
                </li>
                <li>
                    {pageInfo.tabs[2].data.systems[0].active_licenses}
                </li>
            </ul>
            <div className='container col-sm-3'>
                <button className='btn btn-primary'>ADD LICENSE</button>
                <button className='btn btn-danger'>REMOVE</button>
            </div>
          </div>
          <div className={`container navigation-second ${toggleDiv ? 'flex' : 'none'}`}>
              <div className='container col-sm-12'>
                  <ul className='container'>
                        <li>{pageInfo.tabs[2].data.subsystems[0].licenses}</li>
                        <li>{pageInfo.tabs[2].data.subsystems[0].expires}</li>
                        <li>download</li>
                  </ul>
              </div>
              <div className='container col-sm-12'>
                    <ul className='container'>
                        <li>{pageInfo.tabs[2].data.subsystems[1].licenses}</li>
                        <li>{pageInfo.tabs[2].data.subsystems[1].expires}</li>
                        <li>download</li>
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default connect(
    (state) => ({
        pageInfo:state.pageInfo,
    }),
    null
)(FirstContainer)
