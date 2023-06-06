import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import '../styles/ImpactModal.css'

import isNumeric from '../utils/isNumeric'
import {GET_ACTIONS} from '../utils/queries'
import {useMutation} from '@apollo/client'
import {UPDATE_IMPACT} from '../utils/mutations'


const ImpactModal = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedAction, setSelectedAction] = useState('')
    const [actionList, setActionList] = useState('')
    const [quantity, setQuantity] = useState('')
    
    const [updateImpact, {error}] = useMutation(UPDATE_IMPACT)

    const { loading, data } = useQuery(GET_ACTIONS,{
        variables: {category: selectedCategory}
    });

    useEffect(() => {
        if (!loading) {
          setActionList(data?.actions || []);
        }
      }, [loading, data]);

    // Place holder category options for testing, eventually these will be pulled from DB

    // console.log('Impact Modal Activated')
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        // console.log(category)
        setSelectedCategory(category)   
        setSelectedAction('')
    };

    const handleActionChange = (event) => {
        const action = event.target.value;
        console.log(selectedAction)
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
    const logImpactItem = (event) => {
        event.preventDefault(); 
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

       console.log('*****selectedActionObj**********')
       console.log(selectedActionObj)
        const carbonPerUnit = selectedActionObj.carbonPerUnit;
        const actionCategory = selectedActionObj.category;

        calcDailyImpact(actionCategory,carbonPerUnit,quantity);
        
        //Call external function that takes these inputs, calculates total contribution, and updates user
    }

    const calcDailyImpact = async (category, carbonPerUnit, quantity) => {
        console.log('calcDailyImpact Called')
        const date = new Date().toLocaleDateString();
        const totalCarbon = carbonPerUnit * quantity;
        const actionInput = {
            date: date,
            category: category,
            carbonContribution: totalCarbon 
            
        }
        console.log(actionInput)
        try{
            await updateImpact({
                variables: {
                    input: actionInput}
            })
            if (error) {
                throw new Error('something went wrong!');
              }
              console.log('Impact Logged')
        } catch(err){
            console.log(err)
        }
    
    
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
                        <option value = "">Select</option>
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
                        <option value = "">Select</option>
                        {actionList.map((action) => (
                            <option key = {action.name} value = {action.name}>
                                {action.name} ({action.units})
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

