const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();

const masterAdminRoutes = require('./routes/MasterAdmin/masterAdminRoutes');
const collegeRoutes = require('./routes/MasterAdmin/collegeRoutes');
const authRoutes = require('./routes/authRoutes');
const eventRouter = require('./routes/eventRoutes');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/master', masterAdminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/event', eventRouter);

const db = process.env.DATABASE.replace('<DATABASE>', 'masterAdmin');

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
