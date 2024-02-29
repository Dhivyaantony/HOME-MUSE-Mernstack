const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dhivyaantony778@gmail.com',
        pass: 'jesus4u@143'
    }
});

// Function to send an email
const sendEmail = async (recipient, subject, text) => {
    try {
        // Send mail with defined transport objectconst { sendEmail } = require('./emailController');

// Example usage
sendEmail('johnjetlee224@gmail.com', 'Reminder', 'Your reminder message goes here');
        const info = await transporter.sendMail({
            from: 'Dhivya <dhivyaantony778@gmail.com>',
            to: recipient,
            subject: subject,
            text: hello
        });

        console.log('Email sent:', info.messageId);
        return info.messageId;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendEmail };
