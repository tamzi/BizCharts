import React from "react";
import {
  Chart,
  Geom,
  Effects,
} from "../../src";
import Tooltip from '../../src/components/Tooltip';

const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5},
  { year: "1994", value: 5},
  { year: "1995", value: 4.9},
  { year: "1996", value: 6},
  { year: "1997", value: 7},
  { year: "1998", value: 9},
  { year: "1999", value: 13}
];

function Basic() {
  const cols = {
    value: {
      min: 0
    },
    year: {
      range: [0, 1]
    }
  };
  return (
    <div>
      <Chart height={400} padding={[20, 40]} data={data} scale={cols} autoFit>
        <Geom type='line' position="year*value" size={2} />
        <Geom
          type='point'
          position="year*value"
          size={4}
          shape="circle"
          style={{
            stroke: "red",
            lineWidth: 1
          }}
        />
        {/* <Text position={ ['50%', '50%']} content="24 hours" /> */}
        <Tooltip className='sd' containerStyle={{ padding: 30, background: '#000' }} >
          {(title, items) => {
            return <div>{title}{items.length}</div>
          }}
        </Tooltip>
        <Effects>
          {/* {(chart) => {
            chart.tooltip({
              showMarkers: false
            })
          }} */}
        </Effects>
      </Chart>
    </div>
  );
}

export default Basic;
