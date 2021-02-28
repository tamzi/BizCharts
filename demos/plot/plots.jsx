/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { BarChart, GaugeChart, Chart, Coordinate, Tooltip, Interval } from '../../src';

// import { Text } from '../../src/components/Annotation';
// import Tooltip from '../../src/components/Tooltip';

function Pie({ data }) {
  return (
    <Chart pure height={100} width={100} data={data} autoFit>
      <Coordinate type="polar" innerRadius={0.2} />
      <Interval
        position="year*population"
        adjust="stack"
        color="year"
        element-highlight
        style={{
          lineWidth: 1,
          stroke: '#fff',
        }}
      />
    </Chart>
  );
}
const data = [
  {
    year: "1991",
    value: 5
  },
  {
    year: "1992",
    value: 4
  },
  {
    year: "1993",
    value: 3.5
  },
  {
    year: "1994",
    value: 5
  },
  {
    year: "1995",
    value: 4.9
  }
];

function Basic() {
  const [value, setValue] = useState(1);
  const bar = React.createRef();
  const [autoFit, setAutoFit] = useState(true);
  return (
    <div>

      <div onClick={() => {
        setValue(value + 1);
        setAutoFit(!autoFit);
      }}>click me</div>
      <GaugeChart
        title={{
          visible: true,
          text: '仪表盘',
        }}
        width={400}
        height={400}
        value={Math.random() * 100}
        min={0}
        max={100}
        range={[0, 25, 50, 75, 100]}
        color={['#39B8FF', '#52619B', '#43E089', '#C0EDF3']}
        statistic={{
          visible: true,
          text: '优',
          color: '#30bf78',
        }}
      />
      <BarChart
        title="图表标题"
        data={data}
        yField="year"
        xField="value"
      >
        <Tooltip>
          {() => {
            const MOCK_DATA = [
              { year: '2001', population: 41.8 },
              { year: '2002', population: 38 },
              { year: '2003', population: 33.7 },
              { year: '2004', population: 30.7 },
              { year: '2005', population: 25.8 },
              { year: '2006', population: 31.7 },
              { year: '2007', population: 33 },
              { year: '2008', population: 46 },
              { year: '2009', population: 38.3 },
              { year: '2010', population: 28 },
              { year: '2011', population: 42.5 },
              { year: '2012', population: 30.3 },
            ];
            return <Pie data={MOCK_DATA} />
          }}
        </Tooltip>
      </BarChart>
      <BarChart
        ref={bar}
        onGetG2Instance={() => {
          // console.log('onGetG2Instance', c)
        }}
        onAfterrender={() => { console.log('onAfterrender') }}
      />

    </div>
  );
}

export default Basic;
