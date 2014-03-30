
// furniture scale
var fu_t = 1;

function CreateTank(world, position) { 
	// length of edge is 2
	// png length is 30
	tankDef = new b2BodyDef;
	tankDef.type = b2Body.b2_dynamicBody;
	tankDef.userData=document.getElementById("t34");
	
	fixWood.shape = new b2PolygonShape();
	fixWood.shape.SetAsBox(2, 0.8);
	tankDef.position.SetV(position);
	tank = world.CreateBody(tankDef);
	tank.CreateFixture(fixWood);
	tank.ApplyForce(new b2Vec2(-2700, 0) , position);
	
	return tank;
}