require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// connect to Mongo
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/devpaths')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

// routes
app.use('/api/roadmaps', require('./routes/roadmaps'));
app.use('/api/resources', require('./routes/resources'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/seed', require('./routes/seed'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
