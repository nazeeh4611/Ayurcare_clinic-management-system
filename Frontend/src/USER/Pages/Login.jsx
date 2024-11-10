import React, { useState } from 'react';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);
    const valid = validatePhoneNumber(number);
    setIsValid(valid);
    setError(valid ? '' : 'Please enter a valid phone number');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log('Submitting phone number:', phoneNumber);
    } else {
      setError('Please enter a valid phone number before submitting');
    }
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Login</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} className="login-form">
              <p>Enter your phone number to log in</p>
              <div className="input-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={!isValid && phoneNumber ? 'invalid' : ''}
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" disabled={!isValid} className="btn btn-primary">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
