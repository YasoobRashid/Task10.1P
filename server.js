const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); 

async function sendMail(toEmail) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yasoobjavaid1@gmail.com',
            pass: 'eigbnvbpxawksihu', 
        },
    });

    const mailOptions = {
        from: 'yasoobjavaid1@gmail.com',
        to: toEmail,
        subject: 'Welcome to YasoobDev@deakin',
        text: 'Welcome to YasoobDev@deakin! ',
    };

    try {
        
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    try {
        await sendMail(email);
        res.json({ message: 'Welcome email sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending welcome email.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
