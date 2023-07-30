import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client'
import { OFFSET_TOTAL_IMPACT } from '../utils/mutations.js'

const Success = () => {
    const [offsetTotalImpact, {error}] = useMutation(OFFSET_TOTAL_IMPACT);

    useEffect(() => {
        setTimeout(() => {
            window.location.assign('/Profile');
        }, 5000);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //Success page will have donation amount in url parameters
    const urlParams = new URLSearchParams(window.location.search);
    const amount = urlParams.get('amount');
    console.log(`amount is ${amount}`)

    //Call offset mutation to reduce users total impact
    const handleOffset = async (amount) => {
    let offsetAmount = Number(amount)
    const offsetInput = {
        donationAmount: offsetAmount
    }
    try{
        await offsetTotalImpact({
            variables: {
                input: offsetInput}
        })
        if (error) {
            throw new Error('Something went wrong with the carbon offset!');
          }
          console.log('Total impact has been offset')

    } catch(err){
        console.error(err)
        
    }
    }


    useEffect(() => {
        if(amount){
            handleOffset(amount)
            }
    },[]);
    
 

    return (
        <>
            <div className="grid grid-cols-1 text-center place-items-center mt-5">
                <div className="text-7xl font-bold text-slate-700">Success!</div>
                <div className="mt-2 mb-2 text-2xl text-slate-600">Thank you for your donation.</div>
                <div className="text-sm text-slate-600 font-light">You will now be redirected to the donate page.</div>
            </div>
        </>
    )
}

export default Success;

