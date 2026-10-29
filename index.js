let count;
let num = 0;
function storageFun(){
    const stored = sessionStorage.getItem("history");
    if(stored){
        count = JSON.parse(stored);
    }
    else{
        count = [];
        sessionStorage.setItem("history", JSON.stringify(stored));
    }
}
function up(){
    if(num < count.length - 1) {
        num++;
        document.getElementById("mainBox").value = count[num];
    }
}
function down(){
    if(num > 0) {
        num--;
        document.getElementById("mainBox").value = count[num];
    }
}
function solve(){
    const solution = eval(document.querySelector("input").value);
    sessionStorage.setItem("history", document.querySelector("input").value);
    count[num] = document.querySelector("input").value;
    num++;
    document.getElementById("solved").innerText = solution;
}
function a(){
    document.getElementById("mainBox").value += "1";
}
function b(){
    document.getElementById("mainBox").value += "2";
}
function c(){
    document.getElementById("mainBox").value += "3";
}
function d(){
    document.getElementById("mainBox").value += "4";

}
function e(){
    document.getElementById("mainBox").value += "5";
}
function f(){
    document.getElementById("mainBox").value += "6";

}
function g(){
    document.getElementById("mainBox").value += "7";
}
function h(){
    document.getElementById("mainBox").value += "8";
}
function i(){
    document.getElementById("mainBox").value += "9";
}
function j(){
    document.getElementById("mainBox").value += "0";
}
function ad(){
    document.getElementById("mainBox").value += "+";
}
function sub(){
    document.getElementById("mainBox").value += "-";
}
function multiply(){
    document.getElementById("mainBox").value += "*";
}
function divide(){
    document.getElementById("mainBox").value += "/";
}
function power(){
    document.getElementById("mainBox").value += "**";
}
function decimal(){
    document.getElementById("mainBox").value += ".";
}
function mod(){
    document.getElementById("mainBox").value += "%";
}
function storage(){
    return history[history.length - 1];
}
function enter(){

}