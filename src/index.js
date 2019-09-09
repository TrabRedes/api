require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRouter = require('./routers/authRouter');
const rootRouter = require ('./routers/root');
const dashboardRouter = require ('./routers/dashboardRouter');
const Message = require('./models/message');

const PORT = process.env.PORT || '3000'
const app = express();
const http = require('http').Server(app);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/',dashboardRouter)
app.use('/',rootRouter );

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});
const io = require('socket.io')(http);
io.on('connection', (socket) => {
	console.log('New user connected')

	//default username
	socket.username = "Anonymous"

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', data);
    })

    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })
    socket.on('save_on_database', (data) => {
        Message.create(data);
        io.sockets.emit('send_to_dashboard', data);
    })
})