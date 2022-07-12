import React from "react"
import Header from "./components/Header"
import Calendar from "./components/Calendar"
import Payment from "./components/Payment"
import Amount from "./components/Amount"



export default function App() {
    return (
        <div className="container">
            <Header />
            <div>
                <br />
                <Calendar />
            </div>
            <div>
            <br />
                <Payment />
                </div>
            <div>
                <br />
                <Amount />
            </div>

        </div>
    )
}