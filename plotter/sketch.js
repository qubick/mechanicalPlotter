var paused = false

function setup() {
  createCanvas(710, 400)

  button1 = createButton('Pause')
  button1.position(20, 100)
  button1.mousePressed(toggle)

  button2 = createButton('Resume')
  button2.position(button1.x + button1.width + 10, 100)
  button2.mousePressed(toggle)

  greeting = createElement('h2', '')
  greeting.position(20, 5)


  sliderMotorSpeedX = createSlider(0, 255, 0)
  sliderMotorSpeedX.position(120,20)
  text("Motor Speed X: ", 20 , 35) //sliderMotorSpeedX.y/2)

  sliderMotorSpeedY = createSlider(0, 255, 100).show()
  sliderMotorSpeedY.position(120,50)
  text("Motor Speed Y: ", 20, 65) //sliderMotorSpeedY.y/2)

  textAlign(CENTER)
  textSize(50)
}

function toggle(){
  paused = 1 - paused
  console.log(paused)
}

function draw() {

  // get input data from UI widgets
  var motorSpeedX = sliderMotorSpeedX.value()
  var motorSpeedY = sliderMotorSpeedY.value()


  for (var i=0; i<200; i++){
    push()
    fill(random(255), 255, 255)
    translate(random(width), random(height))
    rotate(random(2*PI))
    text(name, 0, 0)
    pop()
  }
}
