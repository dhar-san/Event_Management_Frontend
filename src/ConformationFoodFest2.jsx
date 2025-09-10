import React from 'react'
import { Form, Link } from 'react-router-dom'


function ConformationFoodFest() {
  return (
      <div className="conformHiphop">
          <h1>CONFIRMATION PAGE</h1>
          <h5>PLEASE VERIFY CONFIRMATION & PACKAGE</h5>
          <br />
          <form>
            <h4 className='Madchef'>Lock Your Spot🔒,Taste the Hot 🌶️</h4>
            <input type='radio' placeholder='RS:2500'/>  RS:3500
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

export default ConformationFoodFest
