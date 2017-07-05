/*-------------
  初期処理
-------------*/
function init() {

    var befNum = parseInt(document.getElementById("input").value); //変換前
    
    //入力値チェック
    inputCheck(befNum);
    
    var radix; //何進数
    var aftNum; //変換後
    
    //チェック処理
    inputCheck(befNum);
    
    //ラジオボタン取得
    //10→16
    if(document.form1.radio1.checked){
        radix = 16;
    //10→8
    }else if(document.form1.radio2.checked){
        radix = 8;
    //10→2
    }else if(document.form1.radio3.checked){
        radix = 2;
    //10→n
    }else if(document.form1.radio4.checked){
        radix = parseInt(document.form2.change.value);
    }
    
    //基数変換処理実行
    aftNum = radixConv(befNum,radix);
    //変換後テキストボックスに反映
    document.getElementById("output").value = aftNum;
}

/*-------------------------------
  10以上の数字→アルファベット
  引数：10以上の数字
  返り値:変換後のアルファベット
-------------------------------*/
function changeStr(val){
    var aftStr;
            switch(val){
                case 10:
                    aftStr = "A";
                    break;
                case 11:
                    aftStr = "B";
                    break;
                case 12:
                    aftStr = "C";
                    break;
                case 13:
                    aftStr = "D";
                    break;
                case 14:
                    aftStr = "E";
                    break;
                case 15:
                    aftStr = "F";
                    break;
                case 16:
                    aftStr = "G";
                    break;
                case 17:
                    aftStr = "H";
                    break;
                case 18:
                    aftStr = "I";
                    break;
                case 19:
                    aftStr = "J";
                    break;
                case 20:
                    aftStr = "K";
                    break;
                case 21:
                    aftStr = "L";
                    break;
                case 22:
                    aftStr = "M";
                    break;
                case 23:
                    aftStr = "N";
                    break;
                case 24:
                    aftStr = "O";
                    break;
                case 25:
                    aftStr = "P";
                    break;
                case 26:
                    aftStr = "Q";
                    break;
                case 27:
                    aftStr = "R";
                    break;
                case 28:
                    aftStr = "S";
                    break;
                case 29:
                    aftStr = "T";
                    break;
                case 30:
                    aftStr = "U";
                    break;
                case 31:
                    aftStr = "V";
                    break;
                case 32:
                    aftStr = "W";
                    break;
                case 33:
                    aftStr = "X";
                    break;
                case 34:
                    aftStr = "Y";
                    break;
                case 35:
                    aftStr = "Z";
                    break;
                default:
                    aftStr = "";
                    break;
            }
    return aftStr;

}

/*--------------------------
  基数変換処理
  引数：変換前数字、何進数
  返り値：基数変換後
--------------------------*/
function radixConv(val,div){
    var divNum = new Array(); //変換前÷何進数格納
    var modNum = new Array(); //変換前÷何進数のあまり格納
    var res = ""; //基数変換後文字列格納
    var i = 0;    //カウンター
    var tmpMod;   //あまり保管用
    
    //変換前の数字を何進数の値で割っていき0になるまで
    while(val> 0){
        divNum[i] = Math.floor(val/div);
        tmpMod = val%div;
        //あまりが10以上ならアルファベットに変換
        if(tmpMod > 9){
            modNum[i] = changeStr(tmpMod);
        }else{
            modNum[i] = tmpMod;
        }
        val = divNum[i];
        res = modNum[i] + res; //変換後文字列生成
        i = i + 1;
    }
    return res;
}

/*--------------------------
  入力値チェック
  引数：変換前数字
  返り値：基数変換後
--------------------------*/
function inputCheck(checkNum){

    //数字以外が入っていれば、処理抜ける
    if(isNaN(checkNum)){
        alert("数値のみ指定できます。");
        //変換前入力欄にフォーカスあてる
        document.getElementById("input").focus();
        exit;
    }
    //特になにもなければ処理続行
    return;
    
}
