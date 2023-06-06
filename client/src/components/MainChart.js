
import React from 'react'
import Chart from 'chart.js/auto'
import {Bar} from "react-chartjs-2"

const MainChart = (props) => {
    const {data} = props
    console.log(data)
    const chartDates = [];
    const chartTotalContributions = [];
    data.forEach(impact => {
        let date = new Date(impact.date)
      chartDates.unshift(date.toLocaleDateString())
        let dailyContribution = (impact.travelContribution + impact.energyContribution + impact.foodContribution)
        chartTotalContributions.unshift(dailyContribution);
      })
      
      console.log(chartDates)

    
      let barData = {
        labels: chartDates,
        datasets: [{
          data: chartTotalContributions,
          backgroundColor: [
            '#395E66',
            '#387D7A',
            '#80C6C3'
          ],
          hoverOffset: 4
        }]
      };

  return (
    <div className='chartDisplay'>
        {/* <p>Your Daily Contributions (kg)</p> */}
        <Bar data = {barData} options={{ plugins: { legend: { display: false }, title: { display: true, text: 'Your Daily Contributions (kg)'} } }}/>
    </div>
  )
}

export default MainChart