import React from 'react';

/** asset */
import './style.scss';

function Header(props) {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  return <div className="header">{title}</div>;
}
export default Header;
