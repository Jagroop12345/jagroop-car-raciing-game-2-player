class Form {
  constructor() {
    this.tittleImg=createImg("../assets/title.png","Game Title")
    this.inputbox= createInput("").attribute("placeholder","Enter your name")
    this.button= createButton("play")
    this.greeting= createElement("h1")
  }


  setPosition(){
    this.tittleImg.position(width/3-385,height/3-250)
    this.inputbox.position(width/2-130,height/2-20)
    this.button.position(width/2-115,height/2+50)
    this.greeting.position(width/2-130,height/2-20)
  }

  setStyle(){
    this.tittleImg.class("gameTitle")
    this.inputbox.class("customInput")
    this.button.class("customButton")
    this.greeting.class("greeting")
  }
  
  hide(){
    this.greeting.hide()
    this.inputbox.hide()
    this.button.hide()
  }

  handleMousepressed(){
    this.button.mousePressed(()=>{
      this.inputbox.hide()
      this.button.hide()
      var message= `Hello ${this.inputbox.value()}
      <br/> wait for another player to join...`
      this.greeting.html(message)
      myPlayerCount+= 1
      myplayer.updateCount(myPlayerCount)

      myplayer.name = this.inputbox.value()
      myplayer.index = myPlayerCount
      myplayer.addPlayers()
      myplayer.getDistance()
    })
  }


  display(){
    this.setPosition()
    this.setStyle()
    this.handleMousepressed()
  }
}
