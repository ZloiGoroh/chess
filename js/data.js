var allFigures = [
	{
		name : "bishop",
		src : "img/bB.png",
		isWhite : false,
		range : "any",
		dirs : [[-1, -1],[-1, 1],[1, -1],[1, 1]],
		startPosX: 3,
		startPosY: 8	
	},
	{
		name : "bishop",
		src : "img/bB.png",
		isWhite : false,
		range : "any",
		dirs : [[-1, -1],[-1, 1],[1, -1],[1, 1]],
		startPosX: 6,
		startPosY: 8	
	},
	{
		name : "king",
		src : "img/bK.png",
		isWhite : false,
		range : 1,
		dirs : [[-1, -1], [-1, 1], [1, -1], [1, 1], [1, 0], [-1, 0], [0, 1], [0, -1]],
		startPosX: 5,
		startPosY: 8
	},
	{
		name : "knight",
		src : "img/bN.png",
		isWhite : false,
		range : 1,
		dirs : [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]],
		startPosX: 2,
		startPosY: 8	
	},
	{
		name : "knight",
		src : "img/bN.png",
		isWhite : false,
		range : 1,
		dirs : [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]],
		startPosX: 7,
		startPosY: 8	
	},
	{
		name : "pawn",
		src : "img/bP.png",
		isWhite : false,
		range : 2,
		dirs : [[0, -1]],
		startPosX: 1,
		startPosY: 7	
	},
	{
		name : "pawn",
		src : "img/bP.png",
		isWhite : false,
		range : 2,
		dirs : [[0, -1]],
		startPosX: 2,
		startPosY: 7	
	},
	{
		name : "pawn",
		src : "img/bP.png",
		isWhite : false,
		range : 2,
		dirs : [[0, -1]],
		startPosX: 3,
		startPosY: 7	
	},
	{
		name : "pawn",
		src : "img/bP.png",
		isWhite : false,
		range : 2,
		dirs : [[0, -1]],
		startPosX: 4,
		startPosY: 7	
	},
	{
		name : "pawn",
		src : "img/bP.png",
		isWhite : false,
		range : 2,
		dirs : [[0, -1]],
		startPosX: 5,
		startPosY: 7	
	},
	{
		name : "pawn",
		src : "img/bP.png",
		isWhite : false,
		range : 2,
		dirs : [[0, -1]],
		startPosX: 6,
		startPosY: 7	
	},
	{
		name : "pawn",
		src : "img/bP.png",
		isWhite : false,
		range : 2,
		dirs : [[0, -1]],
		startPosX: 7,
		startPosY: 7	
	},
	{
		name : "pawn",
		src : "img/bP.png",
		isWhite : false,
		range : 2,
		dirs : [[0, -1]],
		startPosX: 8,
		startPosY: 7	
	},

	{
		name : "queen",
		src : "img/bQ.png",
		isWhite : false,
		range : "any",
		dirs : [[-1, -1], [-1, 1], [1, -1], [1, 1], [1, 0], [-1, 0], [0, 1], [0, -1]],
		startPosX: 4,
		startPosY: 8	
	},

	{
		name : "rook",
		src : "img/bR.png",
		isWhite : false,
		range : "any",
		dirs : [[1, 0], [-1, 0], [0, 1], [0, -1]],
		startPosX: 1,
		startPosY: 8	
	},
	{
		name : "rook",
		src : "img/bR.png",
		isWhite : false,
		range : "any",
		dirs : [[1, 0], [-1, 0], [0, 1], [0, -1]],
		startPosX: 8,
		startPosY: 8	
	},{
		name : "bishop",
		src : "img/wB.png",
		isWhite : true,
		range : "any",
		dirs : [[-1, -1],[-1, 1],[1, -1],[1, 1]],
		startPosX: 3,
		startPosY: 1	
	},
	{
		name : "bishop",
		src : "img/wB.png",
		isWhite : true,
		range : "any",
		dirs : [[-1, -1],[-1, 1],[1, -1],[1, 1]],
		startPosX: 6,
		startPosY: 1	
	},
	{
		name : "king",
		src : "img/wK.png",
		isWhite : true,
		range : 1,
		dirs : [[-1, -1], [-1, 1], [1, -1], [1, 1], [1, 0], [-1, 0], [0, 1], [0, -1]],
		startPosX: 5,
		startPosY: 1
	},
	{
		name : "knight",
		src : "img/wN.png",
		isWhite : true,
		range : 1,
		dirs : [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]],
		startPosX: 2,
		startPosY: 1	
	},
	{
		name : "knight",
		src : "img/wN.png",
		isWhite : true,
		range : 1,
		dirs : [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]],
		startPosX: 7,
		startPosY: 1	
	},
	{
		name : "pawn",
		src : "img/wP.png",
		isWhite : true,
		range : 2,
		dirs : [[0, 1]],
		startPosX: 1,
		startPosY: 2	
	},
	{
		name : "pawn",
		src : "img/wP.png",
		isWhite : true,
		range : 2,
		dirs : [[0, 1]],
		startPosX: 2,
		startPosY: 2
	},
	{
		name : "pawn",
		src : "img/wP.png",
		isWhite : true,
		range : 2,
		dirs : [[0, 1]],
		startPosX: 3,
		startPosY: 2	
	},
	{
		name : "pawn",
		src : "img/wP.png",
		isWhite : true,
		range : 2,
		dirs : [[0, 1]],
		startPosX: 4,
		startPosY: 2	
	},
	{
		name : "pawn",
		src : "img/wP.png",
		isWhite : true,
		range : 2,
		dirs : [[0, 1]],
		startPosX: 5,
		startPosY: 2	
	},
	{
		name : "pawn",
		src : "img/wP.png",
		isWhite : true,
		range : 2,
		dirs : [[0, 1]],
		startPosX: 6,
		startPosY: 2	
	},
	{
		name : "pawn",
		src : "img/wP.png",
		isWhite : true,
		range : 2,
		dirs : [[0, 1]],
		startPosX: 7,
		startPosY: 2	
	},
	{
		name : "pawn",
		src : "img/wP.png",
		isWhite : true,
		range : 2,
		dirs : [[0, 1]],
		startPosX: 8,
		startPosY: 2	
	},

	{
		name : "queen",
		src : "img/wQ.png",
		isWhite : true,
		range : "any",
		dirs : [[-1, -1], [-1, 1], [1, -1], [1, 1], [1, 0], [-1, 0], [0, 1], [0, -1]],
		startPosX: 4,
		startPosY: 1	
	},

	{
		name : "rook",
		src : "img/wR.png",
		isWhite : true,
		range : "any",
		dirs : [[1, 0], [-1, 0], [0, 1], [0, -1]],
		startPosX: 1,
		startPosY: 1
	},
	{
		name : "rook",
		src : "img/wR.png",
		isWhite : true,
		range : "any",
		dirs : [[1, 0], [-1, 0], [0, 1], [0, -1]],
		startPosX: 8,
		startPosY: 1	
	}

]
