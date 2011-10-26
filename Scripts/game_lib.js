// Ping Pong Game with HTML5  
// Author Isen Beqiri©  2010. 


var cnv;
var WIDTH = $("#board").width();
var HEIGHT = $("#board").height();
var intervalId = 0;
var x = WIDTH/2;
var y = HEIGHT/2;
var offset = 5;
var gameSpeed = WIDTH/100;
var dx = 7;
var dy = 1;

var player1PaddleY = HEIGHT/2.5;
var player1PaddleX = WIDTH-5;

var player2PaddleY = HEIGHT/2.5;
var player2PaddleX = 0;

var paddleH = 70;
var paddleW = 5;
var intervalId = 0;


function ball(x,y,r) {

  cnv.beginPath();
  grd=cnv.createLinearGradient(0,0,175,50);
  grd.addColorStop(0,"#ccffff");
  grd.addColorStop(1,"#ff9900");
  cnv.fillStyle=grd;
  cnv.arc(x, y, r, 0, Math.PI*2, true);
  cnv.closePath();
  cnv.fill();
}

function paddle(x,y,w,h) {
  cnv.beginPath();
  cnv.rect(x,y,w,h);
  cnv.closePath();
  cnv.fill();
}

function clear() {
  cnv.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawlines(){
  cnv.fillStyle = "#2b3b55";
  cnv.beginPath();
  cnv.rect(WIDTH/2, 0, 1,HEIGHT);
  cnv.rect(0, HEIGHT/2, WIDTH,1);
  cnv.closePath();
  cnv.fill();	
}

function flipScore(){


		$("score_board").getElements(".flips").each(function(item, index){

  				var currentStyles = item.getStyles("position", "left", "width", "height", "top");


  				var toggle = false;
				item.addEvent('click', function(){
					 			var extraT = 0;
								var extraP = 0;

							this.setStyle("overflow", "hidden");
							var tp = this;
							this.set('morph', {duration: effectSpeed+extraT, transition: 'Sine:in', onComplete: function(){

								if(!toggle){
									toggle = true;
									item.addClass("toggleTrue");
								}
								else{
									toggle = false;
									item.removeClass("toggleTrue");
								}

								tp.setStyle('MozTransform','skew(0deg, -20deg)');

								tp.set('morph', {duration: effectSpeed+extraT, transition: 'Sine:out', onComplete: function(){

								}});
								tp.morph({
									'width': currentStyles.width,
									'left': currentStyles.left, 
									'MozTransform': 'skew(0deg, 0deg)'
								 });  
							}});			
				});
			});
}