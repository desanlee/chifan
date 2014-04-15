function CreateEpisodes1e1(world) {	
  weaponCount = 0
  hitTarget = 0
	
	plane = CreatePlane(world, new b2Vec2(5, 15))
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
}

function CreateEpisodes1e2(world) {	
  weaponCount = 0
  hitTarget = 0
	
	CreateTable(world, new b2Vec2(55, 53))
	
	plane = CreatePlane(world, new b2Vec2(5, 18))
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
	
	
	
	CreateBasket(world, new b2Vec2(55, 34))
	CreateBasket(world, new b2Vec2(61, 34))
	CreateBasket(world, new b2Vec2(57, 28))
	CreateBasket(world, new b2Vec2(58, 22))
	
	CreateChair(world, new b2Vec2(30, 55))
	
	CreateDroplight(world, new b2Vec2(30, 10))
	CreateDroplight(world, new b2Vec2(90, 10))
}