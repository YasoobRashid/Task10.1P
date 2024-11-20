import React from 'react';
import './App.css';
import SubscriberForm from './SubscriberForm';
import Footer from './Footer.js';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
    return (
        <div className="App">
            <SubscriberForm />
            <Footer />
        </div>
    );
}

export default App;