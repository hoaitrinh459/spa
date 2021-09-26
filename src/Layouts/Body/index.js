import React from 'react';

/* Components */
import GroupChatbox from './GroupChatbox';
/* asset */
import './style.scss';

function Body(props) {
  // eslint-disable-next-line react/prop-types
  const { listPrefecture } = props;
  return (
    <div className="body">
      <div className="container">
        <GroupChatbox listPrefecture={listPrefecture} />
      </div>
    </div>
  );
}
export default Body;
