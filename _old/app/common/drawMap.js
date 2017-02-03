var d3 = require('d3');

import { width, height, ratio, color, data } from 'json!./mapConfig.json';

export default (element) => {
  //初始化变量
  var svg, projection, path;

  //初始化数据
  if (!data) {
    return data;
  }

  // 地址映射
  projection = d3.geoMercator()
    .center([107, 31])
    .scale(ratio)
    .translate([width / 2, height / 2]);
  path = d3.geoPath()
    .projection(projection);

  // 绘图
  svg = d3.select(element).append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(0,0)');
  svg.selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('stroke', '#777')
    .attr('stroke-width', 0.5)
    .attr('fill', function (d, i) {
      return color[i];
    })
    .attr('d', path)
    .on('mouseover', function (d, i) {
      // console.log(d, i, this);
      d3.select(this)
        .attr('stroke', '#fff')
        .attr('fill', '#ff804c');
    })
    .on('mouseout', function (d, i) {
      d3.select(this)
        .attr('stroke', '#777')
        .attr('fill', color[i]);
    });
  return 'ok';
};
