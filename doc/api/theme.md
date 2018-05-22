
# Theme
以下是默认主题的详细样式，你可以根据这些主题样式属性自定义主题。

```jsx
const DEFAULT_COLOR = '#1890FF';
const COLOR_PLATE_8 = [ '#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864' ];
const COLOR_PLATE_16 = [ '#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#223273', '#7564CC', '#8543E0',
  '#5C8EE6', '#13C2C2', '#5CA3E6', '#3436C7', '#B381E6', '#F04864', '#D598D9' ];
const COLOR_PLATE_24 = [ '#1890FF', '#66B5FF', '#41D9C7', '#2FC25B', '#6EDB8F', '#9AE65C', '#FACC14', '#E6965C',
  '#57AD71', '#223273', '#738AE6', '#7564CC', '#8543E0', '#A877ED', '#5C8EE6', '#13C2C2', '#70E0E0', '#5CA3E6',
  '#3436C7', '#8082FF', '#DD81E6', '#F04864', '#FA7D92', '#D598D9' ];
const COLOR_PIE = [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#3436C7', '#223273' ];
const COLOR_PIE_16 = [ '#1890FF', '#73C9E6', '#13C2C2', '#6CD9B3', '#2FC25B', '#9DD96C', '#FACC14', '#E6965C',
  '#F04864', '#D66BCA', '#8543E0', '#8E77ED', '#3436C7', '#737EE6', '#223273', '#7EA2E6' ];

const FONT_FAMILY = '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"';
// tooltip's dom element classname
const TOOLTIP_CONTAINER_CLASS = 'g2-tooltip';
const TOOLTIP_TITLE_CLASS = 'g2-tooltip-title';
const TOOLTIP_LIST_CLASS = 'g2-tooltip-list';
const TOOLTIP_LIST_ITEM_CLASS = 'g2-tooltip-list-item';
const TOOLTIP_MARKER_CLASS = 'g2-tooltip-marker';

const Theme = {
  defaultColor: DEFAULT_COLOR, // default theme color
  plotCfg: {
    padding: [ 20, 20, 95, 80 ]
  },
  fontFamily: FONT_FAMILY,
  defaultLegendPosition: 'bottom',
  colors: COLOR_PLATE_8,
  colors_16: COLOR_PLATE_16,
  colors_24: COLOR_PLATE_24,
  colors_pie: COLOR_PIE,
  colors_pie_16: COLOR_PIE_16,
  shapes: {
    point: [ 'hollowCircle', 'hollowSquare', 'hollowDiamond', 'hollowBowtie', 'hollowTriangle',
      'hollowHexagon', 'cross', 'tick', 'plus', 'hyphen', 'line' ],
    line: [ 'line', 'dash', 'dot' ],
    area: [ 'area' ]
  },
  markerRadius: 4,
  sizes: [ 1, 10 ],
  opacities: [ 0.1, 0.9 ],
  axis: {
    top: {
      position: 'top',
      title: null,
      label: {
        offset: 14,
        textStyle: {
          fill: '#545454',
          fontSize: 12,
          lineHeight: 20,
          textBaseline: 'middle'
        },
        autoRotate: true
      },
      line: {
        lineWidth: 1,
        stroke: '#BFBFBF'
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#BFBFBF',
        length: 4
      }
    },
    bottom: {
      position: 'bottom',
      title: null,
      label: {
        offset: 22,
        autoRotate: true,
        textStyle: {
          fill: '#545454',
          fontSize: 12,
          lineHeight: 20,
          textBaseline: 'middle'
        }
      },
      line: {
        lineWidth: 1,
        stroke: '#BFBFBF'
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#BFBFBF',
        length: 4
      }
    },
    left: {
      position: 'left',
      title: null,
      label: {
        offset: 12,
        autoRotate: true,
        textStyle: {
          fill: '#545454',
          fontSize: 12,
          lineHeight: 20,
          textBaseline: 'middle'
        }
      },
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          stroke: '#E9E9E9',
          lineWidth: 1,
          lineDash: [ 3, 3 ]
        },
        hideFirstLine: true
      }
    },
    right: {
      position: 'right',
      title: null,
      label: {
        offset: 12,
        autoRotate: true,
        textStyle: {
          fill: '#545454',
          fontSize: 12,
          lineHeight: 20,
          textBaseline: 'middle'
        }
      },
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          stroke: '#E9E9E9',
          lineWidth: 1,
          lineDash: [ 3, 3 ]
        },
        hideFirstLine: true
      }
    },
    circle: {
      zIndex: 1,
      title: null,
      label: {
        offset: 12,
        textStyle: {
          fill: '#545454',
          fontSize: 12,
          lineHeight: 20
        }
      },
      line: {
        lineWidth: 1,
        stroke: '#BFBFBF'
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#BFBFBF',
        length: 4
      },
      grid: {
        lineStyle: {
          stroke: '#E9E9E9',
          lineWidth: 1,
          lineDash: [ 3, 3 ]
        },
        hideFirstLine: true
      }
    },
    radius: {
      zIndex: 0,
      label: {
        offset: 12,
        textStyle: {
          fill: '#545454',
          fontSize: 12,
          textBaseline: 'middle',
          lineHeight: 20
        }
      },
      line: {
        lineWidth: 1,
        stroke: '#BFBFBF'
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#BFBFBF',
        length: 4
      },
      grid: {
        lineStyle: {
          stroke: '#E9E9E9',
          lineWidth: 1,
          lineDash: [ 3, 3 ]
        },
        type: 'circle'
      }
    },
    helix: {
      grid: null,
      label: null,
      title: null,
      line: {
        lineWidth: 1,
        stroke: '#BFBFBF'
      },
      tickLine: {
        lineWidth: 1,
        length: 4,
        stroke: '#BFBFBF'
      }
    }
  },
  label: {
    offset: 20,
    textStyle: {
      fill: '#545454',
      fontSize: 12,
      textBaseline: 'middle'
    }
  },
  treemapLabels: {
    offset: 10,
    textStyle: {
      fill: '#fff',
      fontSize: 12,
      textBaseline: 'top',
      fontStyle: 'bold'
    }
  },
  innerLabels: {
    textStyle: {
      fill: '#fff',
      fontSize: 12,
      textBaseline: 'middle'
    }
  },
  // 在theta坐标系下的饼图文本内部的样式
  thetaLabels: {
    labelLine: {
      lineWidth: 1
    },
    labelHeight: 14,
    offset: 30
  },
  legend: {
    right: {
      position: 'right',
      layout: 'vertical',
      itemMarginBottom: 8,
      width: 16,
      height: 156,
      title: null,
      textStyle: {
        fill: '#8C8C8C',
        fontSize: 12,
        textAlign: 'start',
        textBaseline: 'middle',
        lineHeight: 20
      }, // 图例项文本的样式
      unCheckColor: '#bfbfbf'
    },
    left: {
      position: 'left',
      layout: 'vertical',
      itemMarginBottom: 8,
      width: 16,
      height: 156,
      title: null,
      textStyle: {
        fill: '#8C8C8C',
        fontSize: 12,
        textAlign: 'start',
        textBaseline: 'middle',
        lineHeight: 20
      }, // 图例项文本的样式
      unCheckColor: '#bfbfbf'
    },
    top: {
      position: 'top',
      offset: 6,
      layout: 'horizontal',
      title: null,
      itemGap: 10,
      width: 156,
      height: 16,
      textStyle: {
        fill: '#8C8C8C',
        fontSize: 12,
        textAlign: 'start',
        textBaseline: 'middle',
        lineHeight: 20
      }, // 图例项文本的样式
      unCheckColor: '#bfbfbf'
    },
    bottom: {
      position: 'bottom',
      offset: 58,
      layout: 'horizontal',
      title: null,
      itemGap: 24,
      width: 156,
      height: 16,
      textStyle: {
        fill: '#8C8C8C',
        fontSize: 12,
        textAlign: 'start',
        textBaseline: 'middle',
        lineHeight: 20
      },
      unCheckColor: '#bfbfbf'
    }
  },
  tooltip: {
    crosshairs: false,
    offset: 15,
    // css style for tooltip
    [`${TOOLTIP_CONTAINER_CLASS}`]: {
      position: 'absolute',
      visibility: 'hidden',
      whiteSpace: 'nowrap',
      zIndex: 999,
      transition: 'visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      borderRadius: '4px',
      color: 'rgb(255, 255, 255)',
      fontSize: '12px',
      fontFamily: FONT_FAMILY,
      lineHeight: '20px',
      padding: '10px 10px 6px 10px'
    },
    [`${TOOLTIP_TITLE_CLASS}`]: {
      marginBottom: '4px'
    },
    [`${TOOLTIP_LIST_CLASS}`]: {
      margin: 0,
      listStyleType: 'none',
      padding: 0
    },
    [`${TOOLTIP_LIST_ITEM_CLASS}`]: {
      marginBottom: '4px'
    },
    [`${TOOLTIP_MARKER_CLASS}`]: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      border: '1px solid #fff',
      display: 'inline-block',
      marginRight: '8px'
    }
  },
  tooltipMarker: {
    symbol: (x, y, r, ctx, marker) => {
      const color = marker.get('color');
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 4;
      ctx.arc(x, y, 7, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.restore();
    },
    radius: 4
  },
  tooltipCrosshairsRect: {
    type: 'rect',
    style: {
      fill: '#CCD6EC',
      opacity: 0.3
    }
  },
  tooltipCrosshairsLine: {
    style: {
      stroke: 'rgba(0, 0, 0, 0.25)',
      lineWidth: 1
    }
  },
  shape: {
    point: {
      lineWidth: 1,
      fill: DEFAULT_COLOR,
      radius: 4
    },
    hollowPoint: {
      fill: '#fff',
      lineWidth: 1,
      stroke: DEFAULT_COLOR,
      radius: 3
    },
    interval: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.85
    },
    pie: {
      lineWidth: 1,
      stroke: '#fff'
    },
    hollowInterval: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    area: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.3
    },
    polygon: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 1
    },
    hollowPolygon: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    hollowArea: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    line: {
      stroke: DEFAULT_COLOR,
      lineWidth: 2,
      fill: null
    }
  },
  guide: {
    line: {
      lineStyle: {
        stroke: DEFAULT_COLOR,
        lineDash: [ 0, 2, 2 ],
        lineWidth: 1
      },
      text: {
        position: 'end',
        autoRotate: true,
        style: {
          fill: '#545454',
          fontSize: 12,
          textAlign: 'center'
        }
      }
    },
    text: {
      style: {
        fill: '#545454',
        fontSize: 12,
        textBaseline: 'middle',
        textAlign: 'start'
      }
    },
    region: {
      style: {
        lineWidth: 0,
        fill: '#000',
        fillOpacity: 0.04
      }
    },
    html: {
      alignX: 'middle',
      alignY: 'middle'
    }
  },
  pixelRatio: null
};
```