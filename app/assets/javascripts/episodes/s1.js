function CreateEpisodes1e1(world) {	
  weaponCount = 0
  hitTarget = 0
}

function CreateEpisodes1e2(world) {	
  weaponCount = 0
  hitTarget = 0
	
	CreateTable(world, new b2Vec2(55, 53))
	
	CreateBasket(world, new b2Vec2(55, 34))
	CreateBasket(world, new b2Vec2(61, 34))
	CreateBasket(world, new b2Vec2(57, 28))
	CreateBasket(world, new b2Vec2(58, 22))
	
	CreateChair(world, new b2Vec2(30, 55))
	
	CreateDroplight(world, new b2Vec2(30, 10))
	CreateDroplight(world, new b2Vec2(90, 10))
}