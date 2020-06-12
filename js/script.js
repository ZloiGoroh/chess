var deskRange = 8;      		//How big should be the desk (don't make it too big)
var whiteSide = [];     		//Array of white figures
var blackSide = [];     		//Array of black figures
var deskFields = [];			//Matrix of the desk

class Fields {
	constructor(){
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
        constructor(name, src, range, color, dirs, startX, startY, number){
                this.name = name;
                this.texture = src;
                this.isWhite = color;
                this.direction = dirs;
                this.position = {
			lastPosX : null,
			lastPosY : null,
			currentX : startX,
			currentY : startY
		};

		if (this.isWhite){
			this.ID = 'w' + number;	
		} else {
			this.ID = 'b' + number;
		};

		if (name == "king" || name == "pawn"){
                	this.isMoved = false;
		};

		if (name == "king"){
	        	this.isAttacked = false; 	
		};

		if (range == 'any'){
			this.range = deskRange - 1;
		} else {
			this.range = range;
		}
        }

        getCoords(time){
		let coordstr = '';
		if (time == 'new'){
			coordstr=String(this.position.currentX) + String(this.position.currentY);
		}
		if (time == 'old'){
			coordstr=String(this.position.lastPosX) + String(this.position.lastPosY);
		}
		return document.getElementById(coordstr)
        }

	aim(){
		for (let dir in this.direction){
			let access = true;
			let nowAtX = this.position.currentX;
			let nowAtY = this.position.currentY;
			let i = 0;
			while (access && i < this.range){
				let goingToX = nowAtX + this.direction[dir][0];
				let goingToY = nowAtY + this.direction[dir][1]
				if (goingToX > 0 && 
				    goingToY > 0 &&
				    goingToX <= deskRange &&
				    goingToY <= deskRange){
					let aimedCage = deskFields[goingToX][goingToY];
					if (aimedCage.content.isWhite == this.isWhite){
						access = false;
					} else {
						nowAtX = goingToX;
						nowAtY = goingToY;
						deskFields[goingToX][goingToY].isAllowed = true;
						if (aimedCage.content.name != null){
							access = false;
						}
					}			
				} else { 
					access = false; 
				}
				++i;
			}
		}			
		console.log(deskFields);
	}

	placeFigure(){
		let el = this.getCoords('new');
		el.innerHTML = `<img src="${this.texture}" id="${this.ID}">`;
		deskFields[this.position.currentX][this.position.currentY].content = this;
		if (this.position.lastPosX != null && this.position.lastPosY != null){
			let oldEl = this.getCoords('old');
			oldEl.innerHTML = "";
			deskFields[this.position.lastPosX][this.position.posY].content = null;
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
			whiteSide.push(new Figures(allFigures[i].name, allFigures[i].src, allFigures[i].range, allFigures[i].isWhite, allFigures[i].dirs, allFigures[i].startPosX, allFigures[i].startPosY, whiteSide.length));
			whiteSide[whiteSide.length - 1].placeFigure();
		} else {blackSide.push(new Figures(allFigures[i].name, allFigures[i].src, allFigures[i].range, allFigures[i].isWhite, allFigures[i].dirs, allFigures[i].startPosX, allFigures[i].startPosY, blackSide.length));
			blackSide[blackSide.length - 1].placeFigure();
		}
	}	
}


var targetFig = null;
var clickReaction = function(){
	if (event.target.tagName == 'DIV'){
		if (targetFig != null){
			targetFig.position.lastPosX = targetFig.position.currentX;
			targetFig.position.lastPosY = targetFig.position.currentY;
			targetFig.position.currentX = event.target.id[0];
			targetFig.position.currentY = event.target.id[1];
			targetFig.placeFigure();
		}		
	}
	else {
		let targ = event.target.id;
		if (targ[0] == 'w'){
			targetFig = whiteSide[parseInt(targ.substr(1), 10)];
		} else {
			targetFig = blackSide[parseInt(targ.substr(1), 10)];
		}
		targetFig.aim();
		console.log(targetFig);
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


