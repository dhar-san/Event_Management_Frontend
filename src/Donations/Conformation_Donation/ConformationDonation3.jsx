import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTicketAlt, FaCreditCard, FaMobile, FaWallet, FaUniversity, FaCheck, FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaHeart } from 'react-icons/fa';

function ConformationDonation3() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showTicket, setShowTicket] = useState(false);

  const eventDetails = {
    title: "Environmental Conservation Fund",
    organizer: "Green Earth Foundation",
    venue: "Online Event",
    date: "5th April 2024",
    time: "All Day",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop"
  };

  const packages = [
    { id: 'platinum', name: 'Platinum Guardian', price: 20000, description: 'Plant 50 trees and support conservation' },
    { id: 'gold', name: 'Gold Guardian', price: 10000, description: 'Plant 25 trees and support conservation', popular: true },
    { id: 'silver', name: 'Silver Guardian', price: 5000, description: 'Plant 10 trees and support conservation' },
    { id: 'bronze', name: 'Bronze Guardian', price: 2000, description: 'Plant 5 trees and support conservation' }
  ];

  const paymentMethods = [
    { id: 'creditCard', name: 'Credit / Debit Card', icon: FaCreditCard },
    { id: 'upi', name: 'UPI', icon: FaMobile },
    { id: 'wallet', name: 'Wallet', icon: FaWallet },
    { id: 'netBanking', name: 'Net Banking', icon: FaUniversity }
  ];

  const handleConfirm = () => {
    if (selectedPackage && selectedPayment) {
      setShowTicket(true);
    }
  };

  if (showTicket) {
    return (
      <div className="ticket-page">
        <div className="ticket-container">
          <div className="ticket-header">
            <div className="success-icon">
              <FaCheck />
            </div>
            <h1>Donation Confirmed!</h1>
            <p>Your donation has been processed successfully</p>
          </div>

          <div className="ticket-card">
            <div className="ticket-header-section">
              <img src={eventDetails.image} alt={eventDetails.title} className="ticket-image" />
              <div className="ticket-info">
                <h2>{eventDetails.title}</h2>
                <p className="artist">{eventDetails.organizer}</p>
                <div className="ticket-details">
                  <div className="detail-row">
                    <FaCalendarAlt className="detail-icon" />
                    <span>{eventDetails.date}</span>
                  </div>
                  <div className="detail-row">
                    <FaClock className="detail-icon" />
                    <span>{eventDetails.time}</span>
                  </div>
                  <div className="detail-row">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>{eventDetails.venue}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ticket-body">
              <div className="ticket-section">
                <h3>Donation Details</h3>
                <div className="ticket-info-grid">
                  <div className="info-item">
                    <span className="label">Donation Tier:</span>
                    <span className="value">{packages.find(p => p.id === selectedPackage)?.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Amount:</span>
                    <span className="value">₹{packages.find(p => p.id === selectedPackage)?.price}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Donation ID:</span>
                    <span className="value">DN{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Payment Method:</span>
                    <span className="value">{paymentMethods.find(p => p.id === selectedPayment)?.name}</span>
                  </div>
                </div>
              </div>

              <div className="ticket-section">
                <h3>Impact Information</h3>
                <ul className="info-list">
                  <li>Your donation will help plant trees and conserve nature</li>
                  <li>You will receive updates on tree planting progress</li>
                  <li>Tax exemption certificate will be sent to your email</li>
                  <li>Thank you for helping protect our environment</li>
                </ul>
              </div>
            </div>

            <div className="ticket-footer">
              <div className="qr-code">
                <div className="qr-placeholder">
                  <div className="qr-squares">
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                  </div>
                  <p>Donation Receipt</p>
                </div>
              </div>
              <div className="ticket-actions">
                <button className="btn btn-secondary">Download Receipt</button>
                <button className="btn btn-primary">Share Impact</button>
              </div>
            </div>
          </div>

          <div className="thank-you-section">
            <h2>Thank You for Choosing PLANIT!</h2>
            <div className="rating-section">
              <h3>Rate Your Experience</h3>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="star-btn">⭐</button>
                ))}
              </div>
              <p>Your feedback helps us improve our service</p>
            </div>
          </div>

          <div className="action-buttons">
            <Link to="/donation_page" className="btn btn-primary">Browse More Events</Link>
            <Link to="/event_home_page" className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <Link to="/donationpage3" className="back-button">
            <FaArrowLeft className="back-icon" />
            Back to Event
          </Link>
          <h1>Confirm Your Donation</h1>
          <p>Please review your selection and proceed to payment</p>
        </div>

        <div className="confirmation-content">
          <div className="event-summary">
            <img src={eventDetails.image} alt={eventDetails.title} className="summary-image" />
            <div className="summary-info">
              <h2>{eventDetails.title}</h2>
              <p className="artist">{eventDetails.organizer}</p>
              <div className="summary-details">
                <div className="detail-row">
                  <FaCalendarAlt className="detail-icon" />
                  <span>{eventDetails.date}</span>
                </div>
                <div className="detail-row">
                  <FaClock className="detail-icon" />
                  <span>{eventDetails.time}</span>
                </div>
                <div className="detail-row">
                  <FaMapMarkerAlt className="detail-icon" />
                  <span>{eventDetails.venue}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-sections">
            <div className="package-selection">
              <h2>Select Donation Tier</h2>
              <div className="package-grid">
                {packages.map((pkg) => (
                  <div 
                    key={pkg.id} 
                    className={`package-card ${selectedPackage === pkg.id ? 'selected' : ''} ${pkg.popular ? 'popular' : ''}`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {pkg.popular && <div className="popular-badge">Most Popular</div>}
                    <div className="package-header">
                      <h3>{pkg.name}</h3>
                      <div className="package-price">₹{pkg.price}</div>
                    </div>
                    <p className="package-description">{pkg.description}</p>
                    <div className="package-selector">
                      <input 
                        type="radio" 
                        name="package" 
                        value={pkg.id}
                        checked={selectedPackage === pkg.id}
                        onChange={() => setSelectedPackage(pkg.id)}
                      />
                      <span className="radio-label">Select</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="payment-selection">
              <h2>Select Payment Method</h2>
              <div className="payment-grid">
                {paymentMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <div 
                      key={method.id} 
                      className={`payment-card ${selectedPayment === method.id ? 'selected' : ''}`}
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      <IconComponent className="payment-icon" />
                      <span className="payment-name">{method.name}</span>
                      <input 
                        type="radio" 
                        name="payment" 
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {selectedPackage && selectedPayment && (
            <div className="booking-summary">
              <h3>Donation Summary</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Donation Tier:</span>
                  <span>{packages.find(p => p.id === selectedPackage)?.name}</span>
                </div>
                <div className="summary-row">
                  <span>Amount:</span>
                  <span>₹{packages.find(p => p.id === selectedPackage)?.price}</span>
                </div>
                <div className="summary-row">
                  <span>Payment Method:</span>
                  <span>{paymentMethods.find(p => p.id === selectedPayment)?.name}</span>
                </div>
                <div className="summary-row total">
                  <span>Total Amount:</span>
                  <span>₹{packages.find(p => p.id === selectedPackage)?.price}</span>
                </div>
              </div>
            </div>
          )}

          <div className="confirmation-actions">
            <button 
              className={`btn btn-primary btn-large ${!selectedPackage || !selectedPayment ? 'disabled' : ''}`}
              onClick={handleConfirm}
              disabled={!selectedPackage || !selectedPayment}
            >
              <FaHeart className="btn-icon" />
              Confirm & Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConformationDonation3;
