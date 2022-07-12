import React from "react";

export default function ExpenseOutput() {
  return (
    <>
      <form>
        <div>
          <table>
            <tr>
              <th id="type" class="type">
                Payment Type
              </th>
              <th id="item">Item</th>
              <th id="date">Date</th>
              <th id="amount">Amount</th>
            </tr>
          </table>
        </div>
      </form>
    </>
  );
}
