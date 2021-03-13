class String {

    constructor(bodyA,pointB){
    
    var option = {
    
        bodyA:bodyA,
        pointB:pointB,
        stiffness : 0.05,
        length : 50
    
    }
    this.pointB = pointB
    this.chain = Constraint.create(option)
    World.add(world,this.chain);
    
    }

    fly(){

		this.chain.bodyA = null;
		
		}

    attach(body){

        this.chain.bodyA = body;

    }


    display(){
    
        if(this.chain.bodyA){
    
        var PointA = this.chain.bodyA.position
        var PointB = this.pointB
    
        push();
        strokeWeight(5);
        line(PointA.x,PointA.y,PointB.x,PointB.y)
        pop();
    
    
        }
    
    
    
    }
    
    
    
    
    
    }
    
    