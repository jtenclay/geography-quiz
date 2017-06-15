
// automatically change romaji to kana, from http://wanakana.com/

var inputBox = document.getElementById('input-box');
wanakana.bind(inputBox);

var prefCount = 0;
var prefectures = [
	{
		kana: "ほっかいどう",
		kanji: "北海道",
		position: 1
	},

	{
		kana: "あおもり",
		kanji: "青森県",
		position: 2
	},

	{
		kana: "あきた",
		kanji: "秋田県",
		position: 5
	},

	{
		kana: "いわて",
		kanji: "岩手県",
		position: 3
	},

	{
		kana: "やまがた",
		kanji: "山形県",
		position: 6
	},

	{
		kana: "みやぎ",
		kanji: "宮城県",
		position: 4
	},

	{
		kana: "にいがた",
		kanji: "新潟県",
		position: 15
	},

	{
		kana: "ふくしま",
		kanji: "福島県",
		position: 7
	},

	{
		kana: "ぐんま",
		kanji: "群馬県",
		position: 10
	},

	{
		kana: "とちぎ",
		kanji: "栃木県",
		position: 9
	},

	{
		kana: "いばらき",
		kanji: "茨城県",
		position: 8
	},

	{
		kana: "さいたま",
		kanji: "埼玉県",
		position: 11
	},

	{
		kana: "とうきょう",
		kanji: "東京都",
		position: 13
	},

	{
		kana: "ちば",
		kanji: "千葉県",
		position: 12
	},

	{
		kana: "かながわ",
		kanji: "神奈川県",
		position: 14
	},

	{
		kana: "やまなし",
		kanji: "山梨県",
		position: 19
	},

	{
		kana: "ながの",
		kanji: "長野県",
		position: 20
	},

	{
		kana: "しずおか",
		kanji: "静岡県",
		position: 22
	},

	{
		kana: "とやま",
		kanji: "富山県",
		position: 16
	},

	{
		kana: "いしかわ",
		kanji: "石川県",
		position: 17
	},

	{
		kana: "ふくい",
		kanji: "福井県",
		position: 18
	},

	{
		kana: "ぎふ",
		kanji: "岐阜県",
		position: 21
	},

	{
		kana: "あいち",
		kanji: "愛知県",
		position: 23
	},

	{
		kana: "しが",
		kanji: "滋賀県",
		position: 25
	},


	{
		kana: "みえ",
		kanji: "三重県",
		position: 24
	},


	{
		kana: "きょうと",
		kanji: "京都府",
		position: 26
	},

	{
		kana: "おおさか",
		kanji: "大阪府",
		position: 27
	},

	{
		kana: "なら",
		kanji: "奈良県",
		position: 29
	},

	{
		kana: "わかやま",
		kanji: "和歌山県",
		position: 30
	},

	{
		kana: "ひょうご",
		kanji: "兵庫県",
		position: 28
	},

	{
		kana: "とっとり",
		kanji: "鳥取県",
		position: 31
	},

	{
		kana: "しまね",
		kanji: "島根県",
		position: 32
	},

	{
		kana: "おかやま",
		kanji: "岡山県",
		position: 33
	},

	{
		kana: "ひろしま",
		kanji: "広島県",
		position: 34
	},

	{
		kana: "やまぐち",
		kanji: "山口県",
		position: 35
	},

	{
		kana: "かがわ",
		kanji: "香川県",
		position: 37
	},

	{
		kana: "とくしま",
		kanji: "徳島県",
		position: 36
	},

	{
		kana: "えひめ",
		kanji: "愛媛県",
		position: 38
	},

	{
		kana: "こうち",
		kanji: "高知県",
		position: 39
	},

	{
		kana: "ふくおか",
		kanji: "福岡県",
		position: 40
	},

	{
		kana: "さが",
		kanji: "佐賀県",
		position: 41
	},

	{
		kana: "ながさき",
		kanji: "長崎県",
		position: 42
	},

	{
		kana: "おおいた",
		kanji: "大分県",
		position: 44
	},

	{
		kana: "くまもと",
		kanji: "熊本県",
		position: 43
	},

	{
		kana: "みやざき",
		kanji: "宮崎県",
		position: 45
	},

	{
		kana: "かごしま",
		kanji: "鹿児島県",
		position: 46
	},

	{
		kana: "おきなわ",
		kanji: "沖縄県",
		position: 47
	}
];

var checkForMatch = function() {
	for (var i = 0; i < prefectures.length; i++) {
		if (inputBox.value === prefectures[i].kana && prefectures[i].answered !== true) {
			inputBox.value = "";
			prefectures[i].answered = true;
			document.getElementById(prefectures[i].position).style.fill = "#99E078";
			document.getElementById(prefectures[i].kanji).style.opacity = "1";
			prefCount ++;
			document.querySelector("#prefectures-counter span").textContent = prefCount;
			checkForWin();
		};
	};
};

inputBox.addEventListener("input",checkForMatch);



// pan map function
// http://www.petercollingridge.co.uk/interactive-svg-components/pan-and-zoom-control

var japanMap = document.getElementById("japan-map");
var svgWrapper = document.getElementById("svg");
var transformMatrix = [1,0,0,1,9,11]; // japan-map begins slightly padded; this is the identity matrix

var panMap = function(dx,dy) {
	transformMatrix[4] += dx;
	transformMatrix[5] += dy;
	var newMatrix = "matrix(" + transformMatrix.join(" ") + ")";
	japanMap.setAttribute("transform", newMatrix);
};

// document.getElementById("pan-left").addEventListener("click",function(){
// 	panMap(-10,0);
// 	console.log("left");
// });



// scrolljacking: zoom map on mouse scroll
// from https://github.com/aleofreddi/svgpan and https://developer.mozilla.org/en-US/docs/Web/Events/wheel

// create a global "addWheelListener" method

(function(window,document) {

    var prefix = "", _addEventListener, support;

    // detect event model
    if ( window.addEventListener ) {
        _addEventListener = "addEventListener";
    } else {
        _addEventListener = "attachEvent";
        prefix = "on";
    }

    // detect available wheel event
    support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
              document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
              "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

    window.addWheelListener = function( elem, callback, useCapture ) {
        _addWheelListener( elem, support, callback, useCapture );

        // handle MozMousePixelScroll in older Firefox
        if( support == "DOMMouseScroll" ) {
            _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
        }
    };

    function _addWheelListener( elem, eventName, callback, useCapture ) {
        elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
            !originalEvent && ( originalEvent = window.event );

            // create a normalized event object
            var event = {
                // keep a ref to the original event object
                originalEvent: originalEvent,
                target: originalEvent.target || originalEvent.srcElement,
                type: "wheel",
                deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                deltaX: 0,
                deltaY: 0,
                deltaZ: 0,
                preventDefault: function() {
                    originalEvent.preventDefault ?
                        originalEvent.preventDefault() :
                        originalEvent.returnValue = false;
                }
            };
            
            // calculate deltaY (and deltaX) according to the event
            if ( support == "mousewheel" ) {
                event.deltaY = - 1/40 * originalEvent.wheelDelta;
                // Webkit also support wheelDeltaX
                originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
            } else {
                event.deltaY = originalEvent.deltaY || originalEvent.detail;
            }

            // it's time to fire the callback
            return callback( event );

        }, useCapture || false );
    }

})(window,document);



// add the scroll listener to the document

addWheelListener(document, function( e ) {  
	e.preventDefault(); 
	var z = Math.pow(1.2, e.deltaY / -360); // 1.2 is the zoom power
 	zoom(z,e);
} );



// zoom function including center on pointer

var width  = parseInt(svgWrapper.getAttribute("width"));
var height = parseInt(svgWrapper.getAttribute("height"));
var viewport = document.getElementById("viewport");
var offsetX = viewport.getBoundingClientRect().left;
var offsetY = viewport.getBoundingClientRect().top;
var computedWidth = viewport.getBoundingClientRect().width;
var computedHeight = viewport.getBoundingClientRect().height;

window.addEventListener("resize",function(){
	offsetX = viewport.getBoundingClientRect().left;
	offsetY = viewport.getBoundingClientRect().top;
	computedWidth = viewport.getBoundingClientRect().width;
	computedHeight = viewport.getBoundingClientRect().height;
});

function zoom(scale,e) {
	for (var i=0; i<transformMatrix.length; i++) {
    	transformMatrix[i] *= scale;
	};
	transformMatrix[4] += (1-scale)*(e.clientX - offsetX)*width/computedWidth;
	transformMatrix[5] += (1-scale)*(e.clientY - offsetY)*height/computedHeight;
	newMatrix = "matrix(" +  transformMatrix.join(' ') + ")";
	japanMap.setAttribute("transform", newMatrix);
};



// event listeners for dragging map

var lastPosition = {
	x: 0,
	y: 0
};

var moveMapFlag = false;

document.addEventListener("mousedown",function(e){
	lastPosition = {
		x: e.clientX,
		y: e.clientY
	};
	moveMapFlag = true;
});

document.addEventListener("mousemove",function(e){
	if (moveMapFlag === true) {
		var newPosition = {
			x: e.clientX,
			y: e.clientY
		};
		var delta = {
			x: newPosition.x - lastPosition.x,
			y: newPosition.y - lastPosition.y
		}
		delta = {
			x: delta.x * width/computedWidth,
			y: delta.y * height/computedHeight
		}
		panMap(delta.x,delta.y);
		lastPosition = newPosition;
	};
});

document.addEventListener("mouseup",function(e){
	moveMapFlag = false;
});



// start game

var startGame = function() {
	document.getElementById("start-game").style.display = "none";
	document.getElementById("timer").style.display = "block";
	document.getElementById("input-box").style.display = "block";
	document.getElementById("prefectures-counter").style.display = "block";
	startTimer();
};

document.getElementById("start-game").addEventListener("click",startGame);
document.getElementById("try-again").addEventListener("click",function(){
	location.reload();
});



// win script

var checkForWin = function() {
	if (prefCount === 47) {
		document.getElementById("game-success").style.display = "inline"; // display win message
		document.getElementById("input-box").style.display = "none";
		document.getElementById("try-again").style.display = "block";
		clearInterval(gameTimer);
	};
};



// game timer

var timeRemaining; // hoist
var gameTimer;
var minutesDom = document.getElementById("minutes");
var secondsDom = document.getElementById("seconds");

var checkForTimerEnd = function() {
	if (timeRemaining <= 0) {
		document.getElementById("game-failure").style.display = "inline";
		document.getElementById("try-again").style.display = "block";
		clearInterval(gameTimer);
		document.getElementById("input-box").style.display = "none";
		for (var i = 0; i < prefectures.length; i++) {
			if (!prefectures[i].answered) {
				document.getElementById(prefectures[i].kanji).style.opacity = "1";
				document.getElementById(prefectures[i].position).style.fill = "#FF6060";
			};
		};
	};
};

var startTimer = function() {
	timeRemaining = 300; // format to seconds

	gameTimer = setInterval(function(){
		timeRemaining--;
		minutes = Math.floor(timeRemaining / 60);
		seconds = timeRemaining % 60;
		if (seconds.toString().length === 1) { // format seconds to two digits
			seconds = "0" + seconds.toString();
		};
		minutesDom.textContent = minutes; // update DOM
		secondsDom.textContent = seconds;
		checkForTimerEnd();
	}, 1000)
}; // timer is called when game begins









// for future reference
// http://www.petercollingridge.co.uk/data-visualisation/introduction-svg-scripting-interactive-map
// http://www.petercollingridge.co.uk/interactive-svg-components/pan-and-zoom-text






