import React from 'react';

/* Components */
import GroupChatbox from './GroupChatbox';
import Chart from './Chart';

/* asset */
import './style.scss';

function Body() {
  return (
    <div className="body">
      <div className="container">
        <GroupChatbox />
        <Chart />
      </div>
    </div>
  );
}
export default Body;
