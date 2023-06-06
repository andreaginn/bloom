import React from 'react'
import Chart from 'chart.js/auto'
import { Doughnut } from "react-chartjs-2";

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

   

      if(dateTitle === currentDate){
        dateTitle = "Today"
      }

  return (
    <div className = "chartDisplay">
        <h3>{dateTitle}</h3>
       <Doughnut data = {data}/>

        </div>
  )
}

export default ChartDisplay