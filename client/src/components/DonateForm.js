import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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
            amount: parseInt(amount * 100),
            cancel_url: 'http://localhost:3000/Cancel',
            nonprofit_id: nonprofitId,
            success_url: 'http://localhost:3000/Success',
        });
        //console.log(requestBody);

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${btoa(`${publicKey}:${secretKey}`)}`,
                },
                body: requestBody,
            });
            //   console.log(response);

            // Check if the request was successful
            if (response.ok) {
                const data = await response.json();
                // Handle the response data
                // console.log(data);
                window.location.replace(data.checkout_url);
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
        <div className="mx-4">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 350,
                        height: 350,
                    },
                }}
            >
                <Paper elevation={3}>
                    <div className="p-3 mb-2 text-xl font-light text-slate-700 leading-snug text-center">We suggest $12.50<br />to offset 1000 kg</div>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth className="px-3">
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Amount" value={amount} onChange={handleAmountChange}
                            />
                        </FormControl >
                        <br />
                        <FormControl fullWidth className="px-3 my-4">
                            <InputLabel htmlFor="outlined-adornment-amount">Choose a Nonprofit</InputLabel>
                            <Select value={nonprofitId} onChange={handleNonprofitIdChange}>
                                <MenuItem value={'n_MUjmT5yhdf4smx1ykRwO2ovt'}>One Tree Planted</MenuItem>
                                <MenuItem value={'n_pfLl2qqlJlD3aptxtNU1uyRQ'}>Coming Clean</MenuItem>
                                <MenuItem value={'n_vxSQOQ6Fs7Z3slI28qiwPbZA'}>Carbon180</MenuItem>
                                <MenuItem value={'n_2FvWfScCxgEzOwLaqG7M24Ch'}>Clean Air Task Force</MenuItem>
                                <MenuItem value={'n_WRyDSf0PwSFreaEPpJy5Gchj'}>Rainforest Foundation</MenuItem>
                                <MenuItem value={'n_iDuzhP92BlkrKLJBUodnrqIs'}>Climate Ride</MenuItem>
                            </Select>

                            <button className="btn-primary mt-4" type="submit">Offset</button>
                        </FormControl >
                    </form>
                    <div>
                        {paymentStatus && <p>{paymentStatus}</p>}
                    </div>
                </Paper>
            </Box>
        </div>
    );
};