class poly{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02
        }
        this.image = loadImage("Images/polygon.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        strokeWeight(2);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        //image(this.image,this.body.position.x,this.body.position.y);
    
    }
}
