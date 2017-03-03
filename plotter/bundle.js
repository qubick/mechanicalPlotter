(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var paused = false
    ,portName = '/dev/cu.usbmodem421'
    // ,SerialPort = require("serialPort").serialPort

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

// var receivedData = ""
// 		,serialPort = new SerialPort(portName, {
// 			    baudrate: 9600,
// 		 	    // defaults for Arduino serial communication
// 		 	     dataBits: 8,
// 		  	     parity: 'none',
// 		  	     stopBits: 1,
// 		  	     flowControl: false
// 	});
// 	serialPort.on("open", function () {
// 		console.log('open serial communication');
//
// 		// Listens to incoming data
// 		serialPort.on('data', function(data) {
// 			receivedData += data.toString();
//
// 		if (receivedData .indexOf('E') >= 0 && receivedData .indexOf('B') >= 0) {
//
// 			// save the data between 'B' and 'E'
// 			sendData = receivedData .substring(receivedData .indexOf('B') + 1, receivedData .indexOf('E'));
// 			sendData = '0x01'
// 			receivedData = ''
//
// 			}
//
// 		});
// 	});

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

},{}]},{},[1]);
