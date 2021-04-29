var Dog1,Dog2,Dog,database,FoodStock, foodS 

function preload()
{
	Dog1 = loadImage("images/dogImg.png");
  Dog2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  Dog = createSprite(400,600,20,20);
  Dog.addImage(Dog1);
  Dog.scale = 0.3

  FoodStock = database.ref('Food')
  FoodStock.on("value", Readstock);

}


function draw() {  
  background("green");

  if(keyDown(UP_ARROW)){
    Dog.addImage(Dog2)
    Rightstock();
  }

  textSize(30)
  text("Press up arrow to feed the dog", 250,100)
  text("Food left:" + foodS,350 ,150)
  
  drawSprites();
  //add styles here

}

function Readstock(data){
foodS = data.val();
}

function Rightstock(){
  database.ref('/').update({
    Food : foodS - 1
  });
}

