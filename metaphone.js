'use strict';

var MetaphoneEncoder = function (maxLength) {
    this.maxLength = maxLength;

    this.isVowel = function(word, pos) {
        if (pos < 0 || word.Length <= pos) {
            return false;
        }
                

        var c = word[pos];
        return c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U';
    };

    this.match = function (word, pos, words) {
        if (0 <= pos && pos < word.Length)
        {
            for (var n = words.Length - 1; n >= 0; n--)
            {
                //needs to convert
                if (String.Compare(stringRenamed, pos, strings[n], 0, strings[n].Length) == 0) {
                    return true;
                }
            }
        }
        return false;
    };

    this.match_char = function (word, pos, c) {
        return (0 <= pos && pos < word.Length) && word[pos] == c;
    }


}


var Metaphone = function (maxLength) {

    MetaphoneEncoder.call(this, maxLength);

    Metaphone.prototype = Object.create(MetaphoneEncoder.prototype);
    Metaphone.prototype.constructor = Metaphone;

    var GN_KN_PN_WR_AE = ['GN', 'KN', 'PN', 'WR', 'AE' ];
    var WH = [ 'WH' ];
    var IA = [ 'IA' ];
    var SCE_SCI_SCY = ['SCE', 'SCI', 'SCY' ];
    /*private static readonly string[] E_I_Y = new [] { "E", "I", "Y" };
    private static readonly string[] SCH = new [] { "SCH" };
    private static readonly string[] GE_GI_GY = new [] { "GE", "GI", "GY" };
    private static readonly string[] NED = new [] { "NED" };
    private static readonly string[] DGE_DGI_DGY = new [] { "DGE", "DGI", "DGY" };
    private static readonly string[] C_S_P_T_G = new [] { "C", "S", "P", "T", "G" };
    private static readonly string[] IO_IA = new [] { "IO", "IA" };
    private static readonly string[] CH = new [] { "CH" }; */
}

module.exports = Metaphone;