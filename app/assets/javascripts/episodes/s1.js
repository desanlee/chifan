function CreateEpisodes1e1(world) {	
  weaponCount = 5
  hitTarget = 0

	BuildTarget(world, new b2Vec2(70, 54.5))	
	BuildTarget(world, new b2Vec2(80, 54.5))
	BuildTarget(world, new b2Vec2(90, 54.5))
	BuildTarget(world, new b2Vec2(100, 54.5))
	BuildTarget(world, new b2Vec2(110, 54.5))
	BuildTarget(world, new b2Vec2(60, 54.5))
	BuildTarget(world, new b2Vec2(50, 54.5))
}

function CreateEpisodes1e2(world) {	
  weaponCount = 9
  hitTarget = 6

	BuildTarget(world, new b2Vec2(70, 54.5))	
	BuildTarget(world, new b2Vec2(80, 54.5))
	BuildTarget(world, new b2Vec2(90, 54.5))
	BuildTarget(world, new b2Vec2(100, 54.5))
	BuildTarget(world, new b2Vec2(110, 54.5))
	BuildTarget(world, new b2Vec2(60, 54.5))
	BuildTarget(world, new b2Vec2(50, 54.5))
}

function CreateEpisodes1e3(world) {	
  weaponCount = 4
  hitTarget = 3

	CreateBasket(world, new b2Vec2(70, 52))
	CreateBasket(world, new b2Vec2(70, 46))
	CreateBasket(world, new b2Vec2(70, 40))
	
	CreateBasket(world, new b2Vec2(76, 53))
	CreateBasket(world, new b2Vec2(76, 47))
	
	CreateBasket(world, new b2Vec2(82, 53))
	
	BuildTarget(world, new b2Vec2(70, 36))
	BuildTarget(world, new b2Vec2(76, 42.5))
	BuildTarget(world, new b2Vec2(82, 48))
	BuildTarget(world, new b2Vec2(88, 54.5))

}