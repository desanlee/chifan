
// furniture scale
var fu_s = 1;

function CreateBasket(world, position) { 
	// length of edge is 4
	// png length is 60
	basketDef = new b2BodyDef;
	basketDef.type = b2Body.b2_dynamicBody;
	basketDef.userData = document.getElementById("basket")
	
	basketDef.position.SetV(position)	
	basket = world.CreateBody(basketDef)
	
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsBox(2,1);
	basket.CreateFixture(fixWood);
}

function CreateChair(world, position, direction) {
	// length is 4, height is 6
	dBodyDef.position.SetV(position)	
	chair = world.CreateBody(dBodyDef)
	
	fixWood.shape = new b2PolygonShape;
	fixWood.shape.SetAsArray([
		new b2Vec2(-2 * fu_s, -3 * fu_s),
		new b2Vec2(-2 * fu_s, -4 * fu_s),
		new b2Vec2(2 * fu_s, -4 * fu_s),
		new b2Vec2(2 * fu_s, -3 * fu_s)
	])	
	chair.CreateFixture(fixWood);
	
	if (direction == "left") {
		fixWood.shape.SetAsArray([
			new b2Vec2(-2 * fu_s, -4 * fu_s),
			new b2Vec2(-2 * fu_s, -6 * fu_s),
			new b2Vec2(-1 * fu_s, -6 * fu_s),
			new b2Vec2(-1 * fu_s, -4 * fu_s)
		])
	} else {
		fixWood.shape.SetAsArray([
			new b2Vec2(2 * fu_s, -4 * fu_s),
			new b2Vec2(2 * fu_s, -6 * fu_s),
			new b2Vec2(1 * fu_s, -6 * fu_s),
			new b2Vec2(1 * fu_s, -4 * fu_s)
		])
	}
	chair.CreateFixture(fixWood);
	
	fixWood.shape = new b2CircleShape(0.5);
	fixWood.shape.SetLocalPosition(new b2Vec2(-2 * fu_s, 0))	
	chair.CreateFixture(fixWood);
	fixWood.shape.SetLocalPosition(new b2Vec2(2 * fu_s, 0))	
	chair.CreateFixture(fixWood);
}

function CreateTable(world, position) {
}