class Game{
    constructor(){}

    getState() {
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState= data.val();
        });
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState===0) {
            player= new Player();
            var playerCountRef= await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form= new Form();
            form.display();
        }

        ski1=createSprite(200,200);
        ski1.addImage(ski1Img);
       
        ski2=createSprite(400,200);
        ski2.addImage(ski2Img);
       
        ski3=createSprite(600,200);
        ski3.addImage(ski3Img);
        skis=[ski1,ski2,ski3];
    }

    play(){
        form.hide();

        Player.getPlayerInfo();
        player.getSkisAtEnd();

        //ar index=0

        if(allPlayers !== undefined) {
           
            background("white");

            var index=0;
            var x=175;
            var y;

            for(var plr in allPlayers){
                
                index=index+1;
                
                x= x+300;
                y=displayHeight - allPlayers[plr].distance;

                skis[index-1].x=x;
                skis[index-1].y=y;

                if(index===player.index){
                    stroke(10);
                    fill("red");
                    text(allPlayers[plr].name, x+20, y+50)
                    // ellipse(x,y,60,60);
                    skis[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y= skis[index-1].y;
                }


            }

        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 10;
            player.update();
        }
        if(player.distance > 4420){ 
            gameState=2;
            player.rank +=1;
            Player.updateSkisAtEnd(player.rank);
            swal({
                title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
                text: "You reached at bottom of the hill successfully",
                imageUrl:
                  "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
                imageSize: "100x100",
                confirmButtonText: "Ok",
              });
         }

         drawSprites();

    }

    end(){
        console.log("Game Ended");
        console.log(player.rank);
    }
}