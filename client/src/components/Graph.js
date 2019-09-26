import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

export default function Graph(props) {
  console.log(props);

  return (
    <ChartWrapper>
      <h3>Graphs:</h3>
      <GraphWrapper>
        <h4>Weight (kg)</h4>
        <LineChart
          width={600}
          height={300}
          data={props.screenings.reverse()}
          margin={{ top: 10, right: 40, left: 0, bottom: 10 }}>
          <CartesianGrid stroke='#e6e6e6' strokeDasharray='5 5' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type='monotone'
            dataKey='weight'
            stroke='#0d71ba'
            strokeWidth='2'
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </GraphWrapper>
      <GraphWrapper>
        <h4>Height (cm)</h4>
        <LineChart
          width={600}
          height={300}
          data={props.screenings}
          margin={{ top: 10, right: 40, left: 0, bottom: 10 }}>
          <CartesianGrid stroke='#e6e6e6' strokeDasharray='5 5' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type='monotone'
            dataKey='height'
            stroke='#0d71ba'
            strokeWidth='2'
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </GraphWrapper>
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 2px 3px #000;
  margin-bottom: 20px;

  h4 {
    background-color: #0d71ba;
    color: white;
    width: 100%;
    padding: 5px 0;
    margin-top: 0;
  }
`;
