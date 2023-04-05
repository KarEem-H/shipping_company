(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3812,2167);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.plane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AvTZ0IAoxIQiYhghQgwQgcgRgEghQgEgdAPggQAPgfAZgQQAbgSAaAIQAtAPBCAiQAhARAYAOIAYn/Qh4hOiHhaQkOi0hLg8Qgxgogyg7Qg3hDgVgzQg2iJDdA6QDSA3E9B2QCeA7B0AwIGQlIQgcgKgkgPQhIgegogZQgXgPAAgiQgBggASgiQASgjAagSQAdgUAdAMQBQAgCoBQIOHrQIBwgIIsgRAIh3GwIDkB8QEGCQClBjQEICgDgCYICsiSQC8iYBQgeQBQgeAwAMQAYAGAIAMImAIYIBQB4IiIAYIjYJ4QgRgMgVgkQgrhJgUh4QgShtADhCQADhXANhlIAMhUQhkgkiDg0QkGhoibhQQibhQjlhsIjHhcIjwGAImRUQg");
	this.shape.setTransform(0.0119,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plane, new cjs.Rectangle(-169.3,-181.2,338.70000000000005,362.5), null);


(lib.ideogram = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D2D2").s().p("AhBC4IgTgkQglhJgJgQQg2hXAAg+QAAhNA2g2QAgghAqgNQAbgIAdAAQAfAAAbAJQAoAMAhAhQA3A2gBBNQABA8g3BYIhHB7Qg2BcgLADIgBAAQgLAAgwhcgAgTjaIgJABIgUAHQgVAJgQARQglAkABAzQgBAxAjAjIACACQAXAXAeAIQAQAEAQAAIAIAAQAtgDAiggQAjgjAAgzQAAgzgjgkQgkgkgzAAQgKAAgJACg");
	this.shape.setTransform(0,0.0032);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-27.6,37.1,55.2);


// stage content:
(lib.newplane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ideogram("synched",0);
	this.instance.setTransform(1573,802.65,0.914,0.914);

	this.instance_1 = new lib.ideogram("synched",0);
	this.instance_1.setTransform(1527.8,166.3,0.8062,0.8062);

	this.instance_2 = new lib.ideogram("synched",0);
	this.instance_2.setTransform(124.45,152.35);

	this.instance_3 = new lib.ideogram("synched",0);
	this.instance_3.setTransform(906.95,480.8);

	this.instance_4 = new lib.ideogram("synched",0);
	this.instance_4.setTransform(509.45,756.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(197));

	// plane
	this.instance_5 = new lib.plane();
	this.instance_5.setTransform(996,172,0.2774,0.262,-81.1955,0,0,0.1,0.4);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-0.1,regY:0.5,rotation:-68.4682,guide:{path:[996,172,954.9,213.2,911.5,247.2]},alpha:0.8789},12).to({regX:0.1,regY:0.6,rotation:17.4396,guide:{path:[911.5,247.2,878.7,273,844.6,294.8,746.3,357.4,647.4,379.3,530.3,405.4,417.7,373.1,311.3,342.6,210.9,260.8]},alpha:1},81).to({regY:0.4,rotation:23.8029,guide:{path:[210.9,260.8,189.3,243.2,168.1,223.3]},alpha:0},6).to({_off:true},1).wait(97));

	// plane
	this.instance_6 = new lib.plane();
	this.instance_6.setTransform(1235.65,351.35,0.2365,0.2233,90);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(61).to({_off:false},0).to({regX:0.2,scaleX:0.2364,rotation:95.7651,guide:{path:[1235.7,351.4,1240.3,338.9,1244.9,327.6]},alpha:1},7).to({regX:0.1,regY:-0.2,rotation:159.2354,guide:{path:[1245,327.6,1255.4,302.3,1266.1,282.6,1286.8,244.4,1312.5,219,1368.8,163.4,1452.9,164.5]}},77).to({rotation:165.0028,guide:{path:[1452.9,164.5,1465.5,164.7,1478.7,166.1]},alpha:0},7).to({_off:true},1).wait(44));

	// plane
	this.instance_7 = new lib.plane();
	this.instance_7.setTransform(1424.15,321,0.2364,0.2233,-75.0028,0,0,0.1,0.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).to({rotation:-80.687,guide:{path:[1424.2,321,1415,331.9,1405,349.3]},alpha:1},6).to({regX:-0.1,regY:0.3,rotation:-158.3746,guide:{path:[1404.9,349.4,1401.9,354.7,1398.7,360.6,1371.9,410.9,1364.4,465.6,1353.8,542.1,1383.6,616.2,1415,694.3,1489.9,766]}},82).to({regX:-0.4,regY:0.1,rotation:-165.0045,x:1519.1,y:794.35,alpha:0},7).to({_off:true},1).wait(19));

	// plane
	this.instance_8 = new lib.plane();
	this.instance_8.setTransform(344.35,345.7,0.2953,0.2789,-132.5675,0,0,-1.2,0.6);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-1.3,rotation:-142.942,guide:{path:[344.4,345.7,353.5,372.1,367,396.5]},alpha:1},9).to({regX:-1.2,regY:0.4,scaleY:0.2788,rotation:-236.303,guide:{path:[367.1,396.4,381.9,423.3,401.7,447.7,445.1,501.1,503.2,529.5,570.1,562.3,649,557.6,721.3,553.3,800.4,517.6]}},81).to({regX:-1.3,regY:0.5,scaleY:0.2789,rotation:-244.3702,guide:{path:[800.3,517.6,819.4,508.9,839,498.4]},alpha:0},7).to({_off:true},1).wait(99));

	// plane
	this.instance_9 = new lib.plane();
	this.instance_9.setTransform(945.25,573.45,0.2741,0.2588,-89.4325,0,0,-0.4,0.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(115).to({_off:false},0).to({regX:-0.5,scaleX:0.274,rotation:-82.2196,guide:{path:[945.3,574.3,943.1,581,941,587.6,935.9,601.7,929.3,616.4]},alpha:1},7).to({regX:-0.6,rotation:-12.1521,guide:{path:[929.3,616.5,928.1,619.1,926.8,621.8,900.6,677.7,861.9,719.8,807.6,778.7,736.1,801.9,663.6,825.3,576.5,810.6]}},68).to({regX:-0.1,rotation:-5.9701,guide:{path:[576.5,810.5,558,807.4,538.8,802.5]},alpha:0},6).wait(1));

	// flash0_ai
	this.instance_10 = new lib.CachedBmp_2();
	this.instance_10.setTransform(-28.15,-47.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(197));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(965.9,442.3,912.0000000000001,594);
// library properties:
lib.properties = {
	id: '4796A2A124782A498E4DE9DF6ACBA623',
	width: 1988,
	height: 979,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"assets/img/imagesplane/CachedBmp_2.png?1680509759632", id:"CachedBmp_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4796A2A124782A498E4DE9DF6ACBA623'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;