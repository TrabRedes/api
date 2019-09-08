$(function(){
 //make connection
 var socket = io.connect('http://localhost:3333')
 //buttons and inputs
 var message = $("#message")
 var username = $("#username")
 var send_message = $("#send_message")
 var send_username = $("#send_username")
 var chatroom = $("#chatroom")
 var feedback = $("#feedback")
 let usernameVal = 'Anonymous'


 const messageEvent = (data, status)=>{
    data.time = new Date().toISOString();
    data.status = status
    socket.emit('save_on_database',data) 
    
}
 //Emit message
 send_message.click(function(){
    const data = {
        username: usernameVal, 
        message : message.val(),
        token:Math.random()*10000000 
    }
    messageEvent(data, 'enviada')
    socket.emit('new_message', {message : message.val(), token:data.token })
 })

 //Listen on new_message
 socket.on("new_message", (data) => {
     messageEvent(data, 'recebida')
     feedback.html('');
     message.val('');
     chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
 })

 //Emit a username
 send_username.click(function(){
     usernameVal = username.val();
     socket.emit('change_username', {username : username.val()})
 })

 //Emit typing
 message.bind("keypress", () => {
     socket.emit('typing')
 })

 //Listen on typing
 socket.on('typing', (data) => {
     feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
 }) 

});
