import React from 'react';

export default function Calendar(){
    return (
        <div>
            <form method="post">
            
            <select name="weekday" className="day">
                <option selected="selected" value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
            <input type="text" name="date" className="input"></input>
            </form>

        </div>
    )
}