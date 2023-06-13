import React, {useState, useEffect} from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import reduceFootprints from '../data/reduceFootprints';
import {useMutation} from '@apollo/client';
import { UPDATE_GOAL } from '../utils/mutations';






const WeeklyGoal = (props) => {
const [suggestedGoals, setSuggestedGoals] = useState([]);
const [goal, setGoal] = useState('');
const [updateGoal, {error}] = useMutation(UPDATE_GOAL);

const selectSuggestedGoals = () => {
    const randomGoals = [];
    const reduceFootprintsCopy = [...reduceFootprints];

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * reduceFootprintsCopy.length);
        randomGoals.push(reduceFootprintsCopy.splice(randomIndex, 1)[0].advice);
    }

    setSuggestedGoals(randomGoals);
};

const triggerUpdateGoal = async (goal) => {
    console.log("Trigger Update Goal ")
    console.log(goal)
    if(goal.length > 0){
    try{
        await updateGoal({
            variables: {
                goalText: goal
            }
        })
        if (error) {
            throw new Error('Something Went Wrong')
        }
        setGoal('')
        props.onUpdateGoal(goal)
    } catch(err){
        console.log(err)
    }
}
}

useEffect(() => {
    selectSuggestedGoals();
}, []);

  return (
    <div className = "weeklyGoal">
      
            <FormControl>
            <InputLabel htmlFor="my-input">Set New Goal</InputLabel>
            <OutlinedInput
                        id="outlined-adornment-amount"
                        label="Weekly Goal" 
                        value = {goal}
                        onChange = {(event) => setGoal(event.target.value)}
                    />
                <button className = "impactButton" type="submit" onClick = {() => {props.onClick(); triggerUpdateGoal(goal); }}>Save Goal</button>
            </FormControl>
            <h3>Here are some suggestions!</h3>
            {suggestedGoals.map((goal, index) => (
                <p>{index + 1}. {goal}</p>
            ))
            }
           
         
    </div>
  )

 
}


export default WeeklyGoal