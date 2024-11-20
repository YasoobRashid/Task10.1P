import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

const SubscriberForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/subscribe', { email }); 
            console.log('Server response: ', response.data);
            alert('Thank you for signing up!');
        } catch (error) {
            console.error('Error signing up:', error.response?.data || error.message);
            alert('Failed to sign up. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="horizontal-container">
                <h1 className="custom-heading">SIGN UP FOR OUR DAILY INSIDER</h1>
                <form id="subscribeForm" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default SubscriberForm;
