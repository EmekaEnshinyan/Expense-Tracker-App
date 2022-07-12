import React from 'react';

export default function Calendar(){
    return (
        <div>
            <form method="post">
            <div>
            <span>Date: </span><input type="date" name="date" className="date"></input>
            </div>
            </form>

        </div>
    )
}