

//------------------------
// global vars
//------------------------
var weaponCount = 5	// default if this is not defined in episode

var powerForce = 8.0
var maxPower = 16.0
var minPower = 4.0

var risiPower = 8.0

var initSpeed = 8.0
var minSpeed = 4.0

var angleSpeed = 18.0
var diveAngle = b2Pi / 2

var rollDuration = 30	//一次翻滚动作需要的时间，？次刷新
var rollTime = 0	
var rollOver = true	//翻滚已经结束？
var roll = false	//飞机是否翻滚过？

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

var trailint = 0
function ControlFly(world, plane){
	
	position = new b2Vec2;
	position.SetV(plane.GetPosition());
	mscenter = new b2Vec2;
	mscenter.SetV(plane.GetWorldCenter());
	
	angle = plane.GetAngle() % (2 * 3.1415926);
	speedV = plane.GetLinearVelocity();
	speed = speedV.Length();
	speedAngle = Math.atan2(speedV.x, speedV.y);
	effectiveSpeed = speed * Math.cos(angle - speedAngle)
	
	if(trailint % 10 == 0) {
		trail.push([position.x * scale, position.y * scale]);
	}
	trailint++;
	
	//----------------------------------------------
	// set plane picture
	if((rollTime > 0 && rollTime < 10) || (rollTime > 20 && rollTime < 30)) plane.SetUserData(document.getElementById("m-plane"))
	else if(rollTime > 10 && rollTime < 20) plane.SetUserData(document.getElementById("p-plane"))
	else if(roll) plane.SetUserData(document.getElementById("r-plane"))
	else plane.SetUserData(document.getElementById("plane"))
	
	//----------------------------------------------
	// roll the plane
	if(keyA && rollOver) {
		rollOver = false;
		rollTime = rollDuration
		keyA = false;
	}
	if(rollOver == false) {
		rollTime--
		if(rollTime == 0){
			rollOver = true;
			if(roll == true) roll = false
			else roll = true
		}
	}
	//----------------------------------------------
	// control plane angle
	if(effectiveSpeed < initSpeed)
		as = angleSpeed - 3.0 + (3.0 * effectiveSpeed / initSpeed)
	else 
		as = angleSpeed
		
	if(roll) as = -as
	if(keyD) plane.SetAngularVelocity(-as);
	if(keyU) plane.SetAngularVelocity(as);
	
	//----------------------------------------------
	// add lift, according to plane angle
	// when rolling, no lift exist
	if(rollOver) {
		plane.ApplyForce(LiftForce(plane.GetMass() * 5) , position);
	}
	
	//----------------------------------------------
	// add power, according to settings and plane angle
	if(keyR && powerForce < maxPower + 4) {
		powerForce += 0.1;
		//keyR = false;
	}
	else if(keyL && powerForce > minPower) {
		powerForce -= 0.1;
		//keyL = false;
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
		
		if(roll) {
			p.x = -p.x
			p.y = -p.y
		}
		
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

