

//------------------------
// global vars
//------------------------
var weaponCount = 5	// default if this is not defined in episode

var powerForce = 8
var maxPower = 16
var minPower = 4

var risiPower = 8

var initSpeed = 8.0
var minSpeed = 4.0

var diveAngle = b2Pi / 2

//---------------------------------------------	
// create a new plane
// plane length is 3 x 15 = 45px, png should be 60px
//---------------------------------------------
function CreatePlane(world, position) {	
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsArray([
		new b2Vec2(-2, 0.1),
		new b2Vec2(-2, -0.1),
		new b2Vec2(1, -0.1),
		new b2Vec2(1, 0.1)
	])
	dBodyDef.userData=document.getElementById("plane");
	plane = world.CreateBody(dBodyDef);
	dBodyDef.userData="";
	plane.CreateFixture(fixWood);
	
	plane.SetAngularDamping(57);
	
	plane.SetAngle(0);
	plane.SetPosition(position);
	plane.SetLinearVelocity(new b2Vec2(initSpeed,0));
	
	return plane;
}
//----------------------------------------------
//
//----------------------------------------------

var trailint = 10
function ControlFly(world, plane){
	
	position = new b2Vec2;
	position.SetV(plane.GetPosition());
	mscenter = new b2Vec2;
	mscenter.SetV(plane.GetWorldCenter());
	
	if(trailint % 10 == 0) {
		trail.push([position.x * scale, position.y * scale]);
	}
	trailint++;
	
	//----------------------------------------------
	// control plane angle
	angle = plane.GetAngle() % (2 * 3.1415926);
	speedV = plane.GetLinearVelocity();
	speed = speedV.Length();
	speedAngle = Math.atan2(speedV.x, speedV.y);
	

	if(keyU) plane.SetAngularVelocity(-18);
	if(angle < diveAngle) {
		if(keyD) plane.SetAngularVelocity(16);
	}
	
	//----------------------------------------------
	// add lift, according to plane angle
	plane.ApplyForce(LiftForce(plane.GetMass() * 5) , position);
	
	//----------------------------------------------
	// add power, according to settings and plane angle
	if(keyR && powerForce < maxPower) {
		powerForce += 4;
		keyR = false;
	}
	else if(keyL && powerForce > minPower) {
		powerForce -= 4;
		keyL = false;
	}
	plane.ApplyForce(PowerForce(powerForce), mscenter);
	
	// add risistance
	if(speed > minSpeed)
		plane.ApplyForce(
			RisisForce(risiPower * speed/initSpeed), 
			mscenter
		);

	//---------------------------
	// use weapon
	if(keySpace && weaponCount > 0) {
		keySpace = false
		Fire(world, plane);
		weaponCount --;
	}
	
	//----------------------------
	// internal functions
	function PowerForce(power) {
		p = new b2Vec2;
		p.x = position.x - mscenter.x;
		p.y = position.y - mscenter.y;
		
		return new b2Vec2(
			power * p.x / p.Length(),
			power * p.y / p.Length()
		)
	}

	function LiftForce(power) {
		if(speed < initSpeed)
			realPower = (power * speed) * Math.cos(angle - speedAngle)/ initSpeed
		else 
			realPower = power
		p = new b2Vec2;
		p.x = position.x - mscenter.x;
		p.y = position.y - mscenter.y;
		
		return new b2Vec2(
			realPower * p.y / p.Length(),
			- realPower * p.x / p.Length()
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

