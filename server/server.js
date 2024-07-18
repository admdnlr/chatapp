const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const socketSetup = require('./socket');

const app = express();
connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

const server = app.listen(3000, () => console.log('Server running on port 3000'));

socketSetup(server);
