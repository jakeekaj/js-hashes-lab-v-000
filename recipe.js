'use strict';

function addIngredient (playlist, name, title){
	playlist[name] = title;
	return playlist;
}

function removeIngredient(object, name){
	delete object[name];
	return object;
}

function updateIngredient(object, ing, amount){
  object[ing] = amount
  return object
}

function readRecipe(object){
  	for (var key in object) {
  		console.log("this recipe calls for "+ object[key] +" of "+ key)
  	}
}
