import MainAPI from './index';

const getListPrefecture = () => MainAPI.get('api/v1/prefectures');

const Prefecture = { getListPrefecture };

export default Prefecture;
