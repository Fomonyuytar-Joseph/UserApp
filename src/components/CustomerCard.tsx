import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../app/features/customerSlice';

interface CustomerCardType{

    id:string;
    name:string;
    food:string[]

}

function CustomerCard({id ,name ,food}: CustomerCardType ) {
    const dispatch = useDispatch();
    const [customerFoodInput , setCustomerFoodInput] = useState<string>('')
  return (
    <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
              <div className="customer-food">
                {
                    food.map((chop)=>{
                        return <p>{chop}</p>
                    })
                }
              </div>
              <div className="customer-food-input-container">
                <input 
                value={customerFoodInput}
                onChange={(e)=>setCustomerFoodInput(e.target.value)}
                
                
                
                />
                <button onClick={
                    
                   ()=>  {
                    if(!customerFoodInput) return ;

                   dispatch(addFoodToCustomer({
                    id,
                    food:customerFoodInput

                }))

                setCustomerFoodInput('')
            }
                } >Add</button>
              </div>
            </div>
          </div>
  )
}

export default CustomerCard