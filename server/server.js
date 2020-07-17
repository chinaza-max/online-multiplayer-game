const http=require('http');
const express=require('express');
const socketio=require('socket.io');
const { text } = require('express');
const interactive_game=require('./game');
const app=express();
const clientpath=`${__dirname}/../client`;
app.use(express.static(clientpath));
const server=http.createServer(app);

const io=socketio(server);
let waitingPlayer=null;
let users={};
let  host_name=null;
let  host_sock=null;
io.on('connection',(sock)=>{

console.log('some one connected')
//sio.emit('message',users);
/*  sock.on('message',(text)=>{
    io.emit('message',text);
}); 
// A listener to collect name of connected people */
sock.on('message2',(text2)=>{
    io.emit('message2',text2);
    users[text2]=sock;
}) 
//To remove selected li element 
sock.on('remove',(text)=>{
    io.emit('remove',text)
})    
//  to clear play box after win

sock.on('message',(text,hosterName)=>{
    host_sock=sock;
    const second_player=text;
    host_name=hosterName;
    new interactive_game(host_sock,users[second_player]);
    users[second_player].emit('tester','you are connected with '+host_name);
    host_sock.emit('DisplayName',host_name,second_player,'x');
    users[second_player].emit('DisplayName',host_name,second_player,'o');
    host_name=null;
})     
    sock.on('disconnect',()=>{})                                               
});                  
server.on('error',(err)=>{
    console.error('server error:',err);
});
server.listen(8080,()=>{
    console.log('Started on 8080');
});                               