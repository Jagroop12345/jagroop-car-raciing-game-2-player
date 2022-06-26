class Game {
  constructor() {}

  
  getState(){
    var stateInfo = database.ref("gamestate")
    stateInfo.on("value",(data)=>{
      myGameState=data.val()
    })
    console.log(myGameState)
  }

  updateState(stateNumber){
    database.ref("/").update({
      gamestate:stateNumber
    })
  }
  start() {
    myform = new Form();
    myform.display();
    myplayer=new Player()
    myplayer.getCount()

    car1= createSprite(width/2-100,height-100)
    car1.addImage("car1",car1Image)
    car1.scale=0.07
    car2= createSprite(width/2+100,height-100)
    car2.addImage("car2",car2Image)
    car2.scale=0.07
    
  }

  play() {
    myform.hide()
    myform.tittleImg.position(40,80)
    myform.tittleImg.class("changeTitle")

    drawSprites()

    if(keyDown("up")){
      myplayer.positionY+=10
      myplayer.updatePlayerInfo()
    }
  }
  
  end() {}
}
