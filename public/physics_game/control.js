
//--------------------------         
//keyboard
//--------------------------

var keyL, keyR, keyU, keyD, keySpace, key0, key1;
document.addEventListener("keydown", function(e){			
	switch (e.keyCode) {
		case 37 :
			keyL=true; break;
		case 38 :
			keyU=true; break;
		case 39 :
			keyR=true; break;
		case 40 :
			keyD=true; break;
		case 32:
			keySpace=true; break;
		case 48:
			key0=true; break;
		case 49:
			key1=true; break;
	}
}); 
document.addEventListener("keyup", function(e){			
	switch (e.keyCode) {
		case 37 :
			keyL=false; break;
		case 38 :
			keyU=false; break;
		case 39 :
			keyR=false; break;
		case 40 :
			keyD=false; break;
		case 32:
			keySpace=false; break;
		case 48:
			key0=false; break;
		case 49:
			key1=false; break;
	}
});

//-----------------		 
//mouse
//-----------------

var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;

var canvasPosition = getElementPosition(document.getElementById("canvas"));

document.addEventListener("mousedown", function(e) {
    isMouseDown = true;
    handleMouseMove(e);
    document.addEventListener("mousemove", handleMouseMove, true);
}, true);
         
document.addEventListener("mouseup", function() {
    document.removeEventListener("mousemove", handleMouseMove, true);
    isMouseDown = false;
    mouseX = undefined;
    mouseY = undefined;
}, true);

/*         
function handleMouseMove(e) {
     mouseX = (e.clientX - canvasPosition.x) / 30;
     mouseY = (e.clientY - canvasPosition.y) / 30;
};
*/
         
function getBodyAtMouse() {
	mousePVec = new b2Vec2(mouseX, mouseY);
	var aabb = new b2AABB();
	aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
	aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);
				
	// Query the world for overlapping shapes.

	selectedBody = null;
	world.QueryAABB(getBodyCB, aabb);
	return selectedBody;
}
		
function getBodyCB(fixture) {
	if(fixture.GetBody().GetType() != b2Body.b2_staticBody) {
		if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
			selectedBody = fixture.GetBody();
			return false;
		}
	}
	return true;
}
		 
function getElementPosition(element) {
	var elem=element, tagname="", x=0, y=0;
			   
	while((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
		y += elem.offsetTop;
		x += elem.offsetLeft;
		tagname = elem.tagName.toUpperCase();

		if(tagname == "BODY") {
			elem=0;
		}

		if(typeof(elem) == "object") {
			if(typeof(elem.offsetParent) == "object") {
				elem = elem.offsetParent;
			}
		}
	}
	return {x: x, y: y};
}