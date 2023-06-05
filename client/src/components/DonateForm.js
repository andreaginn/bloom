import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const publicKey = 'pk_test_716da2842e8f4e69f9c1bbea45243a0bedec745ee9e4326e778ff8290723afba';
const secretKey = 'sk_test_c1e85dbb34c2bd384e238cefd30d5cbf69183e5a2f5c302832c367d9a6daaf07';
const apiUrl = 'https://api.getchange.io/api/v1/payments/checkout_link';

export default function DonateForm() {
    const [amount, setAmount] = useState('');
    const [nonprofitId, setNonprofitId] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');


    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleNonprofitIdChange = (event) => {
        setNonprofitId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestBody = JSON.stringify({
            amount: parseInt(amount),
            nonprofit_id: nonprofitId,
        });
        console.log(requestBody);

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${btoa(`${publicKey}:${secretKey}`)}`,
                },
                body: requestBody,
            });
            console.log(response);

            // Check if the request was successful
            if (response.ok) {
                const data = await response.json();
                // Handle the response data
                console.log(data);
                setPaymentStatus('Payment successful!');
            } else {
                // Handle the error response
                console.error('Error:', response.status);
                setPaymentStatus('Payment canceled or failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            setPaymentStatus('An error occurred while processing the payment.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount" value={amount} onChange={handleAmountChange}
                    />
                </FormControl >
                <br />
                <FormControl fullWidth>
                    <InputLabel>Choose a Nonprofit</InputLabel>
                    <Select value={nonprofitId} onChange={handleNonprofitIdChange}>
                        <MenuItem value={'n_MUjmT5yhdf4smx1ykRwO2ovt'}>One Tree Planted</MenuItem>
                        <MenuItem value={'n_RbL5ITlPzu2fOR1651WbBtaX'}>Carbon Endowment</MenuItem>
                        <MenuItem value={'n_vxSQOQ6Fs7Z3slI28qiwPbZA'}>Carbon180</MenuItem>
                        <MenuItem value={'n_2FvWfScCxgEzOwLaqG7M24Ch'}>Clean Air Task Force</MenuItem>
                        <MenuItem value={'n_WRyDSf0PwSFreaEPpJy5Gchj'}>Rainforest Foundation</MenuItem>
                        <MenuItem value={'n_iDuzhP92BlkrKLJBUodnrqIs'}>Climate Ride</MenuItem>
                    </Select>
                    <button type="submit">Offset</button>
                </FormControl >
            </form>
            {paymentStatus && <p>{paymentStatus}</p>}
        </div>
    );
};