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

function CreateEpisodes2e2(world) {
  weaponCount = 2
  hitTarget = 1

	CreateBasket(world, new b2Vec2(50, 52))
	CreateBasket(world, new b2Vec2(47, 46))
	CreateBasket(world, new b2Vec2(53, 46))
	CreateBasket(world, new b2Vec2(50, 40))
	CreateBasket(world, new b2Vec2(44, 40))
	CreateBasket(world, new b2Vec2(56, 40))
	CreateBasket(world, new b2Vec2(50, 34))
	
	CreateBasket(world, new b2Vec2(70, 53))
	CreateBasket(world, new b2Vec2(76, 53))
	CreateBasket(world, new b2Vec2(73, 47))
	CreateBasket(world, new b2Vec2(74, 41))
		
	BuildTarget(world, new b2Vec2(57, 54.5))	
}

function CreateEpisodes2e3(world) {
  weaponCount = 6
  hitTarget = 2

	CreateTable(world, new b2Vec2(50, 55))
	CreateTable(world, new b2Vec2(50, 37))
	
	
	BuildTarget(world, new b2Vec2(50, 54.5))	
	BuildTarget(world, new b2Vec2(50, 36.5))
	BuildTarget(world, new b2Vec2(50, 18.5))
}