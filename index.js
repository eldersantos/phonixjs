var Soundex = require('./soundex.js');

var words = ["Spotify", "Spotfy", "Sputfi", "Spotifi"];

var soundex = new Soundex(false, 4);

console.log(soundex.isSimilar(words));

console.log(soundex.buildKeys('Spotify'));
console.log(soundex.buildKeys('Spotfy'));