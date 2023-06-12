import React, {useState,useEffect} from 'react'
import Button from './Button'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import isNumeric from '../utils/isNumeric';
import {useMutation} from '@apollo/client';
import { UPDATE_ELECTRICITY_BILL } from '../utils/mutations';



const ElectricityBill = (props) => {
    const [electricityBillForm, setElectricityBillForm] = useState(true)
    const [electricityCost, setElectricityCost] = useState("")
    const [electricityBillDisplay, setElectricityBillDisplay] = useState('0')
    const [updateElectricityBill, {error}] = useMutation(UPDATE_ELECTRICITY_BILL);

    const triggerElectricityForm = async () => {
        if(electricityBillForm === false){
          setElectricityBillForm(true)
        }
        else{
          setElectricityBillForm(false)
          // await refetch()
          // setWeeklyGoal(userData.weeklyGoal.goalText)
        }
      }

      useEffect(() => {
        if (props.cost) {
          setElectricityBillDisplay(props.cost)
        }
        
      }, []);

    const triggerUpdateElectricity = async(electricityCost) => {
        console.log("Trigger Update Electricity Cost")
        console.log(electricityCost)
        if(!electricityCost.trim()){
            console.log('Please enter an amount')
            return
        }

        if(!isNumeric(electricityCost)){
            console.log('Please make sure the quantity is a valid number')
            return
        }   

        electricityCost = electricityCost * 1;

        try{
            await updateElectricityBill({
                variables: {
                    electricityBill: electricityCost
                }
            })
            
            if (error) {
                throw new Error('Something Went Wrong')
            }
            setElectricityBillDisplay(electricityCost*1)
            setElectricityCost(``)
        } catch(err){
            console.log(err)
        }
        


    }
    
  return (

    
    <div className="p-3 text-center electricityBill items-center">
        {!electricityBillForm &&
            <>
           
            
            <p className = " text-2xl md:text-3xl font-bold text-white text-center pt-2 pb-3">Add Your Average Electricity Bill</p>
             <FormControl >
             <InputLabel htmlFor="my-input">Monthly Bill</InputLabel>
             <OutlinedInput
                         id="outlined-adornment-amount"
                         
                         label="Electricity Bill" 
                         value = {electricityCost}
                         onChange = {(event) => setElectricityCost(event.target.value)}
                     />
                 <button className = "impactButton" type="submit" onClick = {() => {triggerUpdateElectricity(electricityCost); triggerElectricityForm();}}>Save</button>
             </FormControl>
             </>
            }
            {electricityBillForm &&
            <>
            <p className = " text-2xl md:text-3xl font-bold  text-white text-center pt-2 pb-3">Your Average Electricity Bill</p>
            <p className = " text-3xl md:text-4xl font-bold text-slate-700 text-center pb-1">{electricityBillDisplay}$ / Month</p>
            <Button content = {'Update'} onClick = {triggerElectricityForm}/>
            </>
            }
        
    </div>
  )
}

export default ElectricityBill