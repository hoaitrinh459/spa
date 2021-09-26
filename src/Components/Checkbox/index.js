import React from 'react';

/* asset */
import './style.scss';

function Checkbox() {
  return (
    <div className="checkbox">
      <input type="checkbox" id="cb" />
      <label htmlFor="cb">Title</label>
    </div>
  );
}
export default Checkbox;
