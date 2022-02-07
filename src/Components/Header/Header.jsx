import React from 'react';
import HeaderImagesSVG from './HeaderImagesSVG';
import './HeaderStyle.scss';

import HeaderTitleContainer from './HeaderTitleContainer';
export default function Header() {
  return (
            <header className='container-fluid'>
                <HeaderTitleContainer/>
                <HeaderImagesSVG/>
            </header>
    );
}


