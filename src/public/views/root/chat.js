$(function(){
    //make connection
<<<<<<< HEAD
    var socket = io.connect('http://localhost:3333')
    //buttons and inputs
    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")
    var feedback = $("#feedback")
    let usernameVal = 'Anonymous'
    
    
    
    /**
     * data = {
     *   userToken;
     *   tokenMessage: implementada no futuro
     *   type: received|sent 
     * }
     */
 const messageEvent = (data, status)=>{
    data.time = new Date().toISOString();
    data.status = status
    debugger
    socket.emit('save_on_database',data) 
    
}
=======
 var socket = io.connect('http://localhost:3333')

 //buttons and inputs
 var message = $("#message")
 var username = $("#username")
 var send_message = $("#send_message")
 var send_username = $("#send_username")
 var chatroom = $("#chatroom")
 var feedback = $("#feedback")
 var emitName = socket.emit('change_username',{username:'Mauricio'})
>>>>>>> parent of 2658f21... chat funcionando com salvamento de mensagens no banco
 //Emit message
 send_message.click(function(){
     socket.emit('new_message', {message : message.val()})
 })

 //Listen on new_message
 socket.on("new_message", (data) => {
     feedback.html('');
     message.val('');
     chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
 })

 //Emit a username
 send_username.click(function(){
     socket.emit('change_username', {username : username.val()})
 })

 //Emit typing
 message.bind("keypress", () => {
     socket.emit('typing')
 })

 //Listen on typing
 socket.on('typing', (data) => {
     feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
<<<<<<< HEAD
 }) 

});
=======
 })
});
>>>>>>> parent of 2658f21... chat funcionando com salvamento de mensagens no banco
