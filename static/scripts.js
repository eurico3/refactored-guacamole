////////////////////////////////    LINE CHARTS   ///////////////////////////////////////////////////
////////////////////////////////    LINE CHARTS   ///////////////////////////////////////////////////
////////////////////////////////    LINE CHARTS   ///////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//////////////////////// line chart straight  ////////////////////
//////////////////////////////////////////////////////////////////

var linechartstraightoptions = {
    chart: {
      type: 'line',
      height:250,
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    },

    stroke:{
        curve:'straight'
    }
  }

  var linechartstraight = new ApexCharts(document.querySelector("#linechart_straight"), linechartstraightoptions);

  linechartstraight.render();


//////////////////////////////////////////////////////////////////
//////////////////////// line chart step smooth //////////////////
//////////////////////////////////////////////////////////////////


  var linechartsmoothoptions = {
    chart: {
      type: 'line',
      height:250,
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    },

    stroke:{
        curve:'smooth'
    }
  }

  var linechartsmooth = new ApexCharts(document.querySelector("#linechart_smooth"), linechartsmoothoptions);

  linechartsmooth.render();

//////////////////////////////////////////////////////////////////
//////////////////////// line chart step line ////////////////////
//////////////////////////////////////////////////////////////////


var linechartsteplineoptions = {
    chart: {
        type: 'line',
        height:250,
    },
    series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    },

    stroke:{
        curve:'stepline'
    }
    }

    var linechartstepline = new ApexCharts(document.querySelector("#linechart_stepline"), linechartsteplineoptions);

    linechartstepline.render();

//////////////////////////////////////////////////////////////////
//////////////////////// line charts with data labels ////////////
//////////////////////////////////////////////////////////////////


  var options_line_data_labels = {
    series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Average High & Low Temperature',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
  };

  var chart = new ApexCharts(document.querySelector("#linechart_line_data_labels"), options_line_data_labels);
  chart.render();

//////////////////////////////////////////////////////////////////
//////////////////////// Zoomable Time Series ////////////////////
//////////////////////////////////////////////////////////////////


// Sample data for series.monthDataSeries1

var series = {
  monthDataSeries1: {
    // Array of prices for the data series
    prices: [
      8200, 8210, 8195, 8225, 8235, 8215, 8220,
      8230, 8240, 8235, 8245, 8250, 8260, 8270,
      8265, 8280, 8290, 8285, 8300, 8310, 8305
    ],
    // Array of corresponding dates for the data series
    dates: ['2024-01-01','2024-01-02','2024-01-03','2024-01-04',
    '2024-01-05','2024-01-06','2024-01-07','2024-01-08',
    '2024-01-09','2024-01-10','2024-01-11','2024-01-12',
    '2024-01-13','2024-01-14','2024-01-15','2024-01-16',
    '2024-01-17','2024-01-18','2024-01-19','2024-01-20','2024-01-21'
    ]
  }
};

  var zoom_options = {
    series: [{
    name: 'XYZ MOTORS',
    data: series.monthDataSeries1.prices
  }],
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: 'datetime',
  },
    chart: {
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  title: {
    text: 'Stock Price Movement',
    align: 'left'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
    title: {
      text: 'Price'
    },
  },

  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0)
      }
    }
  }
  };

  var zoom_chart = new ApexCharts(document.querySelector("#zoomable_timeseries"), zoom_options);
  zoom_chart.render();
  
//////////////////////////////////////////////////////////////////
//////////////////////// Chart with anotations ///////////////////
//////////////////////////////////////////////////////////////////
  
  

// Sample data for series.monthDataSeries1
var series = {
  monthDataSeries1: {
    // Array of prices for the data series
    prices: [
      8200, 8210, 8195, 8225, 8235, 8215, 8220,
      8230, 8240, 8235, 8245, 8250, 8260, 8270,
      8265, 8280, 8290, 8285, 8300, 8310, 8305
    ],
    // Array of corresponding dates for the data series
    dates: ['2024-01-01','2024-01-02','2024-01-03','2024-01-04',
    '2024-01-05','2024-01-06','2024-01-07','2024-01-08',
    '2024-01-09','2024-01-10','2024-01-11','2024-01-12',
    '2024-01-13','2024-01-14','2024-01-15','2024-01-16',
    '2024-01-17','2024-01-18','2024-01-19','2024-01-20','2024-01-21'
    ]
  }
};


var annot_options = {
  series: [{
    data: series.monthDataSeries1.prices
  }],
  chart: {
    type: 'line',
    height:250,
  },
  labels: series.monthDataSeries1.dates,
   xaxis: {
  type: 'datetime',
  },
  
  annotations: {
    
    yaxis: [
      {
      y: 8200,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Support',
        }
      },
      {
      y: 8260,
      y2: 8300,
      borderColor: '#000',
      fillColor: '#FEB019',
      opacity: 0.2,
      label: {
        borderColor: '#333',
        style: {
          fontSize: '10px',
          color: '#333',
          background: '#FEB019',
        },
        text: 'Y-axis range',
          }
      }],
    
    xaxis: [
      {
      x: new Date('2024-01-17').getTime(),
      strokeDashArray: 0,
      borderColor: '#775DD0',
      label: {
        borderColor: '#775DD0',
        style: {
          color: '#fff',
          background: '#775DD0',
        },
        text: 'Anno Test',
        }
      },
      
      {
      x: new Date('2024-01-12').getTime(),
      x2: new Date('2024-01-14').getTime(),
      fillColor: '#B3F7CA',
      opacity: 0.4,
      label: {
        borderColor: '#B3F7CA',
        style: {
          fontSize: '10px',
          color: '#fff',
          background: '#00E396',
        },
        offsetY: -10,
        text: 'X-axis range',
        }
      }],

      points: [
        {
        x: new Date('09 Jan 2024').getTime(),
        y: 8240.00,
        marker: {
          size: 8,
          fillColor: '#fff',
          strokeColor: 'red',
          radius: 2,
          cssClass: 'apexcharts-custom-class'
        },
        label: {
          borderColor: '#FF4560',
          offsetY: 0,
          style: {
            color: '#fff',
            background: '#FF4560',
          },
    
          text: 'Point Annotation',
        }
        },

        {
          x: new Date('18 Jan 2024').getTime(),
          y: 8285.00,
          marker: {
            size: 0
          },
        //  image: {
        //    path: '../../assets/images/ico-instagram.png'
        //  }
        }
      
      ]

  
    }


};

// Initializing the chart with the options and rendering it
var annot_chart = new ApexCharts(document.querySelector("#linechart_annotations"), annot_options);
annot_chart.render();

//////////////////////////////////////////////////////////////////
//////////////////////// Sync Charts /////////////////////////////
//////////////////////////////////////////////////////////////////

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var datas = [];
  var valores = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
      yrange.min;

    //series.push([x, y]);
    //valores.push([y]);
    valores.push(y);
    datas.push(x);
    baseval += 86400000;
    i++;
  }
  return [valores,datas];
}

const [valores, datas] = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
  min: 10,
  max: 60
})
var sync_options = {
                    series: [{
                      data: valores
                    }],
                    labels: datas,
                    xaxis: {
                      type: 'datetime',
                      },
                    chart: {
                      id: 'fb',
                      group: 'social',
                      type: 'line',
                      height: 160
                    },

                      colors: ['#008FFB']
                    };

var sync_chart = new ApexCharts(document.querySelector("#sync_chart"), sync_options);
sync_chart.render();

////////

var optionsLine2 = {
                    series: [{
                      data: valores
                    }],
                    labels: datas,
                    xaxis: {
                      type: 'datetime',
                      },
                    chart: {
                    id: 'tw',
                    group: 'social',
                    type: 'line',
                    height: 160
                  },
                  colors: ['#546E7A']
                  };

var chartLine2 = new ApexCharts(document.querySelector("#chart-line2"), optionsLine2);
chartLine2.render();

/////////////

var optionsArea = {
                    series: [{
                      data: valores
                    }],
                    labels: datas,
                    xaxis: {
                      type: 'datetime',
                      },
                    
                      chart: {
                    id: 'yt',
                    group: 'social',
                    type: 'area',
                    height: 160
                  },
                  
                  colors: ['#00E396']
                  };

var chartArea = new ApexCharts(document.querySelector("#chart-area"), optionsArea);
chartArea.render();

//////////////

var optionsSmall = {
                      series: [{
                        data: valores
                      }],
                      labels: datas,
                      xaxis: {
                        type: 'datetime',
                        },
                      chart: {
                      id: 'ig',
                      group: 'social',
                      type: 'area',
                      height: 160,
                      width: 300
                    },
                    colors: ['#008FFB']
                    };

var chartSmall = new ApexCharts(document.querySelector("#chart-small"), optionsSmall);
chartSmall.render();

//////////////

var optionsSmall2 = {
                      series: [{
                        data: valores
                      }],
                      labels: datas,
                      xaxis: {
                        type: 'datetime',
                        },
                      chart: {
                      id: 'li',
                      group: 'social',
                      type: 'area',
                      height: 160,
                      width: 300
                    },
                    colors: ['#546E7A']
                    };

var chartSmall2 = new ApexCharts(document.querySelector("#chart-small2"), optionsSmall2);
chartSmall2.render();

//////////////////////////////////////////////////////////////////
//////////////////////// Brush Chart Line ////////////////////////
//////////////////////////////////////////////////////////////////

function generateDayWiseTimeSeries2(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1) * i / count) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

var data1 = generateDayWiseTimeSeries2(new Date('11 Feb 2017').getTime(), 185, {
  min: 20,
  max: 100
})
var data2 = generateDayWiseTimeSeries2(new Date('11 Feb 2017').getTime(), 185, {
  min: 5,
  max: 50
})

var brush_options = {
  series: [{
  name: 'Flies',
  data: data1
},{
  name: 'Spiders',
  data: data2
}],
  chart: {
  id: 'chart2',
  type: 'line',
  height: 230,
  dropShadow: {
      enabled: true,
      enabledOnSeries: [1]
  },
  toolbar: {
    autoSelected: 'pan',
    show: false
  }
},
colors: ['#008FFB', '#00E396'],
stroke: {
  width: 3
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [2,6],
  curve: ['straight','monotoneCubic']
},
fill: {
  opacity: [1,0.75],
},
markers: {
  size: 0
},
yaxis: [
  {
    seriesName: 'Flies',
    axisTicks: {
      show: true,
      color: '#008FFB'
    },
    axisBorder: {
      show: true,
      color: '#008FFB'
    },
    labels: {
      style: {
        colors: '#008FFB',
      }
    },
    title: {
      text: "Flies",
      style: {
        color: '#008FFB'
      }
    },
  },
  {
    seriesName: 'Spiders',
    opposite: true,
    axisTicks: {
      show: true,
      color: '#00E396'
    },
    axisBorder: {
      show: true,
      color: '#00E396'
    },
    labels: {
      style: {
        colors: '#00E396'
      }
    },
    title: {
      text: "Spiders",
      style: {
        color: '#00E396'
      }
    },
  }
],
xaxis: {
  type: 'datetime'
}
};

var brushchart = new ApexCharts(document.querySelector("#brush_chart"), brush_options);
brushchart.render();


var brush_options2 = {
  series: [{
  name: 'Flies',
  data: data1
},{
  name: 'Spiders',
  data: data2
}],
  chart: {
  id: 'chart1',
  height: 130,
  type: 'area',
  brush:{
    target: 'chart2',
    enabled: true
  },
  selection: {
    enabled: true,
    xaxis: {
      min: new Date('24 April 2017').getTime(),
      max: new Date('29 May 2017').getTime()
    }
  },
},
colors: ['#008FFB', '#00E396'],
stroke: {
  width: [1, 3],
  curve: ['straight', 'monotoneCubic']
},
fill: {
  type: 'gradient',
  gradient: {
    opacityFrom: 0.91,
    opacityTo: 0.1,
  }
},
xaxis: {
  type: 'datetime',
  tooltip: {
    enabled: false
  }
},
yaxis: {
  max: 100,
  tickAmount: 2
}
};

var chartLine = new ApexCharts(document.querySelector("#brush_chart2"),brush_options2);
chartLine.render();


//////////////////////////////////////////////////////////////////
//////////////////////// Gradient Line ///////////////////////////
//////////////////////////////////////////////////////////////////



var gradient_options = {
  series: [{
  name: 'Sales',
  data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
}],
  chart: {
  height: 350,
  type: 'line',
},
forecastDataPoints: {
  count: 7
},
stroke: {
  width: 5,
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
  tickAmount: 10,
  labels: {
    formatter: function(value, timestamp, opts) {
      return opts.dateFormatter(new Date(timestamp), 'dd MMM')
    }
  }
},
title: {
  text: 'Forecast',
  align: 'left',
  style: {
    fontSize: "16px",
    color: '#666'
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'dark',
    gradientToColors: [ '#FDD835'],
    shadeIntensity: 1,
    type: 'horizontal',
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 100, 100, 100]
  },
}
};

var chart = new ApexCharts(document.querySelector("#gradient_line"), gradient_options);
chart.render();


//////////////////////////////////////////////////////////////////
//////////////////////// Real Time Line //////////////////////////
//////////////////////////////////////////////////////////////////

var lastDate = 0;
var data = []
var TICKINTERVAL = 86400000
let XAXISRANGE = 777600000
function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    data.push({
      x, y
    });
    lastDate = baseval
    baseval += TICKINTERVAL;
    i++;
  }
}

getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
  min: 10,
  max: 90
})

function getNewSeries(baseval, yrange) {
  var newDate = baseval + TICKINTERVAL;
  lastDate = newDate

  for(var i = 0; i< data.length - 10; i++) {
    // IMPORTANT
    // we reset the x and y of the data which is out of drawing area
    // to prevent memory leaks
    data[i].x = newDate - XAXISRANGE - TICKINTERVAL
    data[i].y = 0
  }

  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  })
}

function resetData(){
  // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series 
  data = data.slice(data.length - 10, data.length);
}



///////////////////

var real_time_options = {
  series: [{
  data: data.slice()
}],
  chart: {
  id: 'realtime',
  height: 350,
  type: 'line',
  animations: {
    enabled: true,
    easing: 'linear',
    dynamicAnimation: {
      speed: 1000
    }
  },
  toolbar: {
    show: false
  },
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
title: {
  text: 'Dynamic Updating Chart',
  align: 'left'
},
markers: {
  size: 0
},
xaxis: {
  type: 'datetime',
  range: XAXISRANGE,
},
yaxis: {
  max: 100
},
legend: {
  show: false
},
};

var real_chart = new ApexCharts(document.querySelector("#real_time_line"), real_time_options);
real_chart.render();


window.setInterval(function () {
getNewSeries(lastDate, {
  min: 10,
  max: 90
})

  real_chart.updateSeries([{
    data: data
  }])
  }, 1000)


















/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

  var radaroptions = {
    chart: {
      type: 'radar',
     
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }

  var radarchart = new ApexCharts(document.querySelector("#radarchart"), radaroptions);

  radarchart.render();

  ///////////////////////////////////////////////////////////////////

  var baroptions = {
    chart: {
      type: 'bar',
      height:250,
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }

  }

  var barchart = new ApexCharts(document.querySelector("#barchart"), baroptions);

  barchart.render();