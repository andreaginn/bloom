import React, {useState} from 'react'
import '../styles/ImpactModal.css'


const ImpactModal = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedAction, setSelectedAction] = useState('')

    // Place holder category options for testing, eventually these will be pulled from DB
    const categories = {
        Transportation: ["Driving", "Flying", "Train"],
        Energy: ["Heating", "TV", "Lighting"],
        FoodWaste: ["Vegetables", "Milk","Eggs"]
    }


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
            <div className = "modal">
                <div className = "overlay" onClick = {handleClose}></div>
                    <div className = {`modal-content`}>
                    <h2>Log Todays Impact</h2>
                    <form>
                    <label>Pick a Category</label>
                    <select onChange = {handleCategoryChange}>
                        <option value = "Transportation">Transportation</option>
                        <option value = "Energy">Energy</option>
                        <option value = "FoodWaste">Food Waste</option>
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