import React from 'react';
import { useSelector } from 'react-redux';
import LoadingModal from 'react-loading-bubbles';
import { Line } from 'react-chartjs-2';

/* asset */
import './style.scss';

function Chart() {
  let dataChart = {
    labels: [],
    datasets: {},
  };
  const requesting = useSelector(state => state.population.requesting);
  const population = useSelector(state => state.population.data);

  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return randomColor;
  };

  const dataYear = population[Object.keys(population)[0]]?.[1];
  const labels = [];
  dataYear?.map(item => labels.push(item.year));

  const datasets = [];
  Object.keys(population).forEach(key => {
    const data = [];
    Object.keys(population[key]?.[1]).forEach(keyYear => {
      data.push(population[key]?.[1][keyYear]?.value);
    });
    datasets.push({
      label: population[key]?.[0],
      data,
      borderColor: getRandomColor(),
    });
  });
  if (!requesting && population)
    dataChart = {
      labels,
      datasets,
    };
  return (
    <div className="chart">
      {requesting ? (
        <LoadingModal size={128} color="#23D3D3" backgroundColor="none" />
      ) : (
        <Line data={dataChart} />
      )}
    </div>
  );
}
export default Chart;
