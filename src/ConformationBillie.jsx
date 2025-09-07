import React from 'react'
import { Link } from 'react-router-dom'

function ConformationBillie() {
  return (
     <div>
      <div className="conformHiphop">
      <h1>CONFIRMATION PAGE</h1>
      <h5>PLEASE VERIFY CONFIRMATION & PACKAGE</h5>
      <br />

      <h3>Select Package</h3>
      <form>
    <ol>
  <li>
    <label>
      <input type="radio" name="package" value="seating" /> Seating Rs.99999
    </label>
  </li>
  <li>
   <b> Non Seating</b>
    <ol className="h" type="a">
      <li>
        <label>
          <input type="radio" name="package" value="platinum" /> Platinum Rs.79000
        </label>
      </li>
      <li>
        <label>
          <input type="radio" name="package" value="gold" /> Gold Rs.49000
        </label>
      </li>
      <li>
        <label>
          <input type="radio" name="package" value="bronze" /> Bronze Rs.19999
        </label>
      </li>
    </ol>
  </li>
</ol>     
      </form>
      <br />

      <h3>Select Payment Method</h3>
      <form>
        <input type="radio" name="payment" value="creditCard" /> Credit / Debit Card <br />
        <input type="radio" name="payment" value="upi" /> UPI <br />
        <input type="radio" name="payment" value="wallet" /> Wallet <br />
        <input type="radio" name="payment" value="netBanking" /> Net Banking <br />
      </form>
      <br />

      <Link to="/payment" className="confirmBtn">
        CONFIRM & PROCEED
      </Link>
    </div>
    </div>
      
    
  )
}

export default ConformationBillie
