const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const saleRoute = require('./routes/saleRoute');
const spendDataRoutes = require('./routes/spendDataRoutes');
const adminRoutes = require('./routes/adminRoutes');


const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); 

app.use(bodyParser.json());

app.use('/api',userRoutes);
app.use('/api', transactionRoutes);
app.use('/api',dashboardRoutes);
app.use('/api', saleRoute);
app.use('/api', spendDataRoutes);
app.use('/api',adminRoutes);



sequelize.sync().then(() => {

    console.log('Database synced');

    
   app.listen(5000, () => console.log('server running on port 5000'));
});
