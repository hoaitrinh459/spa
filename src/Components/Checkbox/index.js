import React from 'react';

/* asset */
import './style.scss';

function Checkbox(props) {
  // eslint-disable-next-line react/prop-types
  const { prefCode, prefName } = props;
  return (
    <div className="checkbox">
      <input type="checkbox" id={prefCode} />
      <label htmlFor={prefCode}>{prefName}</label>
    </div>
  );
}
export default Checkbox;
