
// furniture scale
var fu_s = 1;

function CreateBasket(world, position) { 
	// length of edge is 6
	// png length is 60
	basketDef = new b2BodyDef;
	basketDef.type = b2Body.b2_dynamicBody;
	basketDef.userData = document.getElementById("basket")
	
	basketDef.position.SetV(position)	
	basket = world.CreateBody(basketDef)
	
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsBox(3,3);
	basket.CreateFixture(fixWood);
}

function CreateChair(world, position) {
	// length is 9, height is 10
	// png is 90 x 200
	chairDef = new b2BodyDef;
	chairDef.type = b2Body.b2_dynamicBody;
	chairDef.userData = document.getElementById("chair")
	
	chairDef.position.SetV(position)	
	chair = world.CreateBody(chairDef)
	
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsArray([
		new b2Vec2(-4.5, -8),
		new b2Vec2(-4.5, -10),
		new b2Vec2(4.5, -10),
		new b2Vec2(4.5, -8)
	])	
	chair.CreateFixture(fixWood);
	
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsArray([
		new b2Vec2(-0.5, 0),
		new b2Vec2(-0.5, -10),
		new b2Vec2(0.5, -10),
		new b2Vec2(0.5, 0)
	])	
	chair.CreateFixture(fixWood);
	
	fixWood.shape = new b2CircleShape(0.5);
	fixWood.shape.SetLocalPosition(new b2Vec2(-4.5, -0.5))	
	chair.CreateFixture(fixWood);
	fixWood.shape.SetLocalPosition(new b2Vec2(4.5, -0.5))	
	chair.CreateFixture(fixWood);
}

function CreateTable(world, position) {
	// length is 18, height is 18
	// png is 180 x 360
	tableDef = new b2BodyDef;
	tableDef.type = b2Body.b2_dynamicBody;
	tableDef.userData = document.getElementById("table")
	
	tableDef.position.SetV(position)	
	table = world.CreateBody(tableDef)
	
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsArray([
		new b2Vec2(-9, -16),
		new b2Vec2(-9, -18),
		new b2Vec2(9, -18),
		new b2Vec2(9, -16)
	])	
	table.CreateFixture(fixWood);
	
	fixWood.shape = new b2CircleShape(0.5);
	fixWood.shape.SetLocalPosition(new b2Vec2(-8.5, -0.5))	
	table.CreateFixture(fixWood);
	fixWood.shape.SetLocalPosition(new b2Vec2(8.5, -0.5))	
	table.CreateFixture(fixWood);
}

function CreateLamp(world, position) {
	// length is 6, height is 10
	// png is 60 x 200
	lampDef = new b2BodyDef;
	lampDef.type = b2Body.b2_dynamicBody;
	lampDef.userData = document.getElementById("tablelamp")
	
	lampDef.position.SetV(position)	
	chair = world.CreateBody(lampDef)
	
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsArray([
		new b2Vec2(-3, -6),
		new b2Vec2(-2.5, -10),
		new b2Vec2(2.5, -10),
		new b2Vec2(3, -6)
	])	
	chair.CreateFixture(fixWood);
	
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsArray([
		new b2Vec2(-0.5, 0),
		new b2Vec2(-0.5, -6),
		new b2Vec2(0.5, -6),
		new b2Vec2(0.5, 0)
	])	
	chair.CreateFixture(fixWood);
	
	fixWood.shape = new b2CircleShape(0.2);
	fixWood.shape.SetLocalPosition(new b2Vec2(-3, -0.2))	
	chair.CreateFixture(fixWood);
	fixWood.shape.SetLocalPosition(new b2Vec2(3, -0.2))	
	chair.CreateFixture(fixWood);
}

function CreateDroplight(world, position) {
	// length is 6, height is 10
	// png is 60 x 200
	droplightDef = new b2BodyDef;
	droplightDef.type = b2Body.b2_staticBody;
	droplightDef.userData = document.getElementById("droplight")
	
	droplightDef.position.SetV(position)	
	droplight = world.CreateBody(droplightDef)
	
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsArray([
		new b2Vec2(-3, 10),
		new b2Vec2(-0.5, 0),
		new b2Vec2(0.5, 0),
		new b2Vec2(3, 10)
	])	
	droplight.CreateFixture(fixWood);
}

function CreateWall(world, pisition) {
}

function CreateDoor(world, position) {
}

function CreateWindow(world, position) {
}

