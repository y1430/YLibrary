function bounceOff(object1,object2) {
    if ((object1.x-object2.x)<(object1.width/2 + object2.width/2)&&(object2.x-object1.x)<(object1.width/2 + object2.width/2)){
      object1.velocityX=object1.velocityX*-1;
      object2.velocityX=object2.velocityX*-1;
     }
    
     if ((object2.y-object1.y)<(object1.height/2 + object2.height/2)&&(object1.y-object2.y)<(object1.height/2 + object2.height/2)){
      object1.velocityY=moving_rect.velocityY*-1;
      object2.velocityY=object2.velocityY*-1;
     }
  }
  
  function isTouching(object1,object2) {
    if ((object1.x-object2.x)<(object1.width/2 + object2.width/2)&&(object2.x-object1.x)<(object1.width/2 + object2.width/2)&&(object1.y-object2.y)<(object1.height/2 + object2.height/2)&&(object2.y-object1.y)<(object1.height/2 +object2.height/2)){
     // moving_rect.shapeColor="green";
     // fixed_rect.shapeColor="green";
     return true;
    }
    else {
    //  moving_rect.shapeColor="blue";
    //  fixed_rect.shapeColor="red";
    return false;
    }
  }