import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import '../styles/ImpactModal.css'
import calcDailyImpact from '../utils/calcDailyImpact'
import isNumeric from '../utils/isNumeric'
import {GET_ACTIONS} from '../utils/queries'


const ImpactModal = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedAction, setSelectedAction] = useState('')
    const [actionList, setActionList] = useState('')
    const [quantity, setQuantity] = useState('')
    
    const { loading, data } = useQuery(GET_ACTIONS,{
        variables: {category: selectedCategory}
    });

    const actions = data?.actions || [];

    useEffect(() => {
        if (!loading) {
          setActionList(data?.actions || []);
        }
      }, [loading, data]);

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
        console.log(actionList)
        // action = actionList[action];
        setSelectedAction(action);
    };    

    const handleQuantityInput = (event) => {
        const quantity = event.target.value
        setQuantity(quantity)
    }

    // This needs to take the name and quantity from the form, and the carbon from Action List
    // Needs to query user to get daily impact and add to that
    // If no daily impact exists for todays date then create one
    const logImpactItem = () => {
        if(!selectedAction || !quantity){
            console.log('Please select an action or enter a quantity')
            return
        }

        if(!isNumeric(quantity)){
            console.log('Please make sure the quantity is a valid number')
            return
        }

        const selectedActionObj = actionList.find((action) => action.name === selectedAction)
        if(!selectedActionObj){
            console.log('Selected action not found')
            return
        }

       
        const carbonPerUnit = selectedActionObj.carbonPerUnit;
        const actionCategory = selectedActionObj.category;

        calcDailyImpact(actionCategory,carbonPerUnit,quantity);
        //Call external function that takes these inputs, calculates total contribution, and updates user
    }

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
                        <option value = "Food">Food</option>
                    </select>
                    
                    {loading ? ( <p>Loading...</p>) :
                    (

                    selectedCategory && (
                        <div>
                        <label>Action</label>
                        <select value = {selectedAction} onChange = {handleActionChange}>
                        {actionList.map((action) => (
                            <option key = {action.name} value = {action.name}>
                                <p>{action.name} ({action.units})</p>
                            </option>
                        ))}
                        </select>
                        <label>Quantity</label>
                        <div className = "quantityInput">
                        <input type = "text" value = {quantity} onChange = {handleQuantityInput}></input>
                        </div>
                     </div>
                    ))}
                    <button onClick = {logImpactItem} >Log Item</button>
                    </form>
                    
                 

                </div>  
            </div>
      
        </div>
        
      )
}

export default ImpactModal

