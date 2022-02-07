canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10
rover_y=10

background_image="mars.jpg"
rover_image="rover.png"

function add(){
    background_image_tag=new Image();
    background_image_tag.onload=upload_background;
    background_image_tag.src=background_image;

    rover_image_tag=new Image();
    rover_image_tag.onload=upload_rover;
    rover_image_tag.src=rover_image;

}
function upload_background(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height)

}

function upload_rover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height)
    
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypressed=e.keyCode;

    if (keypressed=="38") {
      up();
      console.log("up");
        
    }
    if (keypressed == "40");
    { down();
        console.log("down")

    }
    if (keypressed == "37");
    { left();
        console.log("left")

    }
    if (keypressed == "39");
    { right();
        console.log("right")

    }

}
function up(){
    if(rover_y >=0)
    {
        rover_y= rover_y - 10;
        console.log("whaen up arrow is pressed, x = " = rover_x + " y = "+rover_y)
        upload_background();
        upload_rover();
    }
}
function down(){
    if(rover_y <=500)
    {
        rover_y= rover_y + 10;
        console.log("whaen up arrow is pressed, x = " = rover_x + " y = "+rover_y)
        upload_background();
        upload_rover();
    }
}
function left(){
    if(rover_x >=0)
    {
        rover_x= rover_x - 10;
        console.log("whaen up arrow is pressed, x = " = rover_x + " y = "+rover_y)
        upload_background();
        upload_rover();
    }
}
function right(){
    if(rover_x <=700)
    {
        rover_x= rover_x + 10;
        console.log("whaen up arrow is pressed, x = " = rover_x + " y = "+rover_y)
        upload_background();
        upload_rover();
    }
}







    
