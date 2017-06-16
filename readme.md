# Japanese Geography Quiz

A side project during General Assembly's Web Development Immersive Bootcamp.

## User Story

* I have been trying to learn the prefectures of Japan and wanted to play around with a geography quiz, but all the ones I found online have the names written in English rather than in Japanese. This game takes input in kana (or converts romaji to kana) and displays the prefecture names in kanji.
* The user races against a 5-minute timer to name all the prefectures.
* If the user loses, the remaining prefectures appear on the board in red.


## Technologies Used

* HTML
* CSS \(including CSS transitions\)
* Vanilla Javascript
* [Wanakana](http://wanakana.com/), an inline tool that converts romaji to kana
* SVG with zoom and pan

## Pain Points

* Transforming the SVG via matrix was a bit of a headache, including unit conversion between pixels and SVG units, detecting scroll events cross-browser, and getting the zoom amount right.
* I referenced two sites for panning and zooming SVG – [svgpan](https://github.com/aleofreddi/svgpan) and [this reference in ECMAScript](http://www.petercollingridge.co.uk/interactive-svg-components/pan-and-zoom-control). Although neither worked for me out of the box, I was able to piece together a working solution.

## In the Future

* Maybe have a free play option (no timer)
* Add "give up" button
* Other play options – prompt the user with a name and have them locate it on the map, for example
* [Trello Board](https://trello.com/b/Shoha8CX) for reference