import React, {useState} from 'react'
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

    const triggerUpdateElectricity = async(electricityCost) => {
        console.log("Trigger Update Electricity Cost")
        console.log(electricityCost)
        if(electricityCost.length <= 0){
            console.log('Please enter an amount')
            return
        }

        if(!isNumeric(electricityCost)){
            console.log('Please make sure the quantity is a valid number')
            return
        }

        try{
            await updateElectricityBill({
                variables: {
                    electricityBill: electricityCost
                }
            })
            if (error) {
                throw new Error('Something Went Wrong')
            }
            setElectricityCost("")
        } catch(err){
            console.log(err)
        }
        


    }
    
  return (

    
    <div className="mt-5 text-center electricityBill">
        {!electricityBillForm &&
            <>
           
            
            <p className = "text-3xl font-bold text-white text-center pb-3">Add Your Average Electricity Bill</p>
             <FormControl>
             <InputLabel htmlFor="my-input">Monthly Bill</InputLabel>
             <OutlinedInput
                         id="outlined-adornment-amount"
                         
                         label="Electricity Bill" 
                         value = {electricityCost}
                         onChange = {(event) => setElectricityCost(event.target.value)}
                     />
                 <button className = "impactButton" type="submit" onClick = {() => {triggerElectricityForm(); triggerUpdateElectricity(electricityCost)}}>Save</button>
             </FormControl>
             </>
            }
            {electricityBillForm &&
            <>
            <p className = "text-3xl font-bold text-white text-center pb-3">Your Average Electricity Bill</p>
            
            <p className = "text-3xl font-bold text-orange-400 text-center pb-1">{props.cost}$ / Month</p>
            <Button content = {'Update'} onClick = {triggerElectricityForm}/>
            </>
            }
        
    </div>
  )
}

export default ElectricityBill