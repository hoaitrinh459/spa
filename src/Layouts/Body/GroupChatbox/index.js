import React from 'react';
import { useDispatch } from 'react-redux';
/* Components */
import Checkbox from '../../../Components/Checkbox';
import Population from '../../../Store/Actions/Population';
/* asset */
import './style.scss';

function GroupChatbox(props) {
  // eslint-disable-next-line react/prop-types
  const { listPrefecture } = props;
  const dispatch = useDispatch();
  const onChange = (e, prefCode, prefName) => {
    if (e.target.checked) {
      dispatch(Population.getPopulation(prefCode, prefName));
    } else {
      dispatch(Population.getPopulationNoChecked(prefCode, prefName));
    }
  };
  return (
    <div className="group-checkox">
      <p>都道府県</p>
      <div className="group-checkox-container">
        {/* eslint-disable-next-line react/prop-types */}
        {listPrefecture?.map((prefecture, index) => (
          <Checkbox
            prefCode={prefecture.prefCode}
            prefName={prefecture.prefName}
            key={index}
            onChange={e => {
              onChange(e, prefecture.prefCode, prefecture.prefName);
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default GroupChatbox;
