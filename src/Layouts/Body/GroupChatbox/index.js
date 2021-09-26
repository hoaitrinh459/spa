import React from 'react';

/* Components */
import Checkbox from '../../../Components/Checkbox';
/* asset */
import './style.scss';

function GroupChatbox(props) {
  // eslint-disable-next-line react/prop-types
  const { listPrefecture } = props;
  return (
    <div className="group-checkox">
      <p>都道府県</p>
      <div className="group-checkox-container">
        {/* eslint-disable-next-line react/prop-types */}
        {listPrefecture.map((prefecture, index) => (
          <Checkbox
            prefCode={prefecture.prefCode}
            prefName={prefecture.prefName}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
export default GroupChatbox;
