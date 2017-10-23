var keys = [];

var rota = [];
rota[1] = false;
rota[2] = false;
rota[3] = false;
rota[4] = false;

var speed = 5;
var bspeed = 10;

var upspeed = speed;
var downspeed = speed;
var leftspeed = speed;
var rightspeed = speed;

function keyPressed() {

  //console.log(keys);

  //console.log(upspeed,downspeed,leftspeed,rightspeed);

  if((keyCode == UP_ARROW)||(keyCode == 87)){
    keys[1] = true;
    //rot = -90;
    rota[1] = true;
    //upspeed = speed;
    //player.addSpeed(upspeed,-90);
  } else if((keyCode == DOWN_ARROW)||(keyCode == 83)){
    keys[2] = true;
    //rot = 0;
    rota[2] = true;
    //downspeed = speed;
    //player.addSpeed(downspeed,90);
  } else if((keyCode == LEFT_ARROW)||(keyCode == 65)){
    keys[3] = true;
    //rot = 180;
    rota[3] = true;
    //leftspeed = speed;
    //player.addSpeed(leftspeed,180);
  } else if((keyCode == RIGHT_ARROW)||(keyCode == 68)){
    keys[4] = true;
    //rot = 0;
    rota[4] = true;
    //rightspeed = speed;
    //player.addSpeed(rightspeed,0);
  }

  if(keyCode == 32){
    makeBullet();
  }
}

function keyReleased() {

  if((keyCode == UP_ARROW)||(keyCode == 87)){
    keys[1] = false;
    //rot = -90;
    rota[1] = false;
    //player.maxSpeed = 0;
    //upspeed = 0;
  } else if((keyCode == DOWN_ARROW)||(keyCode == 83)){
    keys[2] = false;
    //rot = 90;
    rota[2] = false;
    //player.maxSpeed = 0;
    //downspeed = 0;
  } else if((keyCode == LEFT_ARROW)||(keyCode == 65)){
    keys[3] = false;
    //rot = 180;
    rota[3] = false;
    //player.maxSpeed = 0;
    //leftspeed = 0;
  } else if((keyCode == RIGHT_ARROW)||(keyCode == 68)){
    keys[4] = false;
    //rot = 0;
    rota[4] = false;
    //player.maxSpeed = 0;
    //rightspeed = 0;
  }
}

function Keys(){

  if(keys[1] == true){
    player.position.y = player.position.y - speed;
    //player.addSpeed(1,-90);
  }
  if(keys[2] == true){
    player.position.y = player.position.y + speed;
  }
  if(keys[3] == true){
    player.position.x = player.position.x - speed;
  }
  if(keys[4] == true){
    player.position.x = player.position.x + speed;
  }

  if(player.position.x < 0){
    player.position.x = 0;
  } else if(player.position.x > width){
    player.position.x = width;
  }
  if(player.position.y < 0){
    player.position.y = 0;
  } else if(player.position.y > height){
    player.position.y = height;
  }

}

function Rot(){

  if(rota[1] == true){
    for(var i = int(bullets.length); i >= int(bullets.length); i--){
      bullets[i-1].velocity.y = -bspeed;
      //console.log("ye?");
    }
  }
  if(rota[2] == true){
    for(var i = int(bullets.length); i >= int(bullets.length); i--){
      bullets[i-1].velocity.y = bspeed;
      //console.log("ye?");
    }
  }
  if(rota[3] == true){
    for(var i = int(bullets.length); i >= int(bullets.length); i--){
      bullets[i-1].velocity.x = -bspeed;
      //console.log(bullets.length, i);
      //console.log("ye?");
    }
  }
  if(rota[4] == true){
    for(var i = int(bullets.length); i >= int(bullets.length); i--){
      bullets[i-1].velocity.x = bspeed;
      //console.log(bullets.length, i);
      //console.log("ye?");
    }
  }
  if((rota[1] == false)&&(rota[2] == false)&&(rota[3] == false)&&(rota[4] == false)){
    for(var i = int(bullets.length); i >= int(bullets.length); i--){
      bullets[i-1].velocity.x = bspeed;
      //console.log(bullets.length, i);
      //console.log("ye?");
    }
  }
}
