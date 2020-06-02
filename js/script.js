var deskRange = 8;      //How big should be the desk
var whiteSide = [];     //Array of white figures
var blackSide = [];     //Array of black figures
var deskFields = [];    //Matrix of the desk



class Fields {
	constructor(){
		isFull = false;
	}

}

class Figures{
        constructor(name, src, range, color, dirs, moveX, moveY){
                this.name = name;
                this.texture = src;
                this.range = range;
                this.isWhite = color;
                this.direction = dirs;
                this.isAttacked = false;
                this.posX = moveX;
                this.posY = moveY;
                this.isMoved = false;
        }
        moveFigure(){
                
        }
}

        //Function, that creates the desk, gives ids and background colour to fields

var grid = function(){
	let grid = '';
	let isWhite = true;
	let bgColor = '';
	for (let i = deskRange; i > 0; --i){
		for (let j = 0; j < deskRange; ++j){
			if (isWhite){
				bgcolor = 'white';
			} else {
				bgcolor = 'black';
			}
			grid += `<div class="${bgcolor}" id="${10 *(j + 1) + i}"></div>`
			isWhite = !isWhite;
		}
		isWhite = !isWhite;
	}
	return grid;
}

var game = new Vue({
	el:'#chess',
	data: {
		grid: grid(),	
                range: `repeat(${deskRange}, 1fr)`

	},
	methods: {
		
	}
});


