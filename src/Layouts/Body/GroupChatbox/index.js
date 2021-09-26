import React from 'react';

/* Components */
import Checkbox from '../../../Components/Checkbox';
/* asset */
import './style.scss';

function GroupChatbox() {
  return (
    <div className="group-checkox">
      <p>都道府県</p>
      <div className="group-checkox-container">
        <Checkbox />
      </div>
    </div>
  );
}
export default GroupChatbox;
