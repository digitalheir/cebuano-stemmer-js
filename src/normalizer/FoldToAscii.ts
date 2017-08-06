// for (let i = 0; i < replacementList.length; i += 1) {
//     const chars: string = replacementList[i].chars;
//     for (let j = 0; j < chars.length; j += 1) {
//         diacriticsMap[chars[j]] = replacementList[i].base;
//     }
// }

/**
 * a port of the very extensive switch/case statement found in
 * http://svn.apache.org/repos/asf/lucene/java/tags/lucene_solr_4_5_1/lucene/analysis/common/src/java/org/apache/lucene/analysis/miscellaneous/ASCIIFoldingFilter.java
 */
const diacriticsMap: { [s: string]: string } = {
    " ": " ",
    "߀": "0",
    "Ⓐ": "A",
    "Ａ": "A",
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ầ": "A",
    "Ấ": "A",
    "Ẫ": "A",
    "Ẩ": "A",
    "Ã": "A",
    "Ā": "A",
    "Ă": "A",
    "Ằ": "A",
    "Ắ": "A",
    "Ẵ": "A",
    "Ẳ": "A",
    "Ȧ": "A",
    "Ǡ": "A",
    "Ä": "A",
    "Ǟ": "A",
    "Ả": "A",
    "Å": "A",
    "Ǻ": "A",
    "Ǎ": "A",
    "Ȁ": "A",
    "Ȃ": "A",
    "Ạ": "A",
    "Ậ": "A",
    "Ặ": "A",
    "Ḁ": "A",
    "Ą": "A",
    "Ⱥ": "A",
    "Ɐ": "A",
    "Ꜳ": "AA",
    "Æ": "AE",
    "Ǽ": "AE",
    "Ǣ": "AE",
    "Ꜵ": "AO",
    "Ꜷ": "AU",
    "Ꜹ": "AV",
    "Ꜻ": "AV",
    "Ꜽ": "AY",
    "Ⓑ": "B",
    "Ｂ": "B",
    "Ḃ": "B",
    "Ḅ": "B",
    "Ḇ": "B",
    "Ƀ": "B",
    "Ɓ": "B",
    "Ⓒ": "C",
    "Ｃ": "C",
    "Ꜿ": "C",
    "Ḉ": "C",
    "Ć": "C",
    "C": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Č": "C",
    "Ç": "C",
    "Ƈ": "C",
    "Ȼ": "C",
    "Ⓓ": "D",
    "Ｄ": "D",
    "Ḋ": "D",
    "Ď": "D",
    "Ḍ": "D",
    "Ḑ": "D",
    "Ḓ": "D",
    "Ḏ": "D",
    "Đ": "D",
    "Ɗ": "D",
    "Ɖ": "D",
    "ᴅ": "D",
    "Ꝺ": "D",
    "Ð": "Dh",
    "Ǳ": "DZ",
    "Ǆ": "DZ",
    "ǲ": "Dz",
    "ǅ": "Dz",
    "ɛ": "E",
    "Ⓔ": "E",
    "Ｅ": "E",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ề": "E",
    "Ế": "E",
    "Ễ": "E",
    "Ể": "E",
    "Ẽ": "E",
    "Ē": "E",
    "Ḕ": "E",
    "Ḗ": "E",
    "Ĕ": "E",
    "Ė": "E",
    "Ë": "E",
    "Ẻ": "E",
    "Ě": "E",
    "Ȅ": "E",
    "Ȇ": "E",
    "Ẹ": "E",
    "Ệ": "E",
    "Ȩ": "E",
    "Ḝ": "E",
    "Ę": "E",
    "Ḙ": "E",
    "Ḛ": "E",
    "Ɛ": "E",
    "Ǝ": "E",
    "ᴇ": "E",
    "ꝼ": "F",
    "Ⓕ": "F",
    "Ｆ": "F",
    "Ḟ": "F",
    "Ƒ": "F",
    "Ꝼ": "F",
    "Ⓖ": "G",
    "Ｇ": "G",
    "Ǵ": "G",
    "Ĝ": "G",
    "Ḡ": "G",
    "Ğ": "G",
    "Ġ": "G",
    "Ǧ": "G",
    "Ģ": "G",
    "Ǥ": "G",
    "Ɠ": "G",
    "Ꞡ": "G",
    "Ᵹ": "G",
    "Ꝿ": "G",
    "ɢ": "G",
    "Ⓗ": "H",
    "Ｈ": "H",
    "Ĥ": "H",
    "Ḣ": "H",
    "Ḧ": "H",
    "Ȟ": "H",
    "Ḥ": "H",
    "Ḩ": "H",
    "Ḫ": "H",
    "Ħ": "H",
    "Ⱨ": "H",
    "Ⱶ": "H",
    "Ɥ": "H",
    "Ⓘ": "I",
    "Ｉ": "I",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ĩ": "I",
    "Ī": "I",
    "Ĭ": "I",
    "İ": "I",
    "Ï": "I",
    "Ḯ": "I",
    "Ỉ": "I",
    "Ǐ": "I",
    "Ȉ": "I",
    "Ȋ": "I",
    "Ị": "I",
    "Į": "I",
    "Ḭ": "I",
    "Ɨ": "I",
    "Ⓙ": "J",
    "Ｊ": "J",
    "Ĵ": "J",
    "Ɉ": "J",
    "ȷ": "J",
    "Ⓚ": "K",
    "Ｋ": "K",
    "Ḱ": "K",
    "Ǩ": "K",
    "Ḳ": "K",
    "Ķ": "K",
    "Ḵ": "K",
    "Ƙ": "K",
    "Ⱪ": "K",
    "Ꝁ": "K",
    "Ꝃ": "K",
    "Ꝅ": "K",
    "Ꞣ": "K",
    "Ⓛ": "L",
    "Ｌ": "L",
    "Ŀ": "L",
    "Ĺ": "L",
    "Ľ": "L",
    "Ḷ": "L",
    "Ḹ": "L",
    "Ļ": "L",
    "Ḽ": "L",
    "Ḻ": "L",
    "Ł": "L",
    "Ƚ": "L",
    "Ɫ": "L",
    "Ⱡ": "L",
    "Ꝉ": "L",
    "Ꝇ": "L",
    "Ꞁ": "L",
    "Ǉ": "LJ",
    "ǈ": "Lj",
    "Ⓜ": "M",
    "Ｍ": "M",
    "Ḿ": "M",
    "Ṁ": "M",
    "Ṃ": "M",
    "Ɱ": "M",
    "Ɯ": "M",
    "ϻ": "M",
    "Ꞥ": "N",
    "Ƞ": "N",
    "Ⓝ": "N",
    "Ｎ": "N",
    "Ǹ": "N",
    "Ń": "N",
    "Ñ": "N",
    "Ṅ": "N",
    "Ň": "N",
    "Ṇ": "N",
    "Ņ": "N",
    "Ṋ": "N",
    "Ṉ": "N",
    "Ɲ": "N",
    "Ꞑ": "N",
    "ᴎ": "N",
    "Ǌ": "NJ",
    "ǋ": "Nj",
    "Ⓞ": "O",
    "Ｏ": "O",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Ồ": "O",
    "Ố": "O",
    "Ỗ": "O",
    "Ổ": "O",
    "Õ": "O",
    "Ṍ": "O",
    "Ȭ": "O",
    "Ṏ": "O",
    "Ō": "O",
    "Ṑ": "O",
    "Ṓ": "O",
    "Ŏ": "O",
    "Ȯ": "O",
    "Ȱ": "O",
    "Ö": "O",
    "Ȫ": "O",
    "Ỏ": "O",
    "Ő": "O",
    "Ǒ": "O",
    "Ȍ": "O",
    "Ȏ": "O",
    "Ơ": "O",
    "Ờ": "O",
    "Ớ": "O",
    "Ỡ": "O",
    "Ở": "O",
    "Ợ": "O",
    "Ọ": "O",
    "Ộ": "O",
    "Ǫ": "O",
    "Ǭ": "O",
    "Ø": "O",
    "Ǿ": "O",
    "Ɔ": "O",
    "Ɵ": "O",
    "Ꝋ": "O",
    "Ꝍ": "O",
    "Œ": "OE",
    "Ƣ": "OI",
    "Ꝏ": "OO",
    "Ȣ": "OU",
    "Ⓟ": "P",
    "Ｐ": "P",
    "Ṕ": "P",
    "Ṗ": "P",
    "Ƥ": "P",
    "Ᵽ": "P",
    "Ꝑ": "P",
    "Ꝓ": "P",
    "Ꝕ": "P",
    "Ⓠ": "Q",
    "Ｑ": "Q",
    "Ꝗ": "Q",
    "Ꝙ": "Q",
    "Ɋ": "Q",
    "Ⓡ": "R",
    "Ｒ": "R",
    "Ŕ": "R",
    "Ṙ": "R",
    "Ř": "R",
    "Ȑ": "R",
    "Ȓ": "R",
    "Ṛ": "R",
    "Ṝ": "R",
    "Ŗ": "R",
    "Ṟ": "R",
    "Ɍ": "R",
    "Ɽ": "R",
    "Ꝛ": "R",
    "Ꞧ": "R",
    "Ꞃ": "R",
    "Ⓢ": "S",
    "Ｓ": "S",
    "ẞ": "S",
    "Ś": "S",
    "Ṥ": "S",
    "Ŝ": "S",
    "Ṡ": "S",
    "Š": "S",
    "Ṧ": "S",
    "Ṣ": "S",
    "Ṩ": "S",
    "Ș": "S",
    "Ş": "S",
    "Ȿ": "S",
    "Ꞩ": "S",
    "Ꞅ": "S",
    "Ⓣ": "T",
    "Ｔ": "T",
    "Ṫ": "T",
    "Ť": "T",
    "Ṭ": "T",
    "Ț": "T",
    "Ţ": "T",
    "Ṱ": "T",
    "Ṯ": "T",
    "Ŧ": "T",
    "Ƭ": "T",
    "Ʈ": "T",
    "Ⱦ": "T",
    "Ꞇ": "T",
    "Þ": "Th",
    "Ꜩ": "TZ",
    "Ⓤ": "U",
    "Ｕ": "U",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ũ": "U",
    "Ṹ": "U",
    "Ū": "U",
    "Ṻ": "U",
    "Ŭ": "U",
    "Ü": "U",
    "Ǜ": "U",
    "Ǘ": "U",
    "Ǖ": "U",
    "Ǚ": "U",
    "Ủ": "U",
    "Ů": "U",
    "Ű": "U",
    "Ǔ": "U",
    "Ȕ": "U",
    "Ȗ": "U",
    "Ư": "U",
    "Ừ": "U",
    "Ứ": "U",
    "Ữ": "U",
    "Ử": "U",
    "Ự": "U",
    "Ụ": "U",
    "Ṳ": "U",
    "Ų": "U",
    "Ṷ": "U",
    "Ṵ": "U",
    "Ʉ": "U",
    "Ⓥ": "V",
    "Ｖ": "V",
    "Ṽ": "V",
    "Ṿ": "V",
    "Ʋ": "V",
    "Ꝟ": "V",
    "Ʌ": "V",
    "Ꝡ": "VY",
    "Ⓦ": "W",
    "Ｗ": "W",
    "Ẁ": "W",
    "Ẃ": "W",
    "Ŵ": "W",
    "Ẇ": "W",
    "Ẅ": "W",
    "Ẉ": "W",
    "Ⱳ": "W",
    "Ⓧ": "X",
    "Ｘ": "X",
    "Ẋ": "X",
    "Ẍ": "X",
    "Ⓨ": "Y",
    "Ｙ": "Y",
    "Ỳ": "Y",
    "Ý": "Y",
    "Ŷ": "Y",
    "Ỹ": "Y",
    "Ȳ": "Y",
    "Ẏ": "Y",
    "Ÿ": "Y",
    "Ỷ": "Y",
    "Ỵ": "Y",
    "Ƴ": "Y",
    "Ɏ": "Y",
    "Ỿ": "Y",
    "Ⓩ": "Z",
    "Ｚ": "Z",
    "Ź": "Z",
    "Ẑ": "Z",
    "Ż": "Z",
    "Ž": "Z",
    "Ẓ": "Z",
    "Ẕ": "Z",
    "Ƶ": "Z",
    "Ȥ": "Z",
    "Ɀ": "Z",
    "Ⱬ": "Z",
    "Ꝣ": "Z",
    "ⓐ": "a",
    "ａ": "a",
    "ẚ": "a",
    "à": "a",
    "á": "a",
    "â": "a",
    "ầ": "a",
    "ấ": "a",
    "ẫ": "a",
    "ẩ": "a",
    "ã": "a",
    "ā": "a",
    "ă": "a",
    "ằ": "a",
    "ắ": "a",
    "ẵ": "a",
    "ẳ": "a",
    "ȧ": "a",
    "ǡ": "a",
    "ä": "a",
    "ǟ": "a",
    "ả": "a",
    "å": "a",
    "ǻ": "a",
    "ǎ": "a",
    "ȁ": "a",
    "ȃ": "a",
    "ạ": "a",
    "ậ": "a",
    "ặ": "a",
    "ḁ": "a",
    "ą": "a",
    "ⱥ": "a",
    "ɐ": "a",
    "ɑ": "a",
    "ꜳ": "aa",
    "æ": "ae",
    "ǽ": "ae",
    "ǣ": "ae",
    "ꜵ": "ao",
    "ꜷ": "au",
    "ꜹ": "av",
    "ꜻ": "av",
    "ꜽ": "ay",
    "ⓑ": "b",
    "ｂ": "b",
    "ḃ": "b",
    "ḅ": "b",
    "ḇ": "b",
    "ƀ": "b",
    "ƃ": "b",
    "ɓ": "b",
    "Ƃ": "b",
    "ｃ": "c",
    "ⓒ": "c",
    "ć": "c",
    "ĉ": "c",
    "ċ": "c",
    "č": "c",
    "ç": "c",
    "ḉ": "c",
    "ƈ": "c",
    "ȼ": "c",
    "ꜿ": "c",
    "ↄ": "c",
    "ⓓ": "d",
    "ｄ": "d",
    "ḋ": "d",
    "ď": "d",
    "ḍ": "d",
    "ḑ": "d",
    "ḓ": "d",
    "ḏ": "d",
    "đ": "d",
    "ƌ": "d",
    "ɖ": "d",
    "ɗ": "d",
    "Ƌ": "d",
    "Ꮷ": "d",
    "ԁ": "d",
    "Ɦ": "d",
    "ð": "dh",
    "ǳ": "dz",
    "ǆ": "dz",
    "ⓔ": "e",
    "ｅ": "e",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ề": "e",
    "ế": "e",
    "ễ": "e",
    "ể": "e",
    "ẽ": "e",
    "ē": "e",
    "ḕ": "e",
    "ḗ": "e",
    "ĕ": "e",
    "ė": "e",
    "ë": "e",
    "ẻ": "e",
    "ě": "e",
    "ȅ": "e",
    "ȇ": "e",
    "ẹ": "e",
    "ệ": "e",
    "ȩ": "e",
    "ḝ": "e",
    "ę": "e",
    "ḙ": "e",
    "ḛ": "e",
    "ɇ": "e",
    "ǝ": "e",
    "ⓕ": "f",
    "ｆ": "f",
    "ḟ": "f",
    "ƒ": "f",
    "ﬀ": "ff",
    "ﬁ": "fi",
    "ﬂ": "fl",
    "ﬃ": "ffi",
    "ﬄ": "ffl",
    "ⓖ": "g",
    "ｇ": "g",
    "ǵ": "g",
    "ĝ": "g",
    "ḡ": "g",
    "ğ": "g",
    "ġ": "g",
    "ǧ": "g",
    "ģ": "g",
    "ǥ": "g",
    "ɠ": "g",
    "ꞡ": "g",
    "ꝿ": "g",
    "ᵹ": "g",
    "ⓗ": "h",
    "ｈ": "h",
    "ĥ": "h",
    "ḣ": "h",
    "ḧ": "h",
    "ȟ": "h",
    "ḥ": "h",
    "ḩ": "h",
    "ḫ": "h",
    "ẖ": "h",
    "ħ": "h",
    "ⱨ": "h",
    "ⱶ": "h",
    "ɥ": "h",
    "ƕ": "hv",
    "ⓘ": "i",
    "ｉ": "i",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ĩ": "i",
    "ī": "i",
    "ĭ": "i",
    "ï": "i",
    "ḯ": "i",
    "ỉ": "i",
    "ǐ": "i",
    "ȉ": "i",
    "ȋ": "i",
    "ị": "i",
    "į": "i",
    "ḭ": "i",
    "ɨ": "i",
    "ı": "i",
    "ⓙ": "j",
    "ｊ": "j",
    "ĵ": "j",
    "ǰ": "j",
    "ɉ": "j",
    "ⓚ": "k",
    "ｋ": "k",
    "ḱ": "k",
    "ǩ": "k",
    "ḳ": "k",
    "ķ": "k",
    "ḵ": "k",
    "ƙ": "k",
    "ⱪ": "k",
    "ꝁ": "k",
    "ꝃ": "k",
    "ꝅ": "k",
    "ꞣ": "k",
    "ⓛ": "l",
    "ｌ": "l",
    "ŀ": "l",
    "ĺ": "l",
    "ľ": "l",
    "ḷ": "l",
    "ḹ": "l",
    "ļ": "l",
    "ḽ": "l",
    "ḻ": "l",
    "ſ": "l",
    "ł": "l",
    "ƚ": "l",
    "ɫ": "l",
    "ⱡ": "l",
    "ꝉ": "l",
    "ꞁ": "l",
    "ꝇ": "l",
    "ɭ": "l",
    "ǉ": "lj",
    "ⓜ": "m",
    "ｍ": "m",
    "ḿ": "m",
    "ṁ": "m",
    "ṃ": "m",
    "ɱ": "m",
    "ɯ": "m",
    "ⓝ": "n",
    "ｎ": "n",
    "ǹ": "n",
    "ń": "n",
    "ñ": "n",
    "ṅ": "n",
    "ň": "n",
    "ṇ": "n",
    "ņ": "n",
    "ṋ": "n",
    "ṉ": "n",
    "ƞ": "n",
    "ɲ": "n",
    "ŉ": "n",
    "ꞑ": "n",
    "ꞥ": "n",
    "л": "n",
    "ԉ": "n",
    "ǌ": "nj",
    "ⓞ": "o",
    "ｏ": "o",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "ồ": "o",
    "ố": "o",
    "ỗ": "o",
    "ổ": "o",
    "õ": "o",
    "ṍ": "o",
    "ȭ": "o",
    "ṏ": "o",
    "ō": "o",
    "ṑ": "o",
    "ṓ": "o",
    "ŏ": "o",
    "ȯ": "o",
    "ȱ": "o",
    "ö": "o",
    "ȫ": "o",
    "ỏ": "o",
    "ő": "o",
    "ǒ": "o",
    "ȍ": "o",
    "ȏ": "o",
    "ơ": "o",
    "ờ": "o",
    "ớ": "o",
    "ỡ": "o",
    "ở": "o",
    "ợ": "o",
    "ọ": "o",
    "ộ": "o",
    "ǫ": "o",
    "ǭ": "o",
    "ø": "o",
    "ǿ": "o",
    "ꝋ": "o",
    "ꝍ": "o",
    "ɵ": "o",
    "ɔ": "o",
    "ᴑ": "o",
    "œ": "oe",
    "ƣ": "oi",
    "ꝏ": "oo",
    "ȣ": "ou",
    "ⓟ": "p",
    "ｐ": "p",
    "ṕ": "p",
    "ṗ": "p",
    "ƥ": "p",
    "ᵽ": "p",
    "ꝑ": "p",
    "ꝓ": "p",
    "ꝕ": "p",
    "ρ": "p",
    "ⓠ": "q",
    "ｑ": "q",
    "ɋ": "q",
    "ꝗ": "q",
    "ꝙ": "q",
    "ⓡ": "r",
    "ｒ": "r",
    "ŕ": "r",
    "ṙ": "r",
    "ř": "r",
    "ȑ": "r",
    "ȓ": "r",
    "ṛ": "r",
    "ṝ": "r",
    "ŗ": "r",
    "ṟ": "r",
    "ɍ": "r",
    "ɽ": "r",
    "ꝛ": "r",
    "ꞧ": "r",
    "ꞃ": "r",
    "ⓢ": "s",
    "ｓ": "s",
    "ś": "s",
    "ṥ": "s",
    "ŝ": "s",
    "ṡ": "s",
    "š": "s",
    "ṧ": "s",
    "ṣ": "s",
    "ṩ": "s",
    "ș": "s",
    "ş": "s",
    "ȿ": "s",
    "ꞩ": "s",
    "ꞅ": "s",
    "ẛ": "s",
    "ʂ": "s",
    "ß": "ss",
    "ⓣ": "t",
    "ｔ": "t",
    "ṫ": "t",
    "ẗ": "t",
    "ť": "t",
    "ṭ": "t",
    "ț": "t",
    "ţ": "t",
    "ṱ": "t",
    "ṯ": "t",
    "ŧ": "t",
    "ƭ": "t",
    "ʈ": "t",
    "ⱦ": "t",
    "ꞇ": "t",
    "þ": "th",
    "ꜩ": "tz",
    "ⓤ": "u",
    "ｕ": "u",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ũ": "u",
    "ṹ": "u",
    "ū": "u",
    "ṻ": "u",
    "ŭ": "u",
    "ü": "u",
    "ǜ": "u",
    "ǘ": "u",
    "ǖ": "u",
    "ǚ": "u",
    "ủ": "u",
    "ů": "u",
    "ű": "u",
    "ǔ": "u",
    "ȕ": "u",
    "ȗ": "u",
    "ư": "u",
    "ừ": "u",
    "ứ": "u",
    "ữ": "u",
    "ử": "u",
    "ự": "u",
    "ụ": "u",
    "ṳ": "u",
    "ų": "u",
    "ṷ": "u",
    "ṵ": "u",
    "ʉ": "u",
    "ⓥ": "v",
    "ｖ": "v",
    "ṽ": "v",
    "ṿ": "v",
    "ʋ": "v",
    "ꝟ": "v",
    "ʌ": "v",
    "ꝡ": "vy",
    "ⓦ": "w",
    "ｗ": "w",
    "ẁ": "w",
    "ẃ": "w",
    "ŵ": "w",
    "ẇ": "w",
    "ẅ": "w",
    "ẘ": "w",
    "ẉ": "w",
    "ⱳ": "w",
    "ⓧ": "x",
    "ｘ": "x",
    "ẋ": "x",
    "ẍ": "x",
    "ⓨ": "y",
    "ｙ": "y",
    "ỳ": "y",
    "ý": "y",
    "ŷ": "y",
    "ỹ": "y",
    "ȳ": "y",
    "ẏ": "y",
    "ÿ": "y",
    "ỷ": "y",
    "ẙ": "y",
    "ỵ": "y",
    "ƴ": "y",
    "ɏ": "y",
    "ỿ": "y",
    "ⓩ": "z",
    "ｚ": "z",
    "ź": "z",
    "ẑ": "z",
    "ż": "z",
    "ž": "z",
    "ẓ": "z",
    "ẕ": "z",
    "ƶ": "z",
    "ȥ": "z",
    "ɀ": "z",
    "ⱬ": "z",
    "ꝣ": "z"
};

export function removeDiacritics(str: string) {
    return str.replace(/[^\u0000-\u007e]/g, function (c) {
        return diacriticsMap[c] || c;
    });
}