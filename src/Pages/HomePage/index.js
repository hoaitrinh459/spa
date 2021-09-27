import React from 'react';
/* Layouts */
import Header from '../../Layouts/Header';
import Body from '../../Layouts/Body';
/* asset */
import './style.scss';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Body />
    </div>
  );
}
export default HomePage;
