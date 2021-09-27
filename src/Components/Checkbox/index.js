import React from 'react';

/* asset */
import './style.scss';

function Checkbox(props) {
  // eslint-disable-next-line react/prop-types
  const { prefCode, prefName, onChange } = props;

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={prefCode}
        onChange={e => {
          onChange(e);
        }}
      />
      <label htmlFor={prefCode}>{prefName}</label>
    </div>
  );
}
export default Checkbox;
