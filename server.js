const express = require("express");
const axios = require("axios")
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get('/', (req,res) => {
    res.send("Hello from nyc-mta-status WebApp");
});

app.post('/api/users', (req,res) => {
    res.send(req.body);
});

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log("Server has started")
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

client.messages
    .create({
        body: 'Hello from Twilio',
        from: '+18666091146',
        to: '+18777804236'
    })
    .then(message => console.log(message.sid))
    .done();
