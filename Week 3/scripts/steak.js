

class Steak{
    constructor(){
        
    }
    
    display(translateX = null,translateY = null){
        this.translateX = translateX;
        this.translateY = translateY;

        //Sets an offset based on the rough center of the object
        this.offset = createVector(((this.translateX*1)-360),((this.translateY*1)-300));
        //Sets the origin to the rough center of the object
        this.origin = createVector(this.translateX,this.translateY);

        push();

        //Checks if the input is valid. If not, it throws an error and freezes the program.
        if(typeof translateX === "number" && typeof translateY === "number"){
            translate(this.offset);
        }else if((translateX !== null && translateY === null) || (this.translateX === null && translateY !== null) || 
        (this.translateX !== null && typeof this.translateX !== "number") || (translateY !== null && typeof translateY !== "number")){
            console.error("Invalid translate parameters. Expected two numerical arguments but instead recieved " + translateX + " and " + translateY + ".");
            noLoop();
        }

        strokeWeight(0);
        fill(135, 100, 70);
        ellipse(260, 230, 180, 190);
        ellipse(330, 260, 250, 190);
        ellipse(430, 290, 200, 300);
        push();
        translate(410, 390);
        rotate(0.3);
        ellipse(0, 0, 150, 270);
        pop();
        triangle(160, 136, 250, 136, 198, 200);
        quad(145, 170, 160, 136, 200, 200, 198, 300);
        quad(200, 150, 345, 500, 450, 400, 530, 200);
        quad(370, 136, 500, 138, 530, 200, 300, 300);
        
        beginShape();
        fill(230, 230, 200);
        vertex(198, 136);
        vertex(327, 133);
        vertex(351, 153);
        vertex(375, 133);
        vertex(500, 138);
        vertex(474, 159);
        vertex(379, 195);
        vertex(352, 422);
        vertex(330, 199);
        vertex(270, 165);
        vertex(198, 136);
        endShape();
        pop();

        //Debug code to reveal the object's origin
        /*push();
        strokeWeight(10);
        stroke(0);
        point(this.origin);
        //console.log(this.origin);
        pop();*/
    }
}
