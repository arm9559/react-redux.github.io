import React from 'react';
import './MainStyle.scss';
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';
import Uploader from './Uploader';
export default function Main() {
  return (
      <main>
          <FirstContainer/>
          <SecondContainer/>
          <Uploader/>
      </main>
  );
}
