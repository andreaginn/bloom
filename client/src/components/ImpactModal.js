import React, {useState} from 'react'
import { useQuery } from '@apollo/client';
import '../styles/ImpactModal.css'

import {GET_ACTIONS} from '../utils/queries'

const ImpactModal = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedAction, setSelectedAction] = useState('')
    const [actionList, setActionList] = useState('')
    
    const { loading, data } = useQuery(GET_ACTIONS,{
        variables: {category: selectedCategory.toLowerCase}
    });

    const actions = data?.actions || [];
    if(!loading){
        console.log(actions)
    }
    
    // Place holder category options for testing, eventually these will be pulled from DB
    const categories = {
        Travel: ["Driving", "Flying", "Train"],
        Energy: ["Heating", "TV", "Lighting"],
        Food: ["Vegetables", "Milk","Eggs"]
    }

    console.log('Impact Modal Activated')
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        console.log(category)
        setSelectedCategory(category)   
        setSelectedAction('')
    };

    const handleActionChange = (event) => {
        const action = event.target.value;
        setSelectedAction(action);
    };    

    const handleClose = () => {
        props.onClose()
      }
    return (
    
        <div>
            <div className = "impactModal">
                <div className = "impactOverlay" onClick = {handleClose}></div>
                    <div className = "impactModalContent">
                    <h2>Log Todays Impact</h2>
                    <form>
                    <label>Pick a Category</label>
                    <select onChange = {handleCategoryChange}>
                        <option value = "Travel">Transportation</option>
                        <option value = "Energy">Energy</option>
                        <option value = "Food">Food Waste</option>
                    </select>
                    
                    {selectedCategory && (
                        <div>
                        <label>Action</label>
                        <select value = {selectedAction} onChange = {handleActionChange}>
                        {categories[selectedCategory].map((action) => (
                            <option key = {action} value = {action}>
                                {action}
                            </option>
                        ))}
                        </select>
                     </div>
                    )}
                    <button type="submit">Submit</button>
                    </form>
                    
                 

                </div>  
            </div>
      
        </div>
        
      )
}

export default ImpactModal