import React from 'react';

/* Components */
import GroupChatbox from './GroupChatbox';
/* asset */
import './style.scss';

function Body() {
  return (
    <div className="body">
      <div className="container">
        <GroupChatbox />
      </div>
    </div>
  );
}
export default Body;
