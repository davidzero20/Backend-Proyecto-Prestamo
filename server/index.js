const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

//Setting
app.set('port', process.env.PORT || 3000);

// Configura CORS para permitir solicitudes desde tu dominio de frontend
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200, // Algunos navegadores antiguos (IE11, varios SmartTVs) requieren 200 OK para trabajar con CORS
  };

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

//Routes
const customersRoutes = require('./routes/customers.routes');
app.use('/api/customers', customersRoutes);

const loanRoutes = require('./routes/loan.routes');
app.use('/api/loan', loanRoutes);

const paymentRoutes = require('./routes/payment.routes');
app.use('/api/payment', paymentRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/api/user', userRoutes);

//Start the server
app.listen(app.get('port'), () => {
    console.log('Listening on port 3000!', app.get('port'));
});