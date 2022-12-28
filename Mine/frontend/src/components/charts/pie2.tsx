import axios from "axios";
// import "./styles.css";
import React, { useCallback, useState } from "react";
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';


const url = "http://127.0.0.1:8000/api/"

var get: Array<Object>;
var counts: Object;
var data: Array<Object> = [];

function setData(toSet: any) {
  get = toSet;
  counts = get!.reduce(function(count: any, entry: any){
    count[entry.crystalStructure] = (count[entry.crystalStructure] || 0) + 1;
    return count;}, {});
  for(const item in counts){
    data.push({name: item, value: Object(counts)[item]});
  }
}

axios.get(url).then((res) => {setData(res.data);});

// var domElement = document.createElement("root");
// var myChart = echarts.init(domElement);
var option = {
  series: [
    {
      name: "Minerals",
      type: "pie",
      radius: "50%",
      data: data
    }
  ]
}
// option && myChart.setOption(option);

export default function PieChart() {
  console.log(data);
  console.log(option.series);
  return(<ReactECharts option={option}/>)};
