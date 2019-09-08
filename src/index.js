require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRouter = require('./routers/authRouter');
const rootRouter = require ('./routers/root')
const PORT = process.env.PORT || '3000'
const app = express();
const http = require('http').Server(app);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/',rootRouter );

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});
const io = require('socket.io')(http);
io.on('connection',(socket)=>{
    console.log('conectado')
})