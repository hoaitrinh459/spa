import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingModal from 'react-loading-bubbles';

import Prefecture from '../../Store/Actions/Prefecture';
/* Layouts */
import Header from '../../Layouts/Header';
import Body from '../../Layouts/Body';
/* asset */
import './style.scss';

function HomePage() {
  const dispatch = useDispatch();
  const requesting = useSelector(state => state.listPrefecture.requesting);
  const listPrefecture = useSelector(state => state.listPrefecture.data);
  useEffect(() => {
    dispatch(Prefecture.getListPrefecture());
  }, [dispatch]);
  return (
    <Fragment>
      <Header title="Title" />
      {requesting ? (
        <LoadingModal size={128} color="#23D3D3" backgroundColor="none" />
      ) : (
        <Body listPrefecture={listPrefecture} />
      )}
    </Fragment>
  );
}
export default HomePage;
