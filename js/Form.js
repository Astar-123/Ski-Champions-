class Form{
    constructor(){
        this.title= createElement("h2");
        this.greeting= createElement("h2");
        this.input=createInput("Enter Name");
        this.button=createButton('Play');
        this.reset=createButton('Reset');
    }
    
    hide() {
        this.title.hide();
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display() {
        this.title.html("SKI CHAMPIONS!!!");
        this.title.position(displayWidth/2-50, 0);

        this.button.position(displayWidth/2+30, displayHeight/2);
        this.input.position(displayWidth/2-40, displayHeight/2-80)
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();
            playerCount +=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2-70, displayHeight/4);

        });
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        });
    }

}