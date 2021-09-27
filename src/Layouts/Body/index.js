import React from 'react';

/* Components */
import GroupChatbox from './GroupChatbox';
import Chart from './Chart';

/* asset */
import './style.scss';

function Body(props) {
  // eslint-disable-next-line react/prop-types
  const { listPrefecture } = props;
  return (
    <div className="body">
      <div className="container">
        <GroupChatbox listPrefecture={listPrefecture} />
        <Chart />
      </div>
    </div>
  );
}
export default Body;
