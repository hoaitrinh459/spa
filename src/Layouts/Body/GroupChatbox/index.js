import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingModal from 'react-loading-bubbles';
/* Components */
import Checkbox from '../../../Components/Checkbox';
import Population from '../../../Store/Actions/Population';
import Prefecture from '../../../Store/Actions/Prefecture';
/* asset */
import './style.scss';

function GroupChatbox() {
  const dispatch = useDispatch();
  const requesting = useSelector(state => state.listPrefecture.requesting);
  const listPrefecture = useSelector(state => state.listPrefecture.data);
  const populationDataAll = useSelector(state => state.population.dataAll);

  useEffect(() => {
    dispatch(Prefecture.getListPrefecture());
  }, [dispatch]);

  const onChange = (e, prefCode, prefName) => {
    if (e.target.checked) {
      if (!!populationDataAll[prefCode])
        dispatch(Population.getPopulationChecked(prefCode));
      else dispatch(Population.getPopulation(prefCode, prefName));
    } else {
      dispatch(Population.getPopulationNoChecked(prefCode));
    }
  };
  return (
    <div className="group-checkox">
      <p>都道府県</p>
      {requesting ? (
        <LoadingModal size={128} color="#23D3D3" backgroundColor="none" />
      ) : (
        <div className="group-checkox-container">
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
      )}
    </div>
  );
}
export default GroupChatbox;
