import React from 'react'
import { Link } from 'react-router-dom'

function ConformationFoodFest5() {
  return (
    <div className="conformHiphop">
          <h1>CONFIRMATION PAGE</h1>
          <h5>PLEASE VERIFY CONFIRMATION & PACKAGE</h5>
          <br />
          <form>
            <h4>🍇 Reserve & Pour! 🍔</h4>
            <input type='radio' placeholder='RS:2500'/>  RS:3499
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
  
  )
}

export default ConformationFoodFest5
