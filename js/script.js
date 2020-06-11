var deskRange = 8;      		//How big should be the desk (don't make it too big)
var whiteSide = [];     		//Array of white figures
var blackSide = [];     		//Array of black figures
var deskFields = [];			//Matrix of the desk

class Fields {
	constructor(){
		this.isFull = false,
		this.content = {},
		this.isAllowed = false
	}

}


for (let i = 1; i < deskRange + 1; ++i){
	deskFields[i]=[];
	for (let j = 1; j < deskRange + 1; ++j){
		deskFields[i][j] = new Fields();
	}
}



class Figures{
        constructor(name, src, range, color, dirs, startX, startY){
                this.name = name;
                this.texture = src;
                this.range = range;
                this.isWhite = color;
                this.direction = dirs;
                this.position = {
			lastPosX : null,
			lastPosY : null,
			currentX : startX,
			currentY : startY
		};
		if (name == "king" || name == "pawn"){
                	this.isMoved = false;
		};
		if (name == "king"){
	        	this.isAttacked = false; 	
		};
        }

        moveFigure(){
                
        }

	aim(){
		
	}

	placeFigure(){
		let coordinats = String(this.position.currentX) + String(this.position.currentY);
		let el = document.getElementById(coordinats);
		el.innerHTML = `<img src="${this.texture}">`	
		deskFields[this.position.currentX][this.position.currentY] = {
			isFull: true,
			content: this
		};
		//deskFields[this.position.currentX][this.position.currentY].content = this;
		if (this.position.lastPosX != null && this.position.lastPosY != null){
			let oldCoords = String(this.position.lastPosX) + String(this.position.lastPosY);
			let oldEl = document.getElementById(oldCoords);
			oldEl.innerHTML = "";
			deskFields[this.position.lastPosX][this.position.posY] = {
				isFull: false,
				content: {}
			};
		}
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






	//Making numbers on the top and the bottom of the desk, according to the range
var nums = function(){
	let tempNums = '';
	for (let i = deskRange; i > 0; --i){
		tempNums += `<span>${i}</span>`
	}
	return tempNums;
}
	//Making letters on the left and right sides (A-Z)
var letters = function(){
	let tempLetters = '';
	for (let i = 0; i < deskRange; ++i){
		tempLetters += `<span>${String.fromCharCode(65+i)}</span>`
	}
	return tempLetters;
}



	//Sorting figures between two sides

var positionFigures = function(){

	for (i in allFigures){
		if (allFigures[i].isWhite){
			whiteSide.push(new Figures(allFigures[i].name, allFigures[i].src, allFigures[i].range, allFigures[i].isWhite, allFigures[i].dirs, allFigures[i].startPosX, allFigures[i].startPosY));
			whiteSide[whiteSide.length - 1].placeFigure();
		} else {blackSide.push(new Figures(allFigures[i].name, allFigures[i].src, allFigures[i].range, allFigures[i].isWhite, allFigures[i].dirs, allFigures[i].startPosX, allFigures[i].startPosY));
			blackSide[blackSide.length - 1].placeFigure();
		}
	}	
}


var clickReaction = function(){
	if (event.target.tagName == 'DIV'){
		console.log("Вы тыкнули на пустую клетку");
	}
	else {
		console.log('Вы тыкнули на фигуру');
	}
}



var game = new Vue({
	el:'#chess',
	data: {
		grid: grid(),	
                range: `repeat(${deskRange}, 1fr)`,
		nums: nums(),
		letters: letters()
	},
	methods: {
		
	}
});


positionFigures();
console.log(deskFields);

document.querySelector('.cages').addEventListener("click", clickReaction);


