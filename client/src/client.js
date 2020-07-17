// this section handles the UI interface  for online players 
const username_form=document.querySelector('#slide');
const conection_container=document.querySelector('#conection-container')
const join_container=document.querySelector('#join-container');
const nameOf_xPlayer=document.querySelector('#name1');
const nameOf_oPlayer=document.querySelector('#name2');
const playBoxs=document.querySelectorAll('.id1');
let hosterName=null;
let id=0;
let valueToDisplay='x';
let string_holder='';
let timeToCheckWin_1=0;
let timeToCheckWin_2=0;
let intervalBeforeClear=800;

function empty_playBox(){
    let boxOf_PlayId=['a','b','c','d','e','f','g','h','i'];
    boxOf_PlayId.forEach((boxId)=>{document.getElementById(boxId).innerHTML='';})
    x_string='';
    o_string='';
    timeToCheckWin_1=0;
    timeToCheckWin_2=0;
}

//this function stops computer play
function stopper(){
    one_attempt=1;two_attempt=1;three_attempt=1;four_attempt=1;
    five_attempt=1;six_attempt=1;seven_attempt=1;eight_attempt=1;
    nine_attempt=1;
}




//the function below is use to collect data on the hoster form;
const  onFormSubmitted1=(e)=>{
    e.preventDefault();
    username_form.style.transition='transform .13s ease-in-out';
    username_form.style.transform='translateY('+-163+'px)';
    const input=document.querySelector('#UserName')
    const text=input.value;
    hosterName=text;
    input.value='';
  
}

//the function below is use to collect data on the joiner form;
const  onFormSubmitted2=(e)=>{
    e.preventDefault();
    const input=document.querySelector('#second-userName')
    const text=input.value;
    joinerName=text;
    input.value='';
    sock.emit('message2', joinerName);
    join_container.style.display='none';
    stopper();namesFunc();
}

const UsersList=(text)=>{
    const parent=document.querySelector('#orderList');
    const el=document.createElement('li');
    el.classList.add('li-name');
    el.setAttribute('id','id'+id);
    id++;                      
    el.innerHTML=text;
    parent.appendChild(el);
    namesFunc();
};
//for connecting second player 
function fetchOnline(){
    const second_player= document.getElementById(this.id).innerText;
    sock.emit('message',second_player,hosterName);
    sock.emit('remove',this.id);
    conection_container.style.display='none'; 
    if(hosterName!==null){
        stopper();
    }
  
}

function namesFunc(){  
    let names =document.querySelectorAll('.li-name');
    names.forEach((name)=>name.addEventListener('click',fetchOnline))
}
//eventlistener on form submission for hoster 
document.querySelector('#username-form')
.addEventListener('submit',onFormSubmitted1);

//eventlistener on form submission for joiner
document.querySelector('#second-userName-form')
.addEventListener('submit',onFormSubmitted2);
//this allows the div container visible
 document.querySelector('#host')
 .addEventListener('click',()=>{
    conection_container.style.display='inline'; 
    join_container.style.display='none';
})

document.querySelector('#join')
    .addEventListener('click',()=>{
        join_container.style.display='inline';
        conection_container.style.display='none'; 
})

/*this function display the name of each player on the screen
and also listen to play boxs*/
function displayName(host_name,join_name,letter){
        nameOf_xPlayer.innerHTML=host_name;
        nameOf_oPlayer.innerHTML=join_name;
        valueToDisplay=letter;
        playBoxs.forEach((playBox)=>{playBox.addEventListener('click',()=>{
        sock.emit('value_transporter',valueToDisplay,playBox.id);
        })})
}

function connectionAlert(text){
    document.querySelector('#display').innerHTML=text;
}
function remove_selectedPlayer(text){
    document.querySelector('#'+text).remove();
}
function clearfunc(){
    empty_playBox();
    console.log('this clear function was called')
}
function playBox_selector(value_x_or_o,selected_id){
    document.getElementById(selected_id).innerHTML=value_x_or_o;
    if(value_x_or_o=='x'){
        x_string+=selected_id;
        timeToCheckWin_1++;
        if(timeToCheckWin_1>=3){check_Players_win();}
    }
    else if(value_x_or_o=='o'){
        o_string+=selected_id;
        timeToCheckWin_2++;
        if(timeToCheckWin_2>=3){check_Players_win();}
    }
    console.log(timeToCheckWin_1);
    console.log(timeToCheckWin_2);
}

function check_Players_win(){
    console.log('it checked if player is about to win')
    console.log( x_string);
    console.log( o_string);
    x_string= x_string.split('').sort().join("");
    o_string= o_string.split('').sort().join("");
    if(win_a.includes(x_string)){
        document.getElementById(user1_record).innerHTML=2;
        document.getElementById(user2_record).innerHTML=0;
        num++;
        user1_record='a'+num;
        user2_record='b'+num;
        setTimeout(clearfunc,intervalBeforeClear);
     }
     else if(win_a.includes(o_string)){
        document.getElementById(user1_record).innerHTML=0;
        document.getElementById(user2_record).innerHTML=2;
        num++;
        user1_record='a'+num;
        user2_record='b'+num;
        setTimeout(clearfunc,intervalBeforeClear);
     }
    else if(win_b.includes(x_string)||win_c.includes(x_string)){
        document.getElementById( user1_record).innerHTML=2;
        document.getElementById( user2_record).innerHTML=0;
        num++;
        user1_record='a'+num;
        user2_record='b'+num;
        setTimeout(clearfunc,intervalBeforeClear);
    }
    else if(win_b.includes(o_string)||win_c.includes(o_string)){
        document.getElementById(user1_record).innerHTML=0;
        document.getElementById(user2_record).innerHTML=2;
        num++;
        user1_record='a'+num;
        user2_record='b'+num;
        setTimeout(clearfunc,intervalBeforeClear);
    }
   
}
    const sock=io();
//for making the correct value(x or o)appear in the play box;
    sock.on('value_transporter',playBox_selector);
//for alerting both winner that they are connected to each other
    sock.on('connected',connectionAlert);
    sock.on('DisplayName',displayName);
// for displaying user name of those who want to join the hoster;
    sock.on('message2',UsersList);
//for removing a particular connected player;
    sock.on('remove',remove_selectedPlayer); 
