
// automatically change romaji to kana, from http://wanakana.com/

var inputBox = document.getElementById('input-box');
wanakana.bind(inputBox);

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
			document.getElementById(prefectures[i].position).style.fill = "beige";
		};
	};
};

inputBox.addEventListener("input",checkForMatch);



// pan map function
// http://www.petercollingridge.co.uk/interactive-svg-components/pan-and-zoom-control

var japanMap = document.getElementById("japan-map");
var svgWrapper = document.getElementById("svg");
var transformMatrix = [1,0,0,1,0,0];

var panMap = function(dx,dy) {
	transformMatrix[4] += dx;
	transformMatrix[5] += dy;
	var newMatrix = "matrix(" + transformMatrix.join(" ") + ")";
	japanMap.setAttribute("transform", newMatrix);
};

document.getElementById("pan-left").addEventListener("click",function(){
	panMap(-10,0);
	console.log("left");
});



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
 	zoom(z);
} );



// zoom function

var width  = parseInt(svgWrapper.getAttribute("width"));
var height = parseInt(svgWrapper.getAttribute("height"));

function zoom(scale) {
	for (var i=0; i<transformMatrix.length; i++) {
    	transformMatrix[i] *= scale;
	}
	transformMatrix[4] += (1-scale)*width/2;
	transformMatrix[5] += (1-scale)*height/2;
	newMatrix = "matrix(" +  transformMatrix.join(' ') + ")";
	japanMap.setAttribute("transform", newMatrix);
};





// var root = document.getElementById("svg");

// function getEventPoint(evt) {
// 	var p = {};

// 	p.x = evt.clientX;
// 	p.y = evt.clientY;
// console.log(p);
// 	return p;
// }

// var zoomScale = 0.2; // Zoom sensitivity

// if (navigator.userAgent.toLowerCase().indexOf('webkit') >= 0) {
// 		window.addEventListener('wheel', handleMouseWheel, false); // Chrome/Safari
// 	} else {
// 		window.addEventListener('DOMMouseScroll', handleMouseWheel, false); // Others
// };

// function handleMouseWheel(evt) {
	
// 	if(evt.preventDefault)
// 		evt.preventDefault();

// 	evt.returnValue = false;

// 	var svgDoc = evt.target.ownerDocument;

// 	var delta;

// 	if(evt.wheelDelta)
// 		delta = evt.wheelDelta / 360; // Chrome/Safari
// 	else
// 		delta = evt.detail / -9; // Mozilla

// 	var z = Math.pow(1 + zoomScale, delta);
// 	console.log(z);

// 	var g = document.getElementById("viewport");
	
// 	var p = getEventPoint(evt);

// 	p = p.matrixTransform(g.getCTM().inverse());

// 	// Compute new scale matrix in current mouse position
// 	var k = root.createSVGMatrix().translate(p.x, p.y).scale(z).translate(-p.x, -p.y);

//         setCTM(g, g.getCTM().multiply(k));

// 	if(typeof(stateTf) == "undefined")
// 		stateTf = g.getCTM().inverse();

// 	stateTf = stateTf.multiply(k.inverse());
// }








