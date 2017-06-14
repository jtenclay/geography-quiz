
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
			console.log(prefectures[i].kanji);
			inputBox.value = "";
			prefectures[i].answered = true;
			console.log(prefectures[i]);
			document.getElementById(prefectures[i].position).style.display = "block";
		};
	};
};

inputBox.addEventListener("input",checkForMatch);











