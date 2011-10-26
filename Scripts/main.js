//Ping Pong game  
// Author Isen Beqiri  2010

(function(doc) {
		
 	upDown = false; //up key pressed down
	downDown = false; //down key pressed down
	spacePress = true;
	gameRunning = false;
	//get canvas width and height via jQuery library
	

	function onKeyDown(evt) {
	  if (evt.keyCode == 38) upDown = true;
	  else if (evt.keyCode == 40) downDown = true;
	}

	//and unset them when the right or left key is released
	function onKeyUp(evt) {
	  if (evt.keyCode == 38) upDown = false;
	  else if (evt.keyCode == 40) downDown = false;
	}	
	
	//and unset them when the right or left key is released
	function onKeyPress(evt) {
	  if (evt.keyCode == 32)
	{ 
		if (!gameRunning) {
		x = WIDTH/2;
		y = HEIGHT/2;
		player1PaddleY = HEIGHT/2.5;
		player1PaddleX = WIDTH-5;   
		intervalId = setInterval(draw, gameSpeed);
		}
	}
	}

	try {
		$(document).keydown(onKeyDown);
		$(document).keyup(onKeyUp);
		$(document).keypress(onKeyPress);   //my jQuery code here
	} catch (e) {
	console.log (e.message);    //this executes if jQuery isn't loaded
	}
	

	
	function init() {

		cnv = document.getElementById("board").getContext("2d");
		drawlines();
		cnv.fillStyle = "#ff9900";
		paddle(player1PaddleX,player1PaddleY,paddleW,paddleH);
		cnv.fillStyle = "#ccffff";
		paddle(player2PaddleX,player2PaddleY,paddleW,paddleH);
 		if (gameRunning) {intervalId = setInterval(draw, gameSpeed);	}

		return intervalId;
	}
	
	function draw(){

		gameRunning = true;	
		cnv.clearRect(0,0,WIDTH,HEIGHT);
	
		drawlines();
		cnv.fillStyle = "#FFFFFF"
		ball(x,y,8);
		//Player paddle 
		if ((downDown)&&((player1PaddleY+paddleH)<HEIGHT)) player1PaddleY += 5;
		  else if ((upDown) && (player1PaddleY>0 )) player1PaddleY -= 5;
		
		cnv.fillStyle = "#ff9900";
		paddle(player1PaddleX,player1PaddleY,paddleW,paddleH);		
		

	
		if (x + dx > player1PaddleX){
		    	if ((y > player1PaddleY-offset) && (y < (player1PaddleY + paddleH)+offset))
					{
						dx = -dx;
						if( y > (player1PaddleY-offset) && y< (player1PaddleY+ paddleH/2) )
							dy = 1;
						else
							dy = -2;
					}
				else{	
					player1score = document.getElementById('player1score').innerHTML/1;
					player1score +=1;
					document.getElementById('player1score').innerHTML = player1score ;
					gameRunning = false;
					dy= 0;
					clearInterval(intervalId);
					}	
		}
		
		if (x + dx < 0)
		    if ((y > player2PaddleY-offset) && (y < (player2PaddleY + paddleH)+offset))
				{
					dx = -dx;
					if( y > (player1PaddleY-offset) && y< (player1PaddleY+ paddleH/2) )
						dy = 1;
					else
						dy = -2;
				}
			else{	
				player2score = document.getElementById('player2score').innerHTML/1;
				player2score +=1;
				document.getElementById('player2score').innerHTML = player2score ;
				gameRunning = false;
				dy=0;
				clearInterval(intervalId);
				}
		
		
		if (y + dy > HEIGHT-5 || y + dy < 5)
		    dy = -dy;
		
	
		
		x +=dx;
		y += dy;		
			if ((y > player2PaddleY)&&(player2PaddleY+paddleH<HEIGHT)) player2PaddleY += 1;
			  else if ((y < player2PaddleY )&&(player2PaddleY>0)) player2PaddleY -= 1;
		cnv.fillStyle = "#ccffff";
		paddle(player2PaddleX,player2PaddleY,paddleW,paddleH);
		
	
	}
	
	

	init();
 
})(document);