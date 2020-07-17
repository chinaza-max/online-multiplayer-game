class interactive_game{
    constructor(p1,p2){
        this.players=[p1,p2];
        this.values=['x','o'];
        // this.turns=[null,null];
        this.turns='x';
        //to alert player that they are conected 
        this.sendToPlayers('connected');
        this.players.forEach((player,indx)=>{
                player.on('value_transporter',(valueToDisplay,playBoxId)=>{
                this.sendToPlayers_2(valueToDisplay,playBoxId,indx);
                });
            });   
    }
                
    sendToPlayer(playerIndex,msg){                                        
        this.players[playerIndex].emit('message',msg);
    }
    sendToPlayers(msg){
        this.players.forEach((player)=>{
            player.emit('connected',msg);
        })
    }
    //to display 'x' or 'o' in play 
    sendToPlayers_2(valueToDisplay,playBoxId,indx){
        if(indx==0){indx+=1}
        else if(indx==1){indx-=1}
      
        if(valueToDisplay==this.turns){
            this.turns=this.values[indx]; 
            this.players.forEach((player)=>{
                player.emit('value_transporter',valueToDisplay,playBoxId);
            })
        }
    }
    check_win(){
        

    }
}
module.exports=interactive_game;