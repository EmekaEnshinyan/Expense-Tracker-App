import React from 'react';

export default function PaymentComplete(){
    return (
        <>
        <span>Payment Type: </span>
        <select name="payment-type">
            <option value="card">Debit</option>
            <option value="credit">Credit</option>
            <option value="cash">Cash</option>
            <option value="check">Check</option>
            <option value="other">Other (crypto, barter, etc.)</option>
        </select>
        </>
    )
}