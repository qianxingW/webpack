import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class App extends Component {
   constructor(props) {
      super(props);
   }

   getOption1 = () => {
      let options = {
         tooltip: {
            trigger: 'axis',
            axisPointer: {
               type: 'shadow'
            }
         },
         color: ['#37A1DA', '#9FE7B8', '#FEDB5B', '#FF9F7F'],
         legend: {
            data: ['中长期(含基数)', '日前','实时','实际上网','中长期(含基数)电价', '日前电价','实时电价','实际上网电价'],
            itemWidth: 16,
            itemHeight: 8,
            top: 12,
            right: 50,
            itemGap: 10,
         },
         grid: {
            left: '3%',
            right: '4%',
            bottom: '8%',
            top: 72,
            containLabel: true
         },
         xAxis: [
            {
               type: 'category',
               data: ['1月', '2月', '3月'],
               splitLine: {show: false},
               axisLine: {
                  lineStyle: {
                     color: '#ECECEC'
                  }
               },
               axisTick: {show: false},
               axisLabel: {
                  color: '#8c8c8c',
                  fontSize: 10
               }
            }
         ],
         yAxis: [
            {
               type: 'value',
               name: '兆瓦时',
               nameTextStyle: {
                  color: '#8c8c8c'
               },
               splitLine: {
                  show: true,
                  lineStyle: {
                     type: 'dotted'
                  }
               },
               axisLine: {
                  lineStyle: {
                     color: '#fff'
                  }
               },
               axisLabel: {
                  color: '#8c8c8c',
                  fontSize: 10
               },
               axisTick: {show: false},
            },
            {
               type: 'value',
               name: '元',
               nameTextStyle: {
                  color: '#8c8c8c'
               },
               splitLine: {
                  show: true,
                  lineStyle: {
                     type: 'dotted'
                  }
               },
               axisLine: {
                  lineStyle: {
                     color: '#fff'
                  }
               },
               axisLabel: {
                  show: true,
                  color: '#8c8c8c',
                  fontSize: 10
               },
               axisTick: {show: false},
            }
         ],
         series: [
            {
               name: '中长期(含基数)',
               type: 'bar',
               data: [20, 49, 70]
           },
           {
               name: '日前',
               type: 'bar',
               data: [26, 59, 90]
           },
           {
               name: '实时',
               type: 'bar',
               data: [20, 49, 70]
            },
            {
               name: '实际上网',
               type: 'bar',
               data: [26, 59, 90]
            },
            {
               name: '中长期(含基数)电价',
               type: 'line',
               yAxisIndex: 1,
               smooth: true,
               data: [201, 429, 70]
           },
           {
               name: '日前电价',
               type: 'line',
               yAxisIndex: 1,
               smooth: true,
               data: [26, 529, 90]
           },
           {
               name: '实时电价',
               type: 'line',
               yAxisIndex: 1,
               smooth: true,
               data: [210, 49, 720]
            },
            {
               name: '实际上网电价',
               type: 'line',
               yAxisIndex: 1,
               smooth: true,
               data: [226, 59, 910]
            },
         ]
      };
      return options;
   }

   getOption2 = () => {
      let options = {
         color: ['#9FE7B8','#657797','#6394F9','#FEDB5B'],
         tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
         title: {
            text: '上网电量成分占比',
            top: '10px',
            left: '16px',
            textStyle: {
               fontWeight: 'normal',
               fontSize: '12',
               color: '#000'
            }
         },
         series: {
            name: '上网电量成分占比',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [
               {value: 335, name: '中长期电量'},
               {value: 234, name: '基数电量'},
               {value: 310, name: '日前偏差电量'},
               {value: 310, name: '实时偏差电量'},
            ],
            label: {
               formatter: '{b} {d}%',
            }
        }
      };
      return options;
   }

   getOption3 = () => {
      let options = {
         color: ['#5B8FF9', '#62DAAA'],
         title: {
            text: '电价对比',
            top: 12,
            left: 16,
            textStyle: {
               fontWeight: 'normal',
               fontSize: '12'
            }
         },
         tooltip: {
            trigger: 'axis'
         },
         legend: {
            data: ['日前出清价', '实时结算价'],
            top: 12,
            right: 10,
         },
         grid: {
            left: '3%',
            right: '4%',
            bottom: '8%',
            top: 72,
            containLabel: true
         },
         xAxis: [
            {
               type: 'category',
               data: ['00:00', '03:00', '06:00'],
               splitLine: {show: false},
               axisLine: {
                  lineStyle: {
                     color: '#ECECEC'
                  }
               },
               axisTick: {show: false},
               axisLabel: {
                  color: '#353535',
                  fontSize: 10
               }
            }
         ],
         yAxis: [
            {
               type: 'value',
               name: '元',
               nameTextStyle: {
                  color: '#8c8c8c'
               },
               splitLine: {
                  show: true,
                  lineStyle: {
                     type: 'dotted'
                  }
               },
               axisLine: {
                  lineStyle: {
                     color: '#fff'
                  }
               },
               axisLabel: {
                  color: '#8c8c8c',
                  fontSize: 10
               },
               axisTick: {show: false},
            }
         ],
         series: [{
            name: '日前出清价',
            type: 'line',
            smooth: true,
            data: [120, 132, 101]
        },
        {
            name: '实时结算价',
            type: 'line',
            smooth: true,
            data: [220, 182, 191]
        },]
      };
      return options;
   }

   render() {
      return (
         <div key='das' style={{background:'#fff'}}>
            <div>
               <ReactEcharts
                  option={this.getOption1()}
                  notMerge={true}
                  style={{height: '300px', width: '100%'}}
               />
            </div>
            <div>
               <ReactEcharts
                  option={this.getOption2()}
                  notMerge={true}
                  style={{height: '300px', width: '100%'}}
               />
            </div>
            <div>
               <ReactEcharts
                  option={this.getOption3()}
                  notMerge={true}
                  style={{height: '300px', width: '414px'}}
               />
            </div>
         </div>
      );
   }
};

export default App;