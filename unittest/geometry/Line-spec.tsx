import React from 'react';
import Chart from '../../src/components/Chart';
import Line from '../../src/geometry/Line';
import '../../src/core';
import { render, cleanup } from '@testing-library/react';

const MOCK_DATA = [
	{
		month: "Jan",
		city: "Tokyo",
		temperature: 7
	},
	{
		month: "Jan",
		city: "London",
		temperature: 3.9
	},
	{
		month: "Feb",
		city: "Tokyo",
		temperature: 13
	},
	{
		month: "Feb",
		city: "London",
		temperature: 4.2
	},
	{
		month: "Mar",
		city: "Tokyo",
		temperature: 16.5
	},
	{
		month: "Mar",
		city: "London",
		temperature: 5.7
	},
	{
		month: "Apr",
		city: "Tokyo",
		temperature: 14.5
	},
	{
		month: "Apr",
		city: "London",
		temperature: 8.5
	},
	{
		month: "May",
		city: "Tokyo",
		temperature: 10
	},
	{
		month: "May",
		city: "London",
		temperature: 11.9
	},
	{
		month: "Jun",
		city: "Tokyo",
		temperature: 7.5
	},
	{
		month: "Jun",
		city: "London",
		temperature: 15.2
	},
	{
		month: "Jul",
		city: "Tokyo",
		temperature: 9.2
	},
	{
		month: "Jul",
		city: "London",
		temperature: 17
	},
	{
		month: "Aug",
		city: "Tokyo",
		temperature: 14.5
	},
	{
		month: "Aug",
		city: "London",
		temperature: 16.6
	},
	{
		month: "Sep",
		city: "Tokyo",
		temperature: 9.3
	},
	{
		month: "Sep",
		city: "London",
		temperature: 14.2
	},
	{
		month: "Oct",
		city: "Tokyo",
		temperature: 8.3
	},
	{
		month: "Oct",
		city: "London",
		temperature: 10.3
	},
	{
		month: "Nov",
		city: "Tokyo",
		temperature: 8.9
	},
	{
		month: "Nov",
		city: "London",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "Tokyo",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "London",
		temperature: 9.8
	}
];

const MOCK_DATA_2 = [
	{
		year: "1992-01-01",
		value: 4,
	},
	{
		year: "1991-01-01",
		value: 3,
	},
	
	{
		year: "1993-01-01",
		value: 3.5,
	},
	{
		year: "1997-01-01",
		value: 7,
	},
	{
		year: "1995-01-01",
		value: 4.9,
	},
	{
		year: "1996-01-01",
		value: 6,
	},
	{
		year: "1994-01-01",
		value: 5,
	},
	{
		year: "1998-01-01",
		value: 9,
	},
	{
		year: "1999-01-01",
		value: 11,
	},
];

const Demo = (props) => {
	const { onGetG2Instance, ...others } = props;
	return <Chart forceUpdate appendPadding={10} data={MOCK_DATA} width={500} height={300} onGetG2Instance={onGetG2Instance}>
		<Line
			position="month*temperature"
			color="city"
			{...others}
		/>
	</Chart>
}


describe('geomtrys-Line', () => {
	test('has one geometry', async () => {
		let chart = null;
		render(<Demo onGetG2Instance={c => chart = c} />);
		expect(chart.geometries.length).toBe(1);
		expect(chart.geometries[0].type).toBe('line');
		// cleanup()
	})

	test('smooth shape', async () => {
		let chart = null;
		render(<Demo shape="smooth" onGetG2Instance={c => {
			chart = c
		}} />);
		expect(chart.geometries[0].elements[0].shapeType).toBe('smooth');
		// cleanup()

  })
  
  test('step shape: hvh', async () => {
		let chart = null;
		render(<Demo shape="hvh" onGetG2Instance={c => {
			chart = c
		}} />);
		expect(chart.geometries[0].elements[0].shapeType).toBe('hvh');
		// cleanup()
  })
  
  test('step shape: hv', async () => {
		let chart = null;
		render(<Demo shape="hv" onGetG2Instance={c => {
			chart = c
		}} />);
		expect(chart.geometries[0].elements[0].shapeType).toBe('hv');
		// cleanup()
  })
  
  test('step shape: vh', async () => {
		let chart = null;
		render(<Demo shape="vh" onGetG2Instance={c => {
			chart = c
		}} />);
		expect(chart.geometries[0].elements[0].shapeType).toBe('vh');
		// cleanup()
  })

  test('step shape: vhv', async () => {
		let chart = null;
		render(<Demo shape="vhv" onGetG2Instance={c => {
			chart = c
		}} />);
		expect(chart.geometries[0].elements[0].shapeType).toBe('vhv');
		// cleanup()
	})

	test('时间类型 sortable 默认开启', async () => {
		let chart = null;
		render(<Chart forceUpdate appendPadding={10} data={MOCK_DATA_2} width={500} height={300} onGetG2Instance={c => {
			chart = c
		}}>
			<Line
				position="year*value"
			/>
		</Chart>);
		expect(chart.geometries[0].dataArray[0][0]._origin.year).toBe('1991-01-01');
		// cleanup()
	})

})
