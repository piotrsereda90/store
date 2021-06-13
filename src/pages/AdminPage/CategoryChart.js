import React,{Component} from 'react';
import Chart from "react-apexcharts";


class CategoryChart extends Component{
  constructor(props){
    super(props);

    this.state={
      options: {
        chart: {
          id: "category"
        },
        xaxis: {
          categories: ['Jan','Feb','Mar','Apr','May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      },
      series: [
        {
          name: 'gun',
          data: [61, 45, 45, 50, 70, 80, 79, 91,49, 85, 99, 90]
        },
        {
          name: 'knife',
          data: [80, 30, 45, 47, 71, 15, 97, 51,51, 55, 77, 91]
        },
        {
          name: 'wardrobe',
          data: [30, 20, 70, 80, 29, 70, 70, 91,19, 20, 10, 15]
        },
        {
          name: 'holster',
          data: [10, 40, 40, 1, 5, 60, 90, 20,49, 30, 80, 11]
        },
        {
          name: 'optics',
          data: [70, 70, 75, 50, 19, 20, 30, 41,49, 40, 41, 35]
        },
        {
          name: 'vest',
          data: [100, 40, 85, 10, 29, 90, 70, 51,50, 49, 60, 60]
        },
        {
          name: 'ammunition',
          data: [30, 40, 45, 50, 49, 60, 70, 91,49, 60, 70, 91]
        }
      ]
    };
    }

  render() {
    return (
      <Chart
        options={this.state.options}
        series = {this.state.series}
        type='line'
        width = '100%'
        height ='100%'
      />
    );
}
}

export default CategoryChart