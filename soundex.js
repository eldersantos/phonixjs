'use strict';

var Soundex = function (full, length) {
    var _full = full || false;
    var _length = length || 4;

    var getCode = function (character) {
        switch (character.toLowerCase()) {
            case 'b':
            case 'p':
            case 'f':
            case 'v': return '1';

            case 'c':
            case 's':
            case 'k':
            case 'g':
            case 'j':
            case 'q':
            case 'x':
            case 'z': return '2';

            case 'd':
            case 't': return '3';

            case 'l': return '4';

            case 'm':
            case 'n': return '5';

            case 'r': return '6';
        }
        return '*';
    }

    var buildKey = function (word) {

        if (_length <= 0) return '';

        if(!word) return '';

        var chars = word.split('');
        var result = [];
        var inIdx, outIdx;
        var prevDigit;

        if(_full) {
            inIdx = 0;
            outIdx = 0;
            prevDigit = '*';
        } else {
            inIdx = 1;
            outIdx = 1;
            result.push(chars[0].toUpperCase());
            prevDigit = getCode(chars[0]);
        }

        while (inIdx < chars.length && outIdx < _length) {
            var c = getCode(chars[inIdx]);
            if ( c !== '*' && c !== prevDigit) {
                result.push(c);
                outIdx++;
            }
            prevDigit = c;
            inIdx++;
        }

        for (; outIdx < _length; outIdx++) {
            result.push('0')
        }

        return result.join('');
    };

    this.isSimilar = function (words) {
        var encoders = [];
        
        for (var i=0; i < words.length; i++) {
            encoders[i] = buildKey(words[i]);
            if (i !== 0) {
                if (encoders[i] !== encoders[i - 1]) {
                    return false;
                }
            }
        }
        return true;
    };

    this.buildKeys = function(word) {
        if(!word) return [];                              
        return buildKey(word);
    }
}

module.exports = Soundex;