import React, { Fragment } from 'react';

/* Layouts */
import Header from '../../Layouts/Header';
import Body from '../../Layouts/Body';
/* asset */
import './style.scss';

function HomePage() {
  return (
    <Fragment>
      <Header title="Title" />
      <Body />
    </Fragment>
  );
}
export default HomePage;
