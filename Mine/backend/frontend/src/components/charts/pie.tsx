import { PureComponent } from 'react';
import { PieChart, Pie, Cell} from 'recharts';
import axios from 'axios';

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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#73E065','#E05CB4','#E0473D'];

const RADIAN = Math.PI / 180;
interface IRenderCustomizedLabel {
    cx: any;
    cy: any;
    midAngle: any;
    innerRadius: any;
    outerRadius: any;
    percent: number;
    index: number;
  }
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: IRenderCustomizedLabel) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

  
    return (
      <text x={x} y={y} fill={COLORS[percent % COLORS.length]} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        
      </text>
    );
  };

export default class ReactPieChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    );
  }
}