import MainAPI from './index';

const getPopulation = id =>
  MainAPI.get('api/v1/population/sum/perYear', {
    params: {
      prefCode: id,
    },
  });

const Population = { getPopulation };

export default Population;
