var CryptoJS = require("crypto-js")

CryptoJS.enc.Utils = {
    'toWordArray': function (_$bL) {
        var _$bZ = [];
        var _$bc = 0;
        for (; _$bc < _$bL.length; _$bc++) _$bZ[_$bc >>> 2] |= _$bL[_$bc] << 24 - _$bc % 4 * 8;
        return CryptoJS.lib.WordArray.create(_$bZ, _$bL.length);
    },
    'fromWordArray': function (_$bL) {
        var _$bZ = new Uint8Array(_$bL.sigBytes);
        var _$bc = 0;
        for (; _$bc < _$bL.sigBytes; _$bc++) _$bZ[_$bc] = _$bL.words[_$bc >>> 2] >>> 24 - _$bc % 4 * 8 & 255;
        return _$bZ;
    }
}

CryptoJS.enc.Hex.format = function (_$bL) {
    var _$bZ = _$bL.words;
    var _$bc = _$bL.sigBytes;
    var _$bl = [];
    var _$bm = 0;
    for (; _$bm < _$bc; _$bm++) {
        var _$bv = _$bZ[_$bm >>> 2] >>> 24 - _$bm % 4 * 8 & 255;
        _$bl.push((_$bv >>> 4).toString(16));
        _$bl.push((15 & _$bv).toString(16));
    }
    return _$bl.join('');
}

CryptoJS.enc.Base64._map1 = "hgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkji"
CryptoJS.enc.Base64.stringify1 = function (_$bJ, _$bC) {
    var _$bb = _$bJ.words;
    var _$bW = _$bJ.sigBytes;
    var _$bY = 1 === _$bC ? this._map : this._map1;
    _$bJ.clamp();
    var _$bP = [];
    var _$bL = 0;
    for (; _$bL < _$bW; _$bL += 3) {
        var _$bZ = (_$bb[_$bL >>> 2] >>> 24 - _$bL % 4 * 8 & 255) << 16 | (_$bb[_$bL + 1 >>> 2] >>> 24 - (_$bL + 1) % 4 * 8 & 255) << 8 | _$bb[_$bL + 2 >>> 2] >>> 24 - (_$bL + 2) % 4 * 8 & 255;
        var _$bc = 0;
        for (; _$bc < 4 && _$bL + 0.75 * _$bc < _$bW; _$bc++) _$bP.push(_$bY.charAt(_$bZ >>> 6 * (3 - _$bc) & 63));
    }
    var _$bl = _$bY.charAt(64);
    if (_$bl) {
        for (; _$bP.length % 4;) _$bP.push(_$bl);
    }
    return _$bP.join('');
}

var _$n = function (_$be) {
    return _$be && _$be.Math === Math && _$be;
};
var _$S = _$n("object" == typeof globalThis && globalThis) || _$n("object" == typeof window && window) || _$n("object" == typeof self && self) || _$n("object" == typeof _$N && _$N) || _$n("object" == typeof _$N && _$N) || function () {
    return this;
}() || Function("return this")();
var _$s1 = {};
var _$en = _$S;
var _$eS = _$s1;
var _$eg = function (_$be, _$bR) {
    var _$br = _$eS[_$be + "Prototype"];
    var _$bz = _$br && _$br[_$bR];
    if (_$bz) return _$bz;
    var _$bw = _$en[_$be];
    var _$bf = _$bw && _$bw.prototype;
    return _$bf && _$bf[_$bR];
};

var _$Rw = _$eg("Array", "map");

var _$e = function (_$be) {
    try {
        return !!_$be();
    } catch (_$bR) {
        return !0;
    }
};
var _$R = !_$e(function () {
    var _$be = function () { }.bind();
    return 'function' != typeof _$be || _$be.hasOwnProperty("prototype");
});
var _$r = _$R;
var _$z = Function.prototype;
var _$w = _$z.call;
var _$f = _$r && _$z.bind.bind(_$w, _$w);
var _$k = _$r ? _$f : function (_$be) {
    return function () {
        return _$w.apply(_$be, arguments);
    };
};
var _$a = _$k({}.isPrototypeOf);
var _$Rf = _$a;
var _$Rk = _$Rw;
var _$Ra = Array.prototype;
var _$Rn = function (_$be) {
    var _$bR = _$be.map;
    return _$be === _$Ra || _$Rf(_$Ra, _$be) && _$bR === _$Ra.map ? _$Rk : _$bR;
};
var _$eo = _$eg("Array", "slice");
var _$ep = _$a;
var _$eF = _$eo;
var _$eq = Array.prototype;
var _$eO = function (_$be) {
    var _$bR = _$be.slice;
    return _$be === _$eq || _$ep(_$eq, _$be) && _$bR === _$eq.slice ? _$eF : _$bR;
};
function _$dK(_$br) {
    return _$Rn(Array.prototype).call(_$br, function (_$bz) {
        var _$bw;
        return _$eO(_$bw = '00' + (255 & _$bz).toString(16)).call(_$bw, -2);
    }).join('');
}
function _$dK(_$br) {
    return _$Rn(Array.prototype).call(_$br, function (_$bz) {
        var _$bw;
        return _$eO(_$bw = '00' + (255 & _$bz).toString(16)).call(_$bw, -2);
    }).join('');
}
function _$dE(_$br) {
    var _$bz = new Uint8Array(_$br.length);
    Array.prototype.forEach.call(_$bz, function (_$bw, _$bf, _$bk) {
        _$bk[_$bf] = _$br.charCodeAt(_$bf);
    });
    return _$dK(_$bz);
}
var _$eJ = _$eg("Array", "concat");
var _$eC = _$a;
var _$eA = _$eJ;
var _$ed = Array.prototype;
var _$eb = function (_$be) {
    var _$bR = _$be.concat;
    return _$be === _$ed || _$eC(_$ed, _$be) && _$bR === _$ed.concat ? _$eA : _$bR;
};
function _$d6() {
    var _$br = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
    var _$bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd";
    _$br += 4000;
    var _$bw = new Date(_$br);
    var _$bf = _$bz;
    var _$bk = {
        'M+': _$bw.getMonth() + 1,
        'd+': _$bw.getDate(),
        'D+': _$bw.getDate(),
        'h+': _$bw.getHours(),
        'H+': _$bw.getHours(),
        'm+': _$bw.getMinutes(),
        's+': _$bw.getSeconds(),
        'w+': _$bw.getDay(),
        'q+': Math.floor((_$bw.getMonth() + 3) / 3),
        'S+': _$bw.getMilliseconds()
    };
    /(y+)/i.test(_$bf) && (_$bf = _$bf.replace(RegExp.$1, ''.concat(_$bw.getFullYear()).substr(4 - RegExp.$1.length)));
    Object.keys(_$bk).forEach(function (_$ba) {
        if (new RegExp('('.concat(_$ba, ')')).test(_$bf)) {
            var _$bn;
            var _$bS = 'S+' === _$ba ? "000" : '00';
            _$bf = _$bf.replace(RegExp.$1, 1 == RegExp.$1.length ? _$bk[_$ba] : _$eb(_$bn = ''.concat(_$bS)).call(_$bn, _$bk[_$ba]).substr(''.concat(_$bk[_$ba]).length));
        }
    });
    return _$bf;
}

function _$d8(_$br) {
    var _$bz = '';
    for (; _$br--;) _$bz += "0123456789almnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"[54 * Math.random() | 0];
    _$bz.length > 6 && (_$bz = _$bz.substring(0, 6) + '2' + _$bz.substring(6, _$bz.length - 1));
    return _$bz;
}

// fp指纹生成
function getFp() {
    var str = "t6d0jhqw3p";
    var arr = [];
    for (let i = 0; i < str.length; i++) {
        var charStr = str[i];
        if (Math.random() * (str.length - i) < (4 - arr.length)) {
            arr.push(charStr);
        }
    }
    console.log(arr);

    var str2 = ""
    for (let i = 0; i < arr.length; i++) {
        var index = (Math.random() * (arr.length - i)) | 0;
        str2 += arr[index];
        arr[index] = arr[arr.length - i - 1]
    }
    console.log(str2) // pj03

    for (let i = 0; i < str2.length; i++) {
        if (str.indexOf(str2[i]) !== -1) {
            str = str.replace(str2[i], "");
        }
    }
    console.log(str) // t6dhqw

    var size = (Math.random() * 10) | 0;

    function _$dF(_$br) {
        var _$bz = _$br.size;
        var _$bw = _$br.num;
        var _$bf = '';
        for (; _$bz--;) _$bf += _$bw[Math.random() * _$bw.length | 0];
        return _$bf;
    }
    var str3 = _$dF({ size: size, num: str }) // tqw6

    var str4 = str3 + str2;

    var str5 = _$dF({ size: 12 - size - 1, num: str })

    var str6 = str4 + str5 + size;
    console.log("str6: ", str6)

    var arr2 = str6.split("")
    var arr3 = arr2.slice(0, 9)
    var arr4 = arr2.slice(9)
    var arr5 = []
    while (arr3.length > 0) {
        var str = arr3.pop();
        var pi = parseInt(str, 36)
        var r = Number(35 - pi).toString(36)
        arr5.push(r);
    }

    var fp = arr5.concat(arr4).join("")
    return fp;
}

var fingerprint = {
    canvas: "data:image/png;base64,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",
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    extendRandom: _$d8(13),
    random: _$d8(12),
    webglFp: "",
    fp: getFp()
}

function encode(word) {
    var uint8Array = CryptoJS.enc.Utils.fromWordArray(word)
    var array1 = Array.prototype.slice.call(uint8Array)

    for (let i = 0; i < 3 - (uint8Array.length % 3); i++) {
        array1.push(3 - (uint8Array.length % 3));
    }

    var array2 = []
    var initVal = array1.length - 1;
    do {
        var startIndex = initVal - 2;
        var endIndex = initVal + 1;
        array2.push(...array1.slice(startIndex, endIndex));
        initVal -= 3;
    } while (initVal >= 0)

    var word1 = CryptoJS.enc.Utils.toWordArray(array2);
    var str = CryptoJS.enc.Base64.stringify1(word1, 0)

    var array3 = str.split("");
    var array4 = [];
    var cursorIndex = 0;
    do {
        cursorIndex += 4;
        var array5 = array3.slice(cursorIndex - 4, cursorIndex).reverse();
        array4.push(...array5)
    } while (cursorIndex < array3.length)
    var str2 = array4.join("")
    return str2;
}

function getPart8() {
    var word = CryptoJS.enc.Utf8.parse(JSON.stringify({
        "sua": fingerprint.userAgent.match(new RegExp("Mozilla/5.0 \\((.*?)\\)"))[1],
        "pp": {},
        "extend": {
            "wd": 0,
            "l": 0,
            "ls": 5,
            "wk": 0,
            "bu1": "0.1.4",
            "bu3": 37,
            "bu4": 0,
            "bu5": 0,
            "bu6": 21,
            "bu7": 0,
            "bu8": 0,
            "random": fingerprint.extendRandom,
            "bu12": -8,
            "bu10": 14,
            "bu11": 2
        },
        "pf": "Win32",
        "random": fingerprint.random,
        "v": "h5_file_v5.2.4",
        "bu4": "-1",
        "canvas": CryptoJS.MD5(fingerprint.canvas).toString(),
        "webglFp": "",
        "ccn": 12,
        "fp": fingerprint.fp
    }, null, 2))
    return encode(word);
}

function getMiddleStr() {
    var rand1 = _$d8(32);
    var arr1 = ['1', '2', '3'];
    var arr2 = ['+', 'x'];

    var char1 = arr1[Math.floor(3 * Math.random())];
    var char2 = arr2[Math.floor(2 * Math.random())];
    var char3 = arr1[Math.floor(3 * Math.random())];
    var str1 = rand1.substr(0, 6);

    var str = char1 + char2 + char3 + str1;
    // var str = "1+3Es_L4v";
    var word1 = CryptoJS.enc.Utf8.parse(str);
    var b64 = CryptoJS.enc.Base64.stringify(word1);
    return b64.replace(/\//g, "_").replace(/=/g, "");
}

function getTk() {
    var fp = fingerprint.fp;
    var date = Date.now();
    var rand = _$d8(12);
    var prefixStr = "1a"

    var arr0 = []
    for (let i = 0; i < prefixStr.length; i++) {
        arr0.push(prefixStr.charCodeAt(i));
    }

    var arr1 = [];
    for (let i = 0; i < fp.length; i++) {
        arr1.push(fp.charCodeAt(i));
    }

    var arr2 = [];
    for (let i = 0; i < rand.length; i++) {
        arr2.push(rand.charCodeAt(i));
    }

    var buf = new ArrayBuffer(8);
    var dataView = new DataView(buf);
    dataView.setUint32(0, date % Math.pow(2, 32), true);
    dataView.setUint32(4, Math.floor(date / Math.pow(2, 32)), true);
    var uint8Array = new Uint8Array(buf);

    var arr = arr0.concat(arr2).concat(Array.from(uint8Array)).concat(arr1);
    var uint8Array1 = new Uint8Array(arr);
    var hash = MD5(uint8Array1);

    var res1 = _$dE(hash.slice(0, 8));
    var res2 = _$dE(prefixStr);
    var res3 = _$dE(rand);
    var res4 = _$dK(uint8Array);
    var res5 = _$dE(fp);

    var res = res1 + res2 + res3 + res4 + res5;

    var hex = CryptoJS.enc.Hex.parse(res);
    var suffix = encode(hex);
    var mStr = getMiddleStr();
    var tk = "tk05w41l" + mStr + suffix;
    var tkStr = "tk05w" + MD5(tk).substr(0, 8) + "41l" + mStr + suffix;
    // tkStr + fp + h5stDateFormat + fingerprint.part3 + "fu2dSD";
    return tkStr;
}

function resultFormat(inputWord) {
    var uintArr = CryptoJS.enc.Utils.fromWordArray(inputWord);
    var array = Array.prototype.slice.call(uintArr);
    var newArray = array.slice(0, 5).reverse();
    var suffixArray = array.slice(5);
    newArray.push(...suffixArray);
    var word = CryptoJS.enc.Utils.toWordArray(newArray);
    var hexStr = CryptoJS.enc.Hex.format(word);
    return hexStr;
}

function getWord(data) {
    var dataArr = data.split("");
    var charArr = dataArr.slice(0, 4);
    var arr = [];
    while (charArr.length > 0) {
        var charStr = charArr.pop();
        var str = String.fromCharCode(158 - charStr.charCodeAt(0));
        arr.push(str);
    }
    arr.push(...dataArr.slice(4));
    var str = arr.join(""); // in3*w542b...
    var word = CryptoJS.enc.Utf8.parse(str);
    return word;
}

function getDataWord(data) {
    var data2 = "YXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZ"
    var res1 = Math.floor(data.length / 11);
    var arr = [];
    for (let i = 0; i < 11; i++) {
        var temp1 = i * res1;
        if (i === 10) {
            var temp = 10 * res1;
            var temp1 = (data.length % 11) + res1;
            var temp3 = 0;
            for (let i = 0; i < temp1; i++) {
                var temp2 = temp + i;
                if (temp2 < data.length) {
                    temp3 += data.charCodeAt(temp2);
                }
            }
            var pos = (temp3 * 7) % 64;
            arr.push(data2.charAt(pos));
        } else {
            var temp3 = 0;
            for (let j = 0; j < res1; j++) {
                var temp2 = temp1 + j;
                if (temp2 < data.length) {
                    temp3 += data.charCodeAt(temp2);
                }
            }
            var pos = (temp3 * 7) % 64;
            arr.push(data2.charAt(pos));
        }
    }
    var str = arr.join("");
    var dataStr = data + str + "*hdj61";
    var dataWord = CryptoJS.enc.Utf8.parse(dataStr);
    return dataWord;
}

function MD5(data) {
    if (typeof data === "string" || data instanceof Uint8Array) {
        if (data.lastIndexOf("envCollect") === 0) {
            return CryptoJS.MD5(data.slice(10)).toString();
        }
        var md5Word;
        if (typeof data === "string") {
            var dataWord = getDataWord(data);
            md5Word = CryptoJS.MD5(dataWord);
        } else {
            md5Word = CryptoJS.MD5(CryptoJS.enc.Utils.toWordArray(data))
        }
        var hashUint8Array = CryptoJS.enc.Utils.fromWordArray(md5Word);
        var hashArray = Array.prototype.slice.call(hashUint8Array)
        var newHashArray = hashArray.slice(0, 5).reverse();
        var suffixArray = hashArray.slice(5, 16);
        newHashArray.push(...suffixArray);
        var hashWord = CryptoJS.enc.Utils.toWordArray(newHashArray);
        var hexStr = CryptoJS.enc.Hex.format(hashWord);
        return hexStr;
    }
}

function SHA256(data) {
    var dataWord = getDataWord(data);
    var sha256Word = CryptoJS.SHA256(dataWord);
    var hexStr = resultFormat(sha256Word);
    return hexStr;
}

function CustomSHA256(data, key) {
    var keyWord = getWord(key);
    var keyWordClone = CryptoJS.SHA256(keyWord).clone();
    var dataWord = getDataWord(data);
    var hmacShaWord = CryptoJS.HmacSHA256(dataWord, keyWordClone);
    var hmacShaHexStr = resultFormat(hmacShaWord);
    // console.log(hmacShaHexStr)
    return hmacShaHexStr;
}

function decodeMidStr(data) {
    var word = CryptoJS.enc.Base64.parse(data);
    var result = CryptoJS.enc.Utf8.stringify(word);
    return result;
}

function getKey(tkStr, part1, part3) {
    var data = tkStr + fingerprint.fp + part1 + part3 + "fu2dSD";

    var middleStr = tkStr.slice(16, 28).replace(/-/g, "+").replace(/_/g, "/");
    var deMidStr = decodeMidStr(middleStr);
    var deMidArr = deMidStr.match(/^[123]([x+][123])+/)[0].split("");

    var result = "";
    var dataStr = data;
    var operatorFlag = 0;
    for (let i = 0; i < deMidArr.length; i++) {
        var deMidChar = deMidArr[i];
        if (!isNaN(deMidChar)) {
            dataStr = data;
            if (operatorFlag === 1) {
                dataStr = result;
                result = "";
            }
            switch (deMidChar) {
                case "3":
                    result += CustomSHA256(dataStr, tkStr);
                    break;
                case "1":
                    result += MD5(dataStr);
                    break;
                case "2":
                    result += SHA256(dataStr);
                    break;
            }
        } else {
            operatorFlag = ["+", "x"].indexOf(deMidChar);
        }
    }
    return result;
}

function getSignedStr(data, key) {
    var keyWord = getWord(key);
    var dataWord = getDataWord(data);
    var hmacShaWord = CryptoJS.HmacSHA256(dataWord, keyWord);
    var signedStr = resultFormat(hmacShaWord);
    return signedStr;
}

function getPart9() {
    var data = "appid,body,client,functionId"
    var dataWord = CryptoJS.enc.Utf8.parse(data);
    var encodeStr = encode(dataWord);
    return encodeStr;
}

var part8 = getPart8();
// console.log("part8: ", part8)

var part7 = Date.now();
var part1 = _$d6(part7, "yyyyMMddhhmmssSSS");
var part2 = fingerprint.fp;
var part3 = "b5216";
var part4 = getTk();
var part6 = "5.2"

var key = getKey(part4);
var part5 = getSignedStr("appid:www-jd-com&body:2ef53fd4521b814b32748479ba52b63cf5d6770e2df628444abe2cb6e5905672&client:wh5&functionId:qryCompositeMaterials", key)
var part9 = getSignedStr("appid:appid&functionid:functionId", key)
var part10 = getPart9();

var h5st = `${part1};${part2};${part3};${part4};${part5};${part6};${part7};${part8};${part9};${part10}`

console.log(h5st);

debugger;