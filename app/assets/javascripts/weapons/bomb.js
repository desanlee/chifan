function Fire(world, plane) {	
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