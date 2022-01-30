function setup() {
    createCanvas(600,600);
    background(81);
    box = createSprite(300,300,150,150);
    box.shapeColor = "#e0cd00";
  }
  
  function draw() 
  {
     if (keyIsDown(LEFT_ARROW))
     {
      background("#d10486")
     }
    
  
    if (keyIsDown(RIGHT_ARROW)) 
    {
      background("#00d9e0");
      
    }
   
      if (keyIsDown(UP_ARROW)) 
    {
      background("#6100e0");
     
    }
  
    if (keyIsDown(DOWN_ARROW)) 
    {
      background("#00e013");
    }
  
  
    
    drawSprites();
  }
  
  
  