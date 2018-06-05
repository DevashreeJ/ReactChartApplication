import React, { Component } from 'react';
import logo from './logo.svg';
import Chart from './components/Chart';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
     chartData:{}
  }
}

componentWillMount(){
  this.getChartdata();
}
 
 getChartdata(){
   this.setState({
      chartData :{
              labels:[
                  'Boston', 'Worcestor','Springfeild', 'Lowell', 'Cambridge', 'New Bedford'
              ],
              datasets: [
                  {
                      label : 'Population',
                      data:[
                          617594,
                          181045,
                          153060,
                          106519,
                          105162,
                          95072
                      ],   
              backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                    ]
                 }
              ]
          }
   })

 }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Charts using chart.js
          </h1>
        </header>
        <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
