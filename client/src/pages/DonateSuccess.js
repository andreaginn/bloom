import React, { useEffect } from 'react';

const Success = () => {

    useEffect(() => {
        setTimeout(() => {
            window.location.assign('/Donate');
        }, 5000);
    });

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