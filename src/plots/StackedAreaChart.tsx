import 'react';
import { Area } from '@antv/g2plot/lib/plots/area';
import createPlot from '../createPlot';
import { polyfill, AreaOptions } from './AreaChart';
import warn from 'warning';

interface StackedAreaOptions extends AreaOptions {}

export { StackedAreaOptions };
export default createPlot<StackedAreaOptions>(Area, 'StackedAreaChart', props => {
  warn(false, '<StackedAreaChart /> 即将在5.0后废弃，请使用<AreaChart /> 替代。');
  return polyfill(props);
});
