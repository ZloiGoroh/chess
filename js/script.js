var grid = function(){
	let grid = '';
	let isWhite = true;
	let bgColor = '';
	for (let i = 0; i < 8; ++i){
		for (let j = 0; j < 8; ++j){
			if (isWhite){
				bgcolor = 'white';
			} else {
				bgcolor = 'black';
			}
			grid += `<div class="${bgcolor}"></div>`
			isWhite = !isWhite;
		}
		isWhite = !isWhite;
	}
	return grid;
}

var game = new Vue({
	el:'#chess',
	data: {
		grid: grid()	
	},
	methods: {
		
	}
});


