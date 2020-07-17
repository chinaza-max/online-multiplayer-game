let user1='';
let user2='';

console.log(''==null)
let one_attempt=0;let two_attempt=0;let three_attempt=0;let four_attempt=0;
let five_attempt=0;let six_attempt=0;let seven_attempt=0;let eight_attempt=0;
let nine_attempt=0;
let checker_winner1=0;
let checker_winner2=0;
let num=1;                                                             
let user1_record='a'+num;
let user2_record='b'+num;
let x_string='';
let o_string='';
let gameover_checker=11;
let change_pattern=0;
let score_x=0;
let score_o=0;
// list of possible wins;
let win_a=["abc","def","ghi","adg","beh","cfi","aei","ceg"];
let win_b=['abcd','abce','abcf','abcg','abch','abci','adef',
'bdef','cdef','defg','defh','defi','aghi','bghi','cghi',
'dghi','eghi','fghi','abdg','acdg','adeg','adfg','adgh',
'adgi','abeh','bceh','bdeh','befh','begh','behi','acfi',
'bcfi','cdfi','cefi','cfgi','cfhi','abei','acei','adei',
'aefi','aegi','aehi','aceg','bceg','cdeg','cefg','cegh','cegi'];
let win_c=['abcde','abcdf','abcdg','abcdh','abcdi','abcef','abceg','abceh','abcei','abcfg','abcfh','abcfi',
'abcgh','abcgi','abchi','abdef','acdef','adefg','adefh','adefi','bcdef','bdefg','bdefh','bdefi','cdefg','cdefh','cdefi',
'defgh','defgi','defhi','abghi','acghi','adghi','aeghi','afghi','bcghi','bdghi','beghi','bfghi','cdghi','ceghi','cfghi',
'deghi','dfghi','efghi','abcdg','abdeg','abdfg','abdgh','abdgi','acdeg','acdfg','acdgh','acdgi','adefg','adegh','adegi',
'adfgh','adfgi','adghi','abceh','abdeh','abefh','abegh','abehi','bcdeh','bcefh','bcegh','bcehi','bdefh','bdegh','bdehi',
'befgh','befhi','beghi','abcfi','acdfi','acefi','acfgi','acfhi','bcdfi','bcefi','bcfgi','bcfhi','cdefi','cdfgi','cdfhi',
'cefgi','cefhi','cfghi','abcei','abdei','abefi','abegi','abehi','acdei','acefi','acegi','acehi','adefi','adegi','adehi',
'aefgi','aefhi','aeghi','abceg','acdeg','acefg','acegh','acegi','bcdeg','bcefg','bcegh','bcegi','cdefg','cdegh','cdegi',
'cefgh','cefgi','ceghi'];
//function to enable user select one box at a time;
function stopper(){
    one_attempt=1;two_attempt=1;three_attempt=1;four_attempt=1;
    five_attempt=1;six_attempt=1;seven_attempt=1;eight_attempt=1;
    nine_attempt=1;
}

// entry point which allows you to succefully get a targeted div ;
window.onload=function(){
    let indicator=1;let j=0; change_player=1;
    let num_played=0;let choose_box=0; let response_timer=300
    //bot variables
    bot_canplay=0;
    //variable for switching and eventlistener for bot mode either hard or modeStatus;
    let modeStatus=1;
    let modes=['hard','easy'];
    modes.forEach((mode)=>{document.getElementById(mode).addEventListener('click',()=>{
        if(mode=='hard'){modeStatus=2;console.log('hard')}else{modeStatus=1;console.log('easy')}})
    });
    //bot function  ===>  check_player_win() for checking if player is about to win by going throug series of condition.
  
    //variable for selecting a paricular box;
    let num2=1;let a_a1='a'+num2;let b_b1='b'+num2;

  //this section handles music
    document.getElementById('on').addEventListener("click",playMusic);
    document.getElementById('off').addEventListener("click",stopMusic);
    let myMusic=document.getElementById('music');
    function playMusic(){
        myMusic.play();
    }
    function stopMusic(){
        myMusic.pause();
    }
   
   
    document.getElementById('reset').addEventListener("click",reset);
    function reset(){
        window.location.reload();
    }
    //function for clearing already selected box.so as to choose a new one.
    function clear_selected_box(){
        let num_of_boxchecker=0 
        while(num_of_boxchecker<=9){
            document.getElementById(a_a1).style.borderColor='transparent';
            document.getElementById(b_b1).style.borderColor='transparent';
            num2++;  a_a1='a'+num2; b_b1='b'+num2; num_of_boxchecker++;
        }a_a1='a'+1;b_b1='b'+1; num2=1;
    }
    //functions for selecting number of box player wnant to fill
  /*  document.getElementById('one').addEventListener("click",one);
    document.getElementById('two').addEventListener("click",two);
    document.getElementById('three').addEventListener("click",three);
    document.getElementById('four').addEventListener("click",four);
    document.getElementById('five').addEventListener("click",five);
    document.getElementById('six').addEventListener("click",six);
    document.getElementById('seven').addEventListener("click",seven);
    document.getElementById('eight').addEventListener("click",eight);
    document.getElementById('nine').addEventListener("click",nine);
    document.getElementById('ten').addEventListener("click",ten);*/
    const boxs=document.querySelectorAll('.box')
        boxs.forEach(box=>box.addEventListener('click',func))
    function func(){
        if(this.id=='one'){gameover_checker=2; clear_selected_box();
            while(choose_box==0){
                document.getElementById(a_a1).style.borderColor='blue';
                document.getElementById(b_b1).style.borderColor='blue';choose_box++;
            }choose_box=0;a_a1='a'+1;b_b1='b'+1;  num2=1;
        }
        else if(this.id=='two'){gameover_checker=3;clear_selected_box();
            while(choose_box<=1){
                document.getElementById(a_a1).style.borderColor='blue';
                document.getElementById(b_b1).style.borderColor='blue';
                num2++;  a_a1='a'+num2; b_b1='b'+num2;choose_box++;gameover_checker=3;
            }choose_box=0;a_a1='a'+1;b_b1='b'+1;num2=1;
        }
        else if(this.id=='three'){gameover_checker=4; clear_selected_box();
            while(choose_box<=2){
                document.getElementById(a_a1).style.borderColor='blue';
                document.getElementById(b_b1).style.borderColor='blue';
                num2++;  a_a1='a'+num2; b_b1='b'+num2;choose_box++;gameover_checker=4;
            }choose_box=0;a_a1='a'+1;b_b1='b'+1; num2=1; 
        }
        else if(this.id=='four'){gameover_checker=5; clear_selected_box();
            while(choose_box<=3){
                document.getElementById(a_a1).style.borderColor='blue';
                document.getElementById(b_b1).style.borderColor='blue';
                num2++;  a_a1='a'+num2; b_b1='b'+num2;choose_box++;gameover_checker=5;
            }choose_box=0;a_a1='a'+1;b_b1='b'+1;  num2=1;
        }
        else if(this.id=='five'){gameover_checker=6; clear_selected_box();
            while(choose_box<=4){
                document.getElementById(a_a1).style.borderColor='blue';
                document.getElementById(b_b1).style.borderColor='blue';
                num2++;  a_a1='a'+num2; b_b1='b'+num2;choose_box++;gameover_checker=6;
            }choose_box=0;a_a1='a'+1;b_b1='b'+1;  num2=1;
        }
        else if(this.id=='six'){gameover_checker=7;  clear_selected_box();
            while(choose_box<=5){
                document.getElementById(a_a1).style.borderColor='blue';
                document.getElementById(b_b1).style.borderColor='blue';
                num2++;  a_a1='a'+num2; b_b1='b'+num2;choose_box++;gameover_checker=7;
            }choose_box=0;a_a1='a'+1;b_b1='b'+1; num2=1; 
        }
        else if(this.id=='seven'){gameover_checker=8;  clear_selected_box();
            while(choose_box<=6){
                document.getElementById(a_a1).style.borderColor='blue';
                document.getElementById(b_b1).style.borderColor='blue';
                num2++;  a_a1='a'+num2; b_b1='b'+num2;choose_box++;gameover_checker=8;
            }choose_box=0;a_a1='a'+1;b_b1='b'+1; num2=1; 
        }
        else if(this.id=='eight'){gameover_checker=9; clear_selected_box();
            while(choose_box<=7){
                document.getElementById(a_a1).style.borderColor='blue';
                document.getElementById(b_b1).style.borderColor='blue';
                num2++;  a_a1='a'+num2; b_b1='b'+num2;choose_box++;gameover_checker=9;
            }choose_box=0;a_a1='a'+1;b_b1='b'+1;  num2=1;
        }
        else if(this.id=='nine'){gameover_checker=10; clear_selected_box();
            while(choose_box<=8){
                document.getElementById(a_a1).style.borderColor='blue';
                document.getElementById(b_b1).style.borderColor='blue';
                num2++;  a_a1='a'+num2; b_b1='b'+num2;choose_box++;gameover_checker=10;
            }choose_box=0;a_a1='a'+1;b_b1='b'+1;  num2=1;
        }
        else if(this.id=='ten'){gameover_checker=11;  
            while(choose_box<=9){
                document.getElementById(a_a1).style.borderColor='blue';
                document.getElementById(b_b1).style.borderColor='blue';
                num2++;  a_a1='a'+num2; b_b1='b'+num2;choose_box++;gameover_checker=11;
            }choose_box=0;a_a1='a'+1;b_b1='b'+1;  num2=1;
            
        }
    }
    // the clear function is to clear the whole box for a new game to start.
   // document.getElementById('clear').addEventListener("click",clear);
    function clear(){
        one_attempt=0;two_attempt=0;three_attempt=0;four_attempt=0;
        five_attempt=0;six_attempt=0;seven_attempt=0;eight_attempt=0;
        nine_attempt=0;
        if(change_pattern==4){
            change_pattern=0;
        }
        change_pattern++;

        if(x_string!=''||o_string!=''){
            count_number_played();
        }  
        // variable for initializing string again
        x_string='';
        o_string='';
        function empty_playBox(){
            let boxOf_PlayId=['a','b','c','d','e','f','g','h','i'];
            boxOf_PlayId.forEach((boxId)=>{document.getElementById(boxId).innerHTML='';})
       }
       empty_playBox();

        // For selecting user that will start the  next game 
        if(change_player==1){indicator=0; document.getElementById('nxt_player').innerHTML=user2+' start';
        if(bot_canplay==2){ document.getElementById('nxt_player').innerHTML='bot start'; setTimeout(e,990)}}
        else if(change_player==2){indicator=1; document.getElementById('nxt_player').innerHTML=user1+' start'
        if(bot_canplay==2){ document.getElementById('nxt_player').innerHTML='player start';}}
        else if(change_player==3){indicator=0; document.getElementById('nxt_player').innerHTML=user2+' start';
        if(bot_canplay==2){ document.getElementById('nxt_player').innerHTML='bot start'; setTimeout(f,990)}}
        else if(change_player==4){indicator=1; document.getElementById('nxt_player').innerHTML=user1+' start'
        if(bot_canplay==2){ document.getElementById('nxt_player').innerHTML='player start';}}
        else if(change_player==5){indicator=0; document.getElementById('nxt_player').innerHTML=user2+' start';
        if(bot_canplay==2){ document.getElementById('nxt_player').innerHTML='bot start'; setTimeout(g,990)}}
        else if(change_player==6){indicator=1; document.getElementById('nxt_player').innerHTML=user1+' start'
        if(bot_canplay==2){ document.getElementById('nxt_player').innerHTML='player start';}}
        else if(change_player==7){indicator=0; document.getElementById('nxt_player').innerHTML=user2+' start';
        if(bot_canplay==2){ document.getElementById('nxt_player').innerHTML='bot start'; setTimeout(h,990)}}
        else if(change_player==8){indicator=1; document.getElementById('nxt_player').innerHTML=user1+' start'
        if(bot_canplay==2){ document.getElementById('nxt_player').innerHTML='player start';}}
        else if(change_player==9){indicator=0; change_player=0; document.getElementById('nxt_player').innerHTML=user2+' start';
        if(bot_canplay==2){ document.getElementById('nxt_player').innerHTML='bot start'; setTimeout(i,990)}}
        change_player++;
        // function To display the number of  games played
        function count_number_played(){
            num_played++;
            document.getElementById('num_played').innerHTML=num_played+' Game played';
        }
          // this function is used for empting the play box ;
      
    }
    //function to check if bot is about to win
    function check_bot_win(){
        if(o_string.split('').includes('e')){console.log('in middle')
            if((o_string.split('').includes('a'))&&((x_string.split('').includes('i')==false))){
                console.log('test');i();
            }
            else if((o_string.split('').includes('i'))&&((x_string.split('').includes('a')==false))){
                console.log('test');a();
            }
            else if((o_string.split('').includes('b'))&&((x_string.split('').includes('h')==false))){
                console.log('test');h();
            }
            else if((o_string.split('').includes('h'))&&((x_string.split('').includes('b')==false))){
                console.log('test');b();
            }
            else if((o_string.split('').includes('c'))&&((x_string.split('').includes('g')==false))){
                console.log('test');g();
            }
            else if((o_string.split('').includes('g'))&&((x_string.split('').includes('c')==false))){
                console.log('test');c();
            }
            else if((o_string.split('').includes('d'))&&((x_string.split('').includes('f')==false))){
                console.log('test');f();
            }
            else if((o_string.split('').includes('f'))&&((x_string.split('').includes('d')==false))){
                console.log('test');d();
            }
            else if(modeStatus==2){console.log('test');
                if((o_string.split('').includes('a'))&&(o_string.split('').includes('b'))&&(x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){console.log('test');c();}
                else if((o_string.split('').includes('a'))&&(o_string.split('').includes('c'))&&(x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){console.log('test');b();}
                else if((o_string.split('').includes('b'))&&(o_string.split('').includes('c'))&&(x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){console.log('test');a();}
                else if((o_string.split('').includes('a'))&&(o_string.split('').includes('d'))&&(x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){console.log('test');g();}
                else if((o_string.split('').includes('a'))&&(o_string.split('').includes('g'))&&(x_string.split('').includes('d')==false)&&(o_string.split('').includes('d')==false)){console.log('test');d();}
                else if((o_string.split('').includes('d'))&&(o_string.split('').includes('g'))&&(x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){console.log('test');a();}
                else if((o_string.split('').includes('g'))&&(o_string.split('').includes('h'))&&(x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){console.log('test');i();}
                else if((o_string.split('').includes('g'))&&(o_string.split('').includes('i'))&&(x_string.split('').includes('h')==false)&&(o_string.split('').includes('h')==false)){console.log('test');h();}
                else if((o_string.split('').includes('h'))&&(o_string.split('').includes('i'))&&(x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){console.log('test');g();}
                else if((o_string.split('').includes('c'))&&(o_string.split('').includes('f'))&&(x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){console.log('test');i();}
                else if((o_string.split('').includes('c'))&&(o_string.split('').includes('i'))&&(x_string.split('').includes('f')==false)&&(o_string.split('').includes('f')==false)){console.log('test');f();}
                else if((o_string.split('').includes('f'))&&(o_string.split('').includes('i'))&&(x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){console.log('test');c();} 
                else{console.log('test');
                check_player_win();console.log('test');
                }    
            } 
            else{ check_player_win();
                console.log('test');
            }      
        }
        //this code below  is to run if and only if bot chose middle ;
        else if(o_string.split('').includes('e')==false){console.log('not in middle')
            if((o_string.split('').includes('a'))&&(o_string.split('').includes('b'))&&(x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();console.log('test');}
            else if((o_string.split('').includes('a'))&&(o_string.split('').includes('c'))&&(x_string.split('').includes('b')==false)&&(x_string.split('').includes('b')==false)){b();console.log('test');}
            else if((o_string.split('').includes('b'))&&(o_string.split('').includes('c'))&&(x_string.split('').includes('a')==false)&&(x_string.split('').includes('a')==false)){a();console.log('test');}
            else if((o_string.split('').includes('a'))&&(o_string.split('').includes('d'))&&(x_string.split('').includes('g')==false)&&(x_string.split('').includes('g')==false)){g();console.log('test');}
            else if((o_string.split('').includes('a'))&&(o_string.split('').includes('g'))&&(x_string.split('').includes('d')==false)&&(x_string.split('').includes('d')==false)){d();console.log('test');}
            else if((o_string.split('').includes('d'))&&(o_string.split('').includes('g'))&&(x_string.split('').includes('a')==false)&&(x_string.split('').includes('a')==false)){a();console.log('test');}
            else if((o_string.split('').includes('g'))&&(o_string.split('').includes('h'))&&(x_string.split('').includes('i')==false)&&(x_string.split('').includes('i')==false)){i();console.log('test');}
            else if((o_string.split('').includes('g'))&&(o_string.split('').includes('i'))&&(x_string.split('').includes('h')==false)&&(x_string.split('').includes('h')==false)){h();console.log('test');}
            else if((o_string.split('').includes('h'))&&(o_string.split('').includes('i'))&&(x_string.split('').includes('g')==false)&&(x_string.split('').includes('g')==false)){g();console.log('test');}
            else if((o_string.split('').includes('c'))&&(o_string.split('').includes('f'))&&(x_string.split('').includes('i')==false)&&(x_string.split('').includes('i')==false)){i();console.log('test');}
            else if((o_string.split('').includes('c'))&&(o_string.split('').includes('i'))&&(x_string.split('').includes('f')==false)&&(x_string.split('').includes('f')==false)){f();console.log('test');}
            else if((o_string.split('').includes('f'))&&(o_string.split('').includes('i'))&&(x_string.split('').includes('c')==false)&&(x_string.split('').includes('c')==false)){c();console.log('test');}  
            else{
                check_player_win();console.log('next')
            }
        }
    }
    // function for checking if player(human) is about to win 
    function check_player_win(){
        if(o_string.split('').includes('e')){console.log(' in middle')
            if((x_string.split('').includes('a'))&&(x_string.split('').includes('b'))&&((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false))){
                c();console.log('test');
            }
            else if((x_string.split('').includes('a'))&&(x_string.split('').includes('c'))&&((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false))){
                ;console.log('1');b();
            }           
            else if((x_string.split('').includes('b'))&&(x_string.split('').includes('c'))&&((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false))){
                a();console.log('test');
            }
            else if((x_string.split('').includes('a'))&&(x_string.split('').includes('d'))&&((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false))){
                g();console.log('test');
            }
            else if((x_string.split('').includes('a'))&&(x_string.split('').includes('g'))&&((x_string.split('').includes('d')==false)&&(o_string.split('').includes('d')==false))){
                d();console.log('test');
            }
            else if((x_string.split('').includes('d'))&&(x_string.split('').includes('g'))&&((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false))){
                a();console.log('test');
            }
            else if((x_string.split('').includes('g'))&&(x_string.split('').includes('h'))&&((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false))){
                i();console.log('test');
            }
            else if((x_string.split('').includes('g'))&&(x_string.split('').includes('i'))&&((x_string.split('').includes('h')==false)&&(o_string.split('').includes('h')==false))){
                h();console.log('test');
            }
            else if((x_string.split('').includes('h'))&&(x_string.split('').includes('i'))&&((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false))){
                g();console.log('test');
            }
            else if((x_string.split('').includes('c'))&&(x_string.split('').includes('f'))&&((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false))){
                i();console.log('test');
            }
            else if((x_string.split('').includes('c'))&&(x_string.split('').includes('i'))&&((x_string.split('').includes('f')==false)&&(o_string.split('').includes('f')==false))){
                f();console.log('test');
            }
            else if((x_string.split('').includes('f'))&&(x_string.split('').includes('i'))&&((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false))){
                c();console.log('test');
            }
            else if(modeStatus==1){console.log(change_pattern)
                if(change_pattern==0){console.log('am in 0')
                    if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();console.log('test');}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();console.log('test');}
                    else if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();console.log('test');}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();console.log('test');}
                    else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();console.log('test');}
                    else if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)){f();console.log('test');}
                    else if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false)){h();console.log('test');}
                    else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();console.log('test');}
                }
                else if(change_pattern==1){console.log('am in 1')
                    if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();console.log('test');}
                    else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();console.log('test');}
                    else if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)){f();console.log('test');}
                    else if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false)){h();console.log('test');}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();console.log('test');}
                    else if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();console.log('test');console.log('test');}
                }
                else if(change_pattern==2){console.log('am in 2')
                    if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)){f();console.log('test');console.log('test');}
                    else if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false)){h();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();console.log('test');console.log('test');}
                    else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();console.log('test');console.log('test');}
                }
                else if(change_pattern==3){console.log('am in 3')
                    if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();console.log('test');console.log('test');}
                    else if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)){f();console.log('test');console.log('test');}
                    else if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false)){h();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();console.log('test');console.log('test');}
                    else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();console.log('test');console.log('test');} 
                }
                else if(change_pattern==4){change_pattern=0;console.log('am in 4')
                    if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false)){h();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();console.log('test');console.log('test');} 
                    else if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();console.log('test');console.log('test');}
                    else if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)){f();console.log('test');console.log('test');}   
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();console.log('test');console.log('test');}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();console.log('test');console.log('test');}
                    else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();console.log('test');console.log('test');}
                }
           }
           else if(modeStatus==2){console.log('dont run')
                if(change_pattern==0){
                    if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)&&
                    (x_string.split('').includes('h')==false)&&(o_string.split('').includes('h')==false)){b();}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();}
                    else if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();}
                    else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();}
                    else if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)){f();}
                    else if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false)){h();}
                    else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();}
                }
                else if(change_pattern==1){
                    if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)&&
                    (x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){c();}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)&&
                    (x_string.split('').includes('h')==false)&&(o_string.split('').includes('h')==false)){b();}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();}
                    else if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();}
                    else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();}
                    else if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)){f();}
                    else if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false)){h();}
                    else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();}
                }
                else if(change_pattern==2){
                    if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)&&
                    (x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){g();}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)&&
                    (x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){c();}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)&&
                    (x_string.split('').includes('h')==false)&&(o_string.split('').includes('h')==false)){b();}          
                    else if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();}
                    else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();}
                    else if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)){f();}
                    else if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false)){h();}
                    else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();}
                }
                else if(change_pattern==3){
                    if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false&&
                     (x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false))){h();}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)&&
                    (x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){g();}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)&&
                    (x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){c();}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)&&
                    (x_string.split('').includes('h')==false)&&(o_string.split('').includes('h')==false)){b();}          
                    else if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();}
                    else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();}
                    else if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)){f();}
                    else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();}
                    else if((x_string.split('').includes('h')==false)&&(o_string.split('').includes('h')==false)){h();}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();}
                }
                else if(change_pattern==4){
                    if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)&& 
                    (x_string.split('').includes('d')==false)&&(o_string.split('').includes('d')==false)){f();}
                    else if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false&&
                     (x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false))){h();}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)&&
                    (x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){g();}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)&&
                    (x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){c();}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)&&
                    (x_string.split('').includes('h')==false)&&(o_string.split('').includes('h')==false)){b();}          
                    else if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();}
                    else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();}
                    else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();}
                    else if((x_string.split('').includes('f')==false)&&(o_string.split('').includes('f')==false)){f();}
                    else if((x_string.split('').includes('h')==false)&&(o_string.split('').includes('h')==false)){h();}
                    else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();}
                    else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();}
                    else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();}
                    change_pattern=0;
                }
           }
        }
        else if(x_string.split('').includes('e')){console.log('top suspert')
                if((x_string.split('').includes('a'))&&(o_string.split('').includes('i')==false)&&(x_string.split('').includes('i')==false)){i();console.log('test');}
                else if((x_string.split('').includes('b'))&&(o_string.split('').includes('h')==false)&&(x_string.split('').includes('h')==false)){h();console.log('test');}
                else if((x_string.split('').includes('c'))&&(o_string.split('').includes('g')==false)&&(x_string.split('').includes('g')==false)){g();console.log('test');}
                else if((x_string.split('').includes('d'))&&(o_string.split('').includes('f')==false)&&(x_string.split('').includes('f')==false)){f();console.log('test');}
                else if((x_string.split('').includes('g'))&&(o_string.split('').includes('c')==false)&&(x_string.split('').includes('c')==false)){c();console.log('test');}
                else if((x_string.split('').includes('h'))&&(o_string.split('').includes('b')==false)&&(x_string.split('').includes('b')==false)){b();console.log('test');}
                else if((x_string.split('').includes('i'))&&(o_string.split('').includes('a')==false)&&(x_string.split('').includes('a')==false)){a();console.log('test');}
                else if((x_string.split('').includes('f'))&&(o_string.split('').includes('d')==false)&&(x_string.split('').includes('d')==false)){d();console.log('test');}
                else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)&&(x_string.split('').includes('h')==false)&&
                (o_string.split('').includes('h')==false)){b();console.log('test');}
                else if(x_string.split('').includes('d')==false&&(o_string.split('').includes('d')==false)){d();console.log('test');}
                else if(x_string.split('').includes('f')==false&&(o_string.split('').includes('f')==false)){f();console.log('test');}
                else if(x_string.split('').includes('h')==false&&(o_string.split('').includes('h')==false)){h();console.log('test');}
                else if((x_string.split('').includes('i')==false)&&(o_string.split('').includes('i')==false)){i();console.log('test');}
                else if((x_string.split('').includes('b')==false)&&(o_string.split('').includes('b')==false)){b();console.log('test');}
                else if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){a();console.log('test');}
                else if((x_string.split('').includes('g')==false)&&(o_string.split('').includes('g')==false)){g();console.log('test');}
                else if((x_string.split('').includes('c')==false)&&(o_string.split('').includes('c')==false)){c();console.log('test');}
                
        }
    }
    //Eventlistener to trigger bot to be ready to play
    document.getElementById('bot').addEventListener("click",bot_trigger);
    function bot_trigger(){
        bot_canplay=2;
    }
  // Eventlistener for all boxes,so as to perform a function
document.getElementById('a').addEventListener("click",a);
function a(){
    if(one_attempt==0){
        one_attempt++;
        let a_a='a';
        general(a_a);
        //for bot; 

        if(j==indicator%2){ 
                if(bot_canplay==2){ console.log('YES')
                    if((x_string.split('').length==1)&&(x_string.split().includes('e')==false)&&(o_string.split().includes('e')==false)){
                        setTimeout(e,response_timer);
                    }
                    else if((x_string.split('').includes('e'))&&((x_string.split('').length==1))){
                        if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){setTimeout(a,response_timer);}          
                    }
                // check if bot is about to win;
                else if(o_string.split('').length>1){
                      setTimeout(check_bot_win,response_timer);
                }
                // check if player is about to win
                else{
                    setTimeout(check_player_win,response_timer);
                }
            }
        }
    }
}
document.getElementById('b').addEventListener("click",b);
function b(){
    if(two_attempt==0){
         two_attempt++;
         let b_b="b";
         general(b_b);
    
         if(j==indicator%2){ 
                 if(bot_canplay==2){ console.log('YES')
                     if((x_string.split('').length==1)&&(x_string.split().includes('e')==false)&&(o_string.split().includes('e')==false)){
                        setTimeout(e,response_timer);
                     }
                     else if((x_string.split('').includes('e'))&&((x_string.split('').length==1))){
                        if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){setTimeout(a,response_timer);}          
                    }        
                 // check if bot is about to win;
                 else if(o_string.split('').length>1){
                     //this if statement is just to confirm that the center was occupied by the bot
                            setTimeout(check_bot_win,response_timer);
                 }
                 // check if player is about to win
                 else{
                    setTimeout(check_player_win,response_timer);
                 }
             }
        }
      
    }
}
document.getElementById('c').addEventListener("click",c);
function c(){
    if(three_attempt==0){
        three_attempt++;
        let c_c="c";
        general(c_c);
    
        //for bot 
        if(j==indicator%2){ 
                if(bot_canplay==2){ 
                    if((x_string.split('').length==1)&&(x_string.split().includes('e')==false)&&(o_string.split().includes('e')==false)){
                        setTimeout(e,response_timer);
                    }
                    else if((x_string.split('').includes('e'))&&((x_string.split('').length==1))){
                        if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){setTimeout(a,response_timer);}          
                    }        
                // check if bot is about to win;
                else if(o_string.split('').length>1){
                            setTimeout(check_bot_win,response_timer);
                }
                // check if player is about to win
                else{
                    setTimeout(check_player_win,response_timer);
                }
            }
        }
   
    }
}
document.getElementById('d').addEventListener("click",d);
function d(){
    if(four_attempt==0){
        four_attempt++;
        let d_d="d";
        general(d_d);
         //for bot 
        if(j==indicator%2){ 
                if(bot_canplay==2){ 
                    if((x_string.split('').length==1)&&(x_string.split().includes('e')==false)&&(o_string.split().includes('e')==false)){
                        setTimeout(e,response_timer);
                    }
                    else if((x_string.split('').includes('e'))&&((x_string.split('').length==1))){
                        if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){setTimeout(a,response_timer);}          
                    }        
                // check if bot is about to win;
                else if(o_string.split('').length>1){
                            setTimeout(check_bot_win,response_timer);
                }
                // check if player is about to win
                else{
                    setTimeout(check_player_win,response_timer);
                }
            }
        }
    }
}
document.getElementById('e').addEventListener("click",e);
function e(){
    if(five_attempt==0){
        five_attempt++
        let e_e="e";
        general(e_e);
    
         //for bot 
         if(j==indicator%2){
                 if(bot_canplay==2){ 
                     if((x_string.split('').length==1)&&(x_string.split().includes('e')==false)&&(o_string.split().includes('e')==false)){
                        setTimeout(e,response_timer);
                     }
                     else if((x_string.split('').includes('e'))&&((x_string.split('').length==1))){
                        if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){setTimeout(a,response_timer);}          
                    }        
                     
                 // check if bot is about to win;
                 else if(o_string.split('').length>1){
                            setTimeout(check_bot_win,response_timer);
                 }
                 // check if player is about to win
                 else{
                    setTimeout(check_player_win,response_timer);
                 }
             }
         }
    }
}
document.getElementById('f').addEventListener("click",f);
function f(){
    if(six_attempt==0){
        six_attempt++;
        let f_f="f";
        general(f_f);
        
         //for bot 
        if(j==indicator%2){ 
                if(bot_canplay==2){ 
                    if((x_string.split('').length==1)&&(x_string.split().includes('e')==false)&&(o_string.split().includes('e')==false)){
                        setTimeout(e,response_timer);
                    }
                    else if((x_string.split('').includes('e'))&&((x_string.split('').length==1))){
                        if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){setTimeout(a,response_timer);}          
                    }        
                // check if bot is about to win;
                else if(o_string.split('').length>1){
                            setTimeout(check_bot_win,response_timer);
                }
                // check if player is about to win
                else{
                    setTimeout(check_player_win,response_timer);
                }
            }
        }
    }
}
document.getElementById('g').addEventListener("click",g);
function g(){
    if(seven_attempt==0){
        seven_attempt++;
        let g_g="g";
        general(g_g);
    
         //for bot 
        if(j==indicator%2){ 
                if(bot_canplay==2){ 
                    if((x_string.split('').length==1)&&(x_string.split().includes('e')==false)&&(o_string.split().includes('e')==false)){
                        setTimeout(e,response_timer);
                    }
                    else if((x_string.split('').includes('e'))&&((x_string.split('').length==1))){
                        if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){setTimeout(a,response_timer);}          
                    }        
                // check if bot is about to win;
                else if(o_string.split('').length>1){
                            setTimeout(check_bot_win,response_timer);
                }
                // check if player is about to win
                else{
                    setTimeout(check_player_win,response_timer);
                }
            }
        }
    }
}
document.getElementById('h').addEventListener("click",h);
function h(){
    if(eight_attempt==0){
        eight_attempt++;
        let h_h="h";
        general(h_h);
    
         //for bot 
         if(j==indicator%2){
                 if(bot_canplay==2){ 
                     if((x_string.split('').length==1)&&(x_string.split().includes('e')==false)&&(o_string.split().includes('e')==false)){
                        setTimeout(e,response_timer);
                     }
                     else if((x_string.split('').includes('e'))&&((x_string.split('').length==1))){
                        if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){setTimeout(a,response_timer);}          
                    }        
                 // check if bot is about to win;
                 else if(o_string.split('').length>1){
                 // the conditional statement is for checking  all box around the center box to know if the bot is about to win 
                            setTimeout(check_bot_win,response_timer);
                 }
                 // check if player is about to win
                 else{ setTimeout(check_player_win,response_timer);
                }
             }
         }
    }
}
document.getElementById('i').addEventListener("click",i);
function i(){
    if(nine_attempt==0){
        nine_attempt++;
        let i_i="i";
        general(i_i);
    
         //for bot 
        if(j==indicator%2){                          
                if(bot_canplay==2){ 
                    if((x_string.split('').length==1)&&(x_string.split().includes('e')==false)&&(o_string.split().includes('e')==false)){
                        setTimeout(e,response_timer);
                    } 
                    else if((x_string.split('').includes('e'))&&((x_string.split('').length==1))){
                        if((x_string.split('').includes('a')==false)&&(o_string.split('').includes('a')==false)){setTimeout(a,response_timer);}          
                    }       
                // check if bot is about to win;
                else if(o_string.split('').length>1){
                            setTimeout(check_bot_win,response_timer);
                }
                // check if player is about to win
                else{
                    setTimeout(check_player_win,response_timer);
                }
            }
        }
    }
}  
// function for selecting the right box  wethere to display X or O;
function general(playBox_id){
    if(j<indicator%2){
        document.getElementById(playBox_id).innerHTML='x';
        x_string+=playBox_id;
    }
    else{
        document.getElementById(playBox_id).innerHTML='o';
        o_string+=playBox_id;
    }
    indicator++;
    document.getElementById('nxt_player').innerHTML=' ';
    //Here to start check if user1 or user2 has won
    if(indicator>=5){
        let test_1=x_string.split('').sort().join("");
        let test_2=o_string.split('').sort().join("");
             if(win_a.includes(test_1)){
                console.log('x    WIN .......');
                stopper(); 
                document.getElementById(user1_record).innerHTML=2;
                document.getElementById(user2_record).innerHTML=0;
                num++;
                user1_record='a'+num;
                user2_record='b'+num;
                score_x+=2;
                checker_winner1++;
                if((num==gameover_checker)==false){
                    setTimeout(clear,900);
                 }
             }
             else if(win_a.includes(test_2)){
                 console.log('o   win.......');
                 stopper();
                 document.getElementById(user1_record).innerHTML=0;
                 document.getElementById(user2_record).innerHTML=2;
                 num++;
                 user1_record='a'+num;
                 user2_record='b'+num;
                 score_o+=2;console.log(score_o);
                 checker_winner2++;
                 if((num==gameover_checker)==false){
                    setTimeout(clear,900);
                 }
             }
             else if((win_b.includes(test_1))||(win_c.includes(test_1))){
                 console.log('x   win......');
                 stopper();
                 document.getElementById(user1_record).innerHTML=2;
                 document.getElementById(user2_record).innerHTML=0;
                 num++;
                 user1_record='a'+num;
                 user2_record='b'+num;
                 score_x+=2;
                 checker_winner1++;
                 if((num==gameover_checker)==false){
                    setTimeout(clear,900);
                 }
             }
             else if((win_b.includes(test_2))||(win_c.includes(test_2))){
                console.log('o    win......');
                stopper();
                document.getElementById(user1_record).innerHTML=0;
                document.getElementById(user2_record).innerHTML=2;
                num++;
                user1_record='a'+num;
                user2_record='b'+num;
                score_o+=2;console.log(score_o);
                checker_winner2++;
                if((num==gameover_checker)==false){
                    setTimeout(clear,900);
                 }
            }
            
            else if((test_1.length==5)||(test_2.length==5&&((num==gameover_checker)==false))){
               setTimeout(clear,900);console.log(score_o);
            }
    }
    // To check if the game has finished and alert the winner of the game
    if(num==gameover_checker){
        //for hidden
        document.querySelector('.nav2').style.display='none';
        document.getElementById('gameover').innerHTML='GAME OVER';
        num_played++;
        document.getElementById('num_played').innerHTML=num_played+' Game played';
     // the conditional statements(if, else if,else )are to check if a particular player won
        if(checker_winner1>checker_winner2){
            user1='User 1 Won </br>'+user1+" </br>points:"+score_x;
            document.getElementById('winner').style.color='white';
            document.getElementById('winner').innerHTML=user1;
            if(bot_canplay==2){ document.getElementById('winner').innerHTML='Player  Won </br> Points:'+score_x;}
        }
        else if(checker_winner1<checker_winner2){
            user2='User 2 Won </br>'+user2+"</br>"+score_o;
            document.getElementById('winner').style.color='white';
            document.getElementById('winner').innerHTML=user2;
            if(bot_canplay==2){ document.getElementById('winner').innerHTML='Bot Won </br> Points:'+score_o;}
        }
        else{
            document.getElementById('winner').style.color='white';
            document.getElementById('winner').innerHTML='NO PLAYER WON';
        }
    }
}
}