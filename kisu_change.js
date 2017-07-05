function init() {
    var sinsu;
    var num = parseInt(document.getElementById("input").value);
    
    //ラジオボタンチェック
    //10→16のとき
    if(document.form1.radio1.checked){
        sinsu = 16;
    //10→8のとき
    }else if(document.form1.radio2.checked){
        sinsu = 8;
    //10→2のとき
    }else if(document.form1.radio3.checked){
        sinsu = 2;
    //その他進数のとき
    }else if(document.form1.radio4.checked){
        sinsu = parseInt(document.form2.change.value);
    }
    changeNum = change16(num,sinsu);
    document.getElementById("output").value = changeNum;
}

function changeAlfa(val){
    var alfa;
            switch(val){
                case 10:
                    alfa = "A";
                    break;
                case 11:
                    alfa = "B";
                    break;
                case 12:
                    alfa = "C";
                    break;
                case 13:
                    alfa = "D";
                    break;
                case 14:
                    alfa = "E";
                    break;
                case 15:
                    alfa = "F";
                    break;
                case 16:
                    alfa = "G";
                    break;
                case 17:
                    alfa = "H";
                    break;
                case 18:
                    alfa = "I";
                    break;
                case 19:
                    alfa = "J";
                    break;
                case 20:
                    alfa = "K";
                    break;
                case 21:
                    alfa = "L";
                    break;
                case 22:
                    alfa = "M";
                    break;
                case 23:
                    alfa = "N";
                    break;
                case 24:
                    alfa = "O";
                    break;
                case 25:
                    alfa = "P";
                    break;
                case 26:
                    alfa = "Q";
                    break;
                case 27:
                    alfa = "R";
                    break;
                case 28:
                    alfa = "S";
                    break;
                case 29:
                    alfa = "T";
                    break;
                case 30:
                    alfa = "U";
                    break;
                case 31:
                    alfa = "V";
                    break;
                case 32:
                    alfa = "W";
                    break;
                case 33:
                    alfa = "X";
                    break;
                case 34:
                    alfa = "Y";
                    break;
                case 35:
                    alfa = "Z";
                    break;
                default:
                    alfa = "";
                    break;
            }
    return alfa;

}

function change16(val,div){
    var divNum = new Array();
    var modNum = new Array();
    var res = "";
    var i = 0;
    var tmpMod;
    while(val> 0){
        divNum[i] = Math.floor(val/div);
        tmpMod = val%div;
        if(tmpMod > 9){
            modNum[i] = changeAlfa(tmpMod);
        }else{
            modNum[i] = tmpMod;
        }
        val = divNum[i];
        res = modNum[i] + res;
        i = i+1;
    }
    return res;
}


