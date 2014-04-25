/******************************************
1,1
关卡：自由飞行练习
介绍：这一关是宽敞的空房间，好好利用这一关练习飞行技巧
任务：快速从出口飞出房间
*******************************************/
function CreateEpisodes1e1(world) {	
  weaponCount = 0
  hitTarget = 0
	
	plane = CreatePlane(world, new b2Vec2(5, 15))
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
}

/******************************************
1,2	
关卡：曲线飞行练习
介绍：房间里摆放了一些简单家具，千万不要撞到它们
任务：快速从出口飞出房间
*******************************************/
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
	
	CreateChair(world, new b2Vec2(55, 55))
	
	CreateDroplight(world, new b2Vec2(30, 10))
	CreateDroplight(world, new b2Vec2(90, 10))
}
/******************************************
1,3 
关卡：爬升练习
介绍：加大发动机动力爬升，注意不要撞到天花板
任务：快速从出口飞出房间
*******************************************/
function CreateEpisodes1e3(world) {	
  weaponCount = 0
  hitTarget = 0
	
	CreateTable(world, new b2Vec2(20, 54.5))
	
	plane = CreatePlane(world, new b2Vec2(5, 45))
	
	CreateBasket(world, new b2Vec2(49, 52))
	CreateBasket(world, new b2Vec2(56, 52))
	
	CreateBasket(world, new b2Vec2(50, 46))
	CreateBasket(world, new b2Vec2(50, 40))
	CreateBasket(world, new b2Vec2(50, 34))
	CreateBasket(world, new b2Vec2(50, 28))
	CreateBasket(world, new b2Vec2(50, 22))
	CreateBasket(world, new b2Vec2(50, 16))

	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
	
}
/******************************************
1,4
关卡：俯冲练习
*******************************************/
function CreateEpisodes1e4(world) {	
  weaponCount = 0
  hitTarget = 0
	
	CreateTable(world, new b2Vec2(80, 54.5))
	
	plane = CreatePlane(world, new b2Vec2(5, 9))
	
	CreateBasket(world, new b2Vec2(34, 52))
	CreateBasket(world, new b2Vec2(34, 46))
	CreateBasket(world, new b2Vec2(40, 52))
	CreateBasket(world, new b2Vec2(40, 46))
	CreateBasket(world, new b2Vec2(40, 40))
	CreateBasket(world, new b2Vec2(40, 34))
	CreateBasket(world, new b2Vec2(40, 28))
	CreateBasket(world, new b2Vec2(40, 22))
	CreateBasket(world, new b2Vec2(40, 16))
	
	CreateBasket(world, new b2Vec2(80, 34))
	CreateBasket(world, new b2Vec2(80, 28))
	CreateBasket(world, new b2Vec2(80, 22))
	CreateBasket(world, new b2Vec2(80, 16))
	CreateBasket(world, new b2Vec2(80, 10))
	CreateBasket(world, new b2Vec2(80, 4))
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
	
}
/******************************************
1,5
关卡：转身和翻滚
*******************************************/
function CreateEpisodes1e5(world) {	
  weaponCount = 0
  hitTarget = 0
	
	CreateTable(world, new b2Vec2(45, 55))
	CreateTable(world, new b2Vec2(45, 37))
	CreateTable(world, new b2Vec2(65, 55))
	CreateTable(world, new b2Vec2(65, 37))
	CreateTable(world, new b2Vec2(25, 55))
	CreateTable(world, new b2Vec2(25, 37))
	
	plane = CreatePlane(world, new b2Vec2(8, 10))

	CreateWall(world, new b2Vec2(120, 27.5))
	CreateDoor(world, new b2Vec2(0, 27.5))
}
/******************************************
1,6
关卡：空中大回环
*******************************************/
function CreateEpisodes1e6(world) {	
  weaponCount = 0
  hitTarget = 0

	CreateTable(world, new b2Vec2(25, 55))
	CreateTable(world, new b2Vec2(25, 37))	
	CreateTable(world, new b2Vec2(45, 55))
	CreateTable(world, new b2Vec2(45, 37))
	CreateTable(world, new b2Vec2(65, 55))
	CreateTable(world, new b2Vec2(85, 55))
	CreateTable(world, new b2Vec2(105, 55))

	
	plane = CreatePlane(world, new b2Vec2(12, 25))

	CreateBasket(world, new b2Vec2(105, 34))
	CreateBasket(world, new b2Vec2(104, 28))
	CreateBasket(world, new b2Vec2(105, 22))
	CreateBasket(world, new b2Vec2(103, 16))
	CreateBasket(world, new b2Vec2(104, 10))
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
}