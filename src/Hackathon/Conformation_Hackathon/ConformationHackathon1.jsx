import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTicketAlt, FaCreditCard, FaMobile, FaWallet, FaUniversity, FaCheck, FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaCode } from 'react-icons/fa';

function ConformationHackathon1() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showTicket, setShowTicket] = useState(false);

  const eventDetails = {
    title: "INNOVATE 2026 – HACKATHON CHALLENGE",
    organizer: "Tech Innovation Hub",
    venue: "Anna University, Chennai",
    date: "20th – 21st July 2026",
    time: "24-Hour Coding Marathon",
    image: "https://i.pinimg.com/1200x/c1/f9/42/c1f94250264c7c3f4f898f92a9b87e92.jpg"
  };

  const packages = [
    { id: 'team', name: 'Team Registration', price: 2000, description: 'Per team (2-4 members)' },
    { id: 'individual', name: 'Individual', price: 800, description: 'Single participant', popular: true },
    { id: 'student', name: 'Student', price: 500, description: 'With valid student ID' },
    { id: 'early', name: 'Early Bird', price: 1500, description: 'Limited time offer' }
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
            <h1>Registration Confirmed!</h1>
            <p>Your hackathon registration has been confirmed successfully</p>
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
                <h3>Registration Details</h3>
                <div className="ticket-info-grid">
                  <div className="info-item">
                    <span className="label">Registration Type:</span>
                    <span className="value">{packages.find(p => p.id === selectedPackage)?.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Price:</span>
                    <span className="value">₹{packages.find(p => p.id === selectedPackage)?.price}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Registration ID:</span>
                    <span className="value">HK{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Payment Method:</span>
                    <span className="value">{paymentMethods.find(p => p.id === selectedPayment)?.name}</span>
                  </div>
                </div>
              </div>

              <div className="ticket-section">
                <h3>Important Information</h3>
                <ul className="info-list">
                  <li>Please arrive 1 hour before the hackathon starts</li>
                  <li>Valid ID proof is required for entry</li>
                  <li>Bring your laptop and necessary accessories</li>
                  <li>Keep this registration confirmation safe</li>
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
                  <p>Scan for entry</p>
                </div>
              </div>
              <div className="ticket-actions">
                <button className="btn btn-secondary">Download PDF</button>
                <button className="btn btn-primary">Share Registration</button>
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
            <Link to="/hackathon_page" className="btn btn-primary">Browse More Events</Link>
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
          <Link to="/hackathon_fest1" className="back-button">
            <FaArrowLeft className="back-icon" />
            Back to Event
          </Link>
          <h1>Confirm Your Registration</h1>
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
              <h2>Select Registration Type</h2>
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
              <h3>Registration Summary</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Registration Type:</span>
                  <span>{packages.find(p => p.id === selectedPackage)?.name}</span>
                </div>
                <div className="summary-row">
                  <span>Price:</span>
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
              <FaTicketAlt className="btn-icon" />
              Confirm & Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConformationHackathon1;