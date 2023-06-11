import React from 'react'
import Chart from 'chart.js/auto'
import { Doughnut } from "react-chartjs-2";
import {Bar} from "react-chartjs-2"

const ChartDisplay = (props) => {
    const {date, travelContribution, energyContribution, foodContribution} = props
    const data = {
        labels: [
          'Travel Contribution',
          'Energy Contribution',
          'Food Contribution'
        ],
        datasets: [{
          label: date,
          data: [travelContribution, energyContribution, foodContribution],
          backgroundColor: [
            '#395E66',
            '#387D7A',
            '#80C6C3'
          ],
          hoverOffset: 4
        }]
      };

      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      let dateTitle = new Date(date)
      dateTitle = dateTitle.toLocaleDateString('en-US',options);

      let currentDate = new Date()
      currentDate = currentDate.toLocaleDateString('en-US',options);
      let totalUserFootPrint = travelContribution + energyContribution + foodContribution;
      let averageAmericanFootPrint = 40;
      let averageGlobalFootPrint = 10;
   
      let barData = {
        labels: [
          'Your Daily Impact',
          'Average American',
          'Global'
        ],
        datasets: [{
          data: [totalUserFootPrint, averageAmericanFootPrint, averageGlobalFootPrint],
          backgroundColor: [
            '#395E66',
            '#387D7A',
            '#80C6C3'
          ],
          hoverOffset: 4
        }],
    };
    const barOptions = {
  scales: {
    y: {
      suggestedMax: 50,
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'How Do You Compare? (kg)',
    },
    legend: {
      display: false,
    },
  },
};

      if(dateTitle === currentDate){
        dateTitle = "Today"
      }

  return (
    <div className = "chartDisplay">
        <h3 className = "text-slate-700 font-bold text-2xl">{dateTitle}</h3>
        <div className = "graphContainer">
          <div className = "chartWrapper">  <Doughnut data = {data} height = "350px" width = "350px" options = {{plugins: {title: {display:true, text: 'Where Is It Coming From? (kg)'}}}}/></div>
          <div className = "chartWrapper">  <Bar data = {barData} height = "350px" width = "350px" options={barOptions}/></div>
     
        </div>
        </div>
  )
  
}

export default ChartDisplay