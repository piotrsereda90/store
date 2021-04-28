import React,{Component} from 'react';
import Chart from "react-apexcharts";


class BreakDownChart extends Component{
  constructor(props){
    super(props);

    this.state={
      options: {},
      series: [50,38,15],
      chartOptions:{
        labels:['Marketing','Outsourcing','Strategy']
      }

    };
    }

render() {
  return (
    <Chart
      options={this.state.options}
      series = {this.state.series}
      labels = {this.state.chartOptions.labels}
      type='donut'
      width = '100%'
      height ='100%'
            />
     );
}
}
export default BreakDownChart