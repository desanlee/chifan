function CreateEpisodes2e1(world) {
  weaponCount = 5
  hitTarget = 2

	CreateBasket(world, new b2Vec2(15, 53.5))
	CreateBasket(world, new b2Vec2(16, 46))
	CreateBasket(world, new b2Vec2(45, 35))
	CreateBasket(world, new b2Vec2(85, 53.5))
	
	CreateTable(world, new b2Vec2(50, 55))
	
	CreateChair(world, new b2Vec2(34, 55))
	CreateLamp(world, new b2Vec2(84, 49))
	
	CreateDroplight(world, new b2Vec2(34, 10))
	
	BuildTarget(world, new b2Vec2(70, 54.5))	
	BuildTarget(world, new b2Vec2(100, 54.5))
	BuildTarget(world, new b2Vec2(55, 36.5))
}