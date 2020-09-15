class Rope{

    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 200
        }
        
        this.string = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.string);
    }
    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("blue");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

}