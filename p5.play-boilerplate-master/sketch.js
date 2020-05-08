

var palette,border1,border2,border3,r1,r2,r3,r4,r5,r6,r7,r8,eraser,brush,canvas2,border4;
var button,stroke1,stroke2,stroke3,stroke4;
var colour;

function setup(){
    var canvas = createCanvas(1200,1000);

    
    palette=createSprite(100,420,190,600);
    
    border1=createSprite(100,120,3000,1);
    border1.shapeColor="black";

    border2=createSprite(500,720,3000,1);
    border2.shapeColor="black";

    border3=createSprite(1200,420,1,600);
    border3.shapeColor="black";

    

    r1=createSprite(50,200,20,20);
    r1.shapeColor="red";

    r2=createSprite(150,200,20,20);
    r2.shapeColor="yellow";

    r3=createSprite(50,250,20,20);
    r3.shapeColor="lightgreen";

    r4=createSprite(150,250,20,20);
    r4.shapeColor="blue";

    r5=createSprite(50,300,20,20);
    r5.shapeColor="orange";

    r6=createSprite(150,300,20,20);
    r6.shapeColor="violet";

    r7=createSprite(50,350,20,20);
    r7.shapeColor="black";

    r8=createSprite(150,350,20,20);
    r8.shapeColor="brown";

    brush=createSprite(400,400,10,10)
    brush.shapeColor=255;
     
    canvas2=createSprite(700,420,999,599);
    canvas2.shapeColor="white";
    
    eraser=createSprite(100,400,100,20);
    eraser.shapeColor="white";

    stroke1=createSprite(100,470,100,1);
    stroke1.shapeColor="black";

    stroke2=createSprite(100,530,100,10);
    stroke2.shapeColor="black";

    stroke3=createSprite(100,560,100,15);
    stroke3.shapeColor="black";

    stroke4=createSprite(100,500,100,5);
    stroke4.shapeColor="black";

    button=createSprite(100,600,100,20);
    button.shapeColor="turquoise";
    
}

function draw() {
  //stroke(0);
  background("turquoise");
  brush.x=mouseX;
  brush.y=mouseY;

  if(mousePressedOver(r1)){
     brush.shapeColor="red";

  }
  if(mousePressedOver(r2)){
    brush.shapeColor="yellow";

 }
 if(mousePressedOver(r3)){
  brush.shapeColor="lightgreen";

}
if(mousePressedOver(r4)){
  brush.shapeColor="blue";

}
if(mousePressedOver(r5)){
  brush.shapeColor="orange";

}
if(mousePressedOver(r6)){
  brush.shapeColor="violet";

}
if(mousePressedOver(r7)){
  brush.shapeColor="black";

}
if(mousePressedOver(r8)){
  brush.shapeColor="brown";

}
if(mousePressedOver(eraser)){
  brush.shapeColor="white";

}
   
if(mousePressedOver(canvas2)){
   colour=createSprite(brush.x,brush.y,10,10);
   colour.shapeColor=brush.shapeColor;
   colour.width=brush.width;
  colour.height=brush.height;

}

if(mousePressedOver(stroke4)){
  brush.width=10;
  brush.height=10;
  }

if(mousePressedOver(stroke3)){
  brush.width=50;
  brush.height=50;
  }

  if(mousePressedOver(stroke2)){
    brush.width=20;
    brush.height=20;
    }

    if(mousePressedOver(stroke1)){
      brush.width=5;
      brush.height=5;
      }
  
      if(mousePressedOver(button)){
        var c3=createSprite(700,420,999,599);
        c3.shapeColor=255;

        if(mousePressedOver(c3)){
          colour=createSprite(brush.x,brush.y,10,10);
          colour.shapeColor=brush.shapeColor;
          colour.width=brush.width;
         colour.height=brush.height;
       
       }

      }
      
 

   
  push();
  textSize(25);
  text("welcome to the world of colours!!",500,100);
  pop();

  
    
  
   drawSprites();
  
  textSize(20);
  stroke("black");
  fill("black") ;
  text("PALETTE",50,150);

  textSize(20);
  stroke("black");
  fill("black") ;
  text("STROKES",50,450);

  textSize(20);
  stroke("black");
  fill("black") ;
  text("reset",85,605);

}

