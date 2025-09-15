import React from "react";
import { Link } from "react-router-dom";


function Auction1() {
  return (
    <div>
      <h1>🏆 GRAND CHARITY AUCTION 2026 – Bid for a Cause</h1>
      <div className="hiphop_details">
        <div className="image_containerhiphop">
          <img src={} alt="Charity Auction Event" />
        </div>
        <p className="event_description">
          Join us for an evening of excitement and generosity!  
          Discover rare collectibles, fine art, and unique experiences up for bid.  
          Every winning bid supports community development and essential services.
        </p>
        <p className="event_info">
          📅 Date: 20 November 2026  
          📍 Venue: Grand Convention Hall, City Center  
          🕖 Time: 6:00 PM onward
        </p>
        <Link to="/register" className="register_button">
          Register to Bid
        </Link>
      </div>
    </div>
  );
}

export default Auction1;
