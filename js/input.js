function addKeyListeners() {
	keypress.register_combo({
		keys: "left",
		on_keydown: function() {
			if (MainHex && gameState !== 0) {
				MainHex.rotate(1);
			}
		}
	});

	keypress.register_combo({
		keys: "right",
		on_keydown: function() {
			if (MainHex && gameState !== 0){
				MainHex.rotate(-1);
			}
		}
	});
		keypress.register_combo({
		keys: "down",
		on_keydown: function() {
			var tempSpeed = settings.speedModifier;
			if (MainHex && gameState !== 0){
				//speed up block temporarily
				if(settings.speedUpKeyHeld == false){
					settings.speedUpKeyHeld = true;
					window.rush *=4;
				}
			}
			//settings.speedModifier = tempSpeed;
		},
		on_keyup:function(){
			if (MainHex && gameState !== 0){
				//speed up block temporarily

				window.rush /=4;
				settings.speedUpKeyHeld = false;
			}
		}
	});

	keypress.register_combo({
		keys: "a",
		on_keydown: function() {
			if (MainHex && gameState !== 0) {
				MainHex.rotate(1);
			}
		}
	});

	keypress.register_combo({
		keys: "d",
		on_keydown: function() {
			if (MainHex && gameState !== 0){
				MainHex.rotate(-1);
			}
		}
	});

	keypress.register_combo({
		keys: "s",
		on_keydown: function() {
			var tempSpeed = settings.speedModifier;
			if (MainHex && gameState !== 0){
				//speed up block temporarily
				if(settings.speedUpKeyHeld == false){
					settings.speedUpKeyHeld = true;
					window.rush *=4;
				}
			}
			//settings.speedModifier = tempSpeed;
		},
		on_keyup:function(){
			if (MainHex && gameState !== 0){
				//speed up block temporarily

				window.rush /=4;
				settings.speedUpKeyHeld = false;
			}
		}
	});

	keypress.register_combo({
		keys: "enter",
		on_keydown: function() {
			if (gameState==1 || importing == 1) {
				init(1);
			}
			if (gameState == 2) {
				init();
			}
			if (gameState===0) {
				resumeGame();
			}
		}
	});

	$("#colorBlindBtn").on('touchstart mousedown', function() {
	window.colors = ["#8e44ad", "#f1c40f", "#3498db", "#d35400"];

	window.hexColorsToTintedColors = {
		"#8e44ad": "rgb(229,152,102)",
		"#f1c40f": "rgb(246,223,133)",
		"#3498db": "rgb(151,201,235)",
		"#d35400": "rgb(210,180,222)"
	};

	window.rgbToHex = {
		"rgb(142,68,173)": "#8e44ad",
		"rgb(241,196,15)": "#f1c40f",
		"rgb(52,152,219)": "#3498db",
		"rgb(211,84,0)": "#d35400"
	};

	window.rgbColorsToTintedColors = {
		"rgb(142,68,173)": "rgb(229,152,102)",
		"rgb(241,196,15)": "rgb(246,223,133)",
		"rgb(52,152,219)": "rgb(151,201,235)",
		"rgb(46,204,113)": "rgb(210,180,222)"
	};
	});


	$('#restartXX').on('click', function () {
		window.location.href = window.location.href + '?s=' + (+new Date())
	})
}

function handleClickTap(x,y) {
	var radius = settings.hexWidth ;
	var halfRadius = radius/2;
	var triHeight = radius *(Math.sqrt(3)/2);
	var Vertexes =[
		[radius,0],
		[halfRadius,-triHeight],
		[-halfRadius,-triHeight],
		[-radius,0],
		[-halfRadius,triHeight],
		[halfRadius,triHeight]];
	Vertexes = Vertexes.map(function(coord){
		return [coord[0] + trueCanvas.width/2, coord[1] + trueCanvas.height/2]});

	if (!MainHex || gameState === 0 || gameState==-1) {
		return;
	}

	if (x < window.innerWidth/2) {
		MainHex.rotate(1);
	}
	if (x > window.innerWidth/2) {
		MainHex.rotate(-1);
	}
}

