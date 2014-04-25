/******************************************
关卡：平飞轰炸
*******************************************/
function CreateEpisodes2e1(world) {	
  weaponCount = 9
  hitTarget = 6

	plane = CreatePlane(world, new b2Vec2(5, 15))
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
	
	BuildTarget(world, new b2Vec2(50, 54.5))
	BuildTarget(world, new b2Vec2(70, 54.5))	
	BuildTarget(world, new b2Vec2(80, 54.5))
	BuildTarget(world, new b2Vec2(90, 54.5))
	BuildTarget(world, new b2Vec2(100, 54.5))
	BuildTarget(world, new b2Vec2(110, 54.5))
	BuildTarget(world, new b2Vec2(60, 54.5))
	
}
/******************************************
俯冲轰炸
*******************************************/
function CreateEpisodes2e2(world) {	
  weaponCount = 4
  hitTarget = 3
	plane = CreatePlane(world, new b2Vec2(5, 15))
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
	
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
/******************************************
分散的目标
*******************************************/
function CreateEpisodes2e3(world) {
  weaponCount = 5
  hitTarget = 2
	plane = CreatePlane(world, new b2Vec2(5, 15))
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
	
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
/******************************************
掩体中的T34
*******************************************/
function CreateEpisodes2e4(world) {
  weaponCount = 2
  hitTarget = 1
	plane = CreatePlane(world, new b2Vec2(5, 15))
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
	
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
/******************************************
不同高度的敌人
*******************************************/
function CreateEpisodes2e5(world) {
  weaponCount = 6
  hitTarget = 2
	plane = CreatePlane(world, new b2Vec2(5, 15))
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
	
	CreateTable(world, new b2Vec2(50, 55))
	CreateTable(world, new b2Vec2(50, 37))
	
	
	BuildTarget(world, new b2Vec2(55, 54.5))	
	BuildTarget(world, new b2Vec2(55, 36.5))
	BuildTarget(world, new b2Vec2(50, 18.5))
}

/******************************************
挑战一下高难度
*******************************************/
function CreateEpisodes2e6(world) {
  weaponCount = 6
  hitTarget = 3
	
	
	CreateWall(world, new b2Vec2(0, 27.5))
	CreateDoor(world, new b2Vec2(120, 27.5))
	
	CreateTable(world, new b2Vec2(25, 36))
	CreateTable(world, new b2Vec2(30, 55))
	//CreateTable(world, new b2Vec2(45, 36))
	CreateTable(world, new b2Vec2(60, 55))
	CreateTable(world, new b2Vec2(75, 36))
	
	plane = CreatePlane(world, new b2Vec2(5, 45))
	
	CreateBasket(world, new b2Vec2(80, 47))
	CreateBasket(world, new b2Vec2(80, 53))
	
	CreateBasket(world, new b2Vec2(63, 36.5))
	CreateBasket(world, new b2Vec2(70, 18.5))
	
	BuildTarget(world, new b2Vec2(28, 36))
	BuildTarget(world, new b2Vec2(48, 54))	
	BuildTarget(world, new b2Vec2(68, 54))
}