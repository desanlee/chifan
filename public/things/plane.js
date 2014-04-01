//------------------------
// global vars
//------------------------
var pl_s = 1
var weaponCount = 2
var powerForce = 8
var minSpeed = 8

function CreatePlane(world) {	
	
//-------------------------	
// create a new plane
// plane length is 3 x 15 = 45px, png should be 60px
//-------------------------
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsArray([
		new b2Vec2(-2, 0.1),
		new b2Vec2(-2, -0.1),
		new b2Vec2(1, -0.1),
		new b2Vec2(1, 0.1)
	])
	dBodyDef.userData=document.getElementById("stuka");
	plane = world.CreateBody(dBodyDef);
	dBodyDef.userData="";
	plane.CreateFixture(fixWood);
	return plane;
}

function InitPlane(world, plane, position) {

	plane.SetAngularDamping(57);
	
	plane.SetAngle(0);
	plane.SetPosition(position);
	plane.SetLinearVelocity(new b2Vec2(minSpeed,0));
	
	weaponCount = 5;
}

function ControlFly(world, plane){
	
	position = new b2Vec2;
	position.SetV(plane.GetPosition());
	mscenter = new b2Vec2;
	mscenter.SetV(plane.GetWorldCenter());
	
	trail.push([position.x * scale, position.y * scale]);
//--------------------------
// control plane angle
//--------------------------
	angle = plane.GetAngle();
	speedV = plane.GetLinearVelocity();
	speed = speedV.x + speedV.y;
	
	if(angle > -1.5) {
		if(keyU) plane.SetAngularVelocity(-18);
	}
	if(angle < 1.5) {
		if(keyD) plane.SetAngularVelocity(16);
	}
	
//---------------------------
// apply forces
//---------------------------
	
	// add lift force, according to plane angle
	if(angle > -1 && angle < 1 ) {
		plane.ApplyForce(new b2Vec2(0, - (plane.GetMass() * 5)) , position);
	}
	
	// add power, according to settings and plane angle

	if(keyR && powerForce < 12) {
		powerForce += 4;
		keyR = false;
	}
	else if(keyL && powerForce > 4) {
		powerForce -= 4;
		keyL = false;
	}
	plane.ApplyForce(PowerForce(powerForce), mscenter);
	
	// add risistance
	if(speed > minSpeed)
		plane.ApplyForce(RisisForce(8), mscenter);

//---------------------------
// use weapon
//---------------------------	
	if(keySpace && weaponCount > 0 && angle > -0.5) {
		keySpace = false
		DropBomb(world, plane);
		weaponCount --;
	}
//----------------------------
// internal functions
//----------------------------
	function PowerForce(power) {
		p = new b2Vec2;
		p.x = position.x - mscenter.x;
		p.y = position.y - mscenter.y;
		
		return new b2Vec2(
			power * p.x / p.Length(),
			power * p.y / p.Length()
		)
	}

	function RisisForce(power) {
		p = plane.GetLinearVelocity();
		
		return new b2Vec2(
			- power * p.x / p.Length(),
			- power * p.y / p.Length()
		)
	}
}

function DropBomb(world, plane) {
	// bomb size is 15 px
	position = new b2Vec2;
	position.SetV(plane.GetPosition());
	position.x -= 0.6
	position.y += 0.6
	
	bombDef = new b2BodyDef;
	bombDef.type = b2Body.b2_dynamicBody;
	bombDef.userData=document.getElementById("bomb");
	
	fixWood.shape = new b2PolygonShape();
	fixWood.shape.SetAsBox(0.4, 0.1);
	bombDef.position.SetV(position);
	bomb = world.CreateBody(bombDef);
	bomb.CreateFixture(fixWood);
	bomb.SetLinearVelocity(plane.GetLinearVelocity());
	bomb.SetAngle(plane.GetAngle());
	btrail.push([position.x * scale, position.y * scale])
}



