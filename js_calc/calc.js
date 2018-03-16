
var txtScreen = document.querySelector(".screen-text");
var btnClear = document.querySelector(".clear");
var btn1 = document.getElementById("num-1");
var btn2 = document.getElementById("num-2");
var btn3 = document.getElementById("num-3");
var btn4 = document.getElementById("num-4");
var btn5 = document.getElementById("num-5");
var btn6= document.getElementById("num-6");
var btn7 = document.getElementById("num-7");
var btn8 = document.getElementById("num-8");
var btn9 = document.getElementById("num-9");
var btn0 = document.getElementById("num-0");

btnClear.addEventListener("click", function(){
   txtScreen.textContent = ""; 
});
btn1.addEventListener("click", function(){
    if(txtScreen.textContent.length < 11)
   {
        txtScreen.textContent = txtScreen.textContent + "1";
        InsertComma(txtScreen);
   }
});

btn2.addEventListener("click", function(){
    if(txtScreen.textContent.length < 11)
   {
       txtScreen.textContent = txtScreen.textContent + "2";
        InsertComma(txtScreen);
   }
});

btn3.addEventListener("click", function(){
    if(txtScreen.textContent.length < 11)
   {
        txtScreen.textContent = txtScreen.textContent + "3";
        InsertComma(txtScreen);
   }
});

btn4.addEventListener("click", function(){
    if(txtScreen.textContent.length < 11)
   {
       txtScreen.textContent = txtScreen.textContent + "4";
        InsertComma(txtScreen);
   }
});

btn5.addEventListener("click", function(){
    if(txtScreen.textContent.length < 11)
   {
       txtScreen.textContent = txtScreen.textContent + "5";
        InsertComma(txtScreen);
   }
});

btn6.addEventListener("click", function(){
    if(txtScreen.textContent.length < 11)
   {
        txtScreen.textContent = txtScreen.textContent + "6";
        InsertComma(txtScreen);
   }
});

btn7.addEventListener("click", function(){
    if(txtScreen.textContent.length < 11)
   {
       txtScreen.textContent = txtScreen.textContent + "7";
        InsertComma(txtScreen);
   }
});

btn8.addEventListener("click", function(){
    if(txtScreen.textContent.length < 11)
   {
        txtScreen.textContent = txtScreen.textContent + "8";
        InsertComma(txtScreen);
   }
});

btn9.addEventListener("click", function(){
    if(txtScreen.textContent.length < 11)
   {
        txtScreen.textContent = txtScreen.textContent + "9";
        InsertComma(txtScreen);
   }
});

btn0.addEventListener("click", function(){
    if(txtScreen.textContent.length < 11)
   {
        txtScreen.textContent = txtScreen.textContent + "0";
        InsertComma(txtScreen);
   }
    
});

function InsertComma(number){
    /*NOT SPLICE NOR REGEX if you want it to be done real time*/
    var tempNum = number.textContent;
    var cnt = 0;
    var output = "";
    /*remove commas*/
    tempNum = tempNum.replace(",","");
    for(var i=tempNum.length-1; i>=0; i--){
        /*count to 3 if i is numeric*/
        if(isNumeric(tempNum[i])){
           /*append separator if count is equal to 3*/
            if(cnt === 3){
                output += ",";
                cnt = 0;
                console.log("-->insert at " + i.toString() + " char " + tempNum[i]);
            }    
             cnt++;
        }else{
          console.log("comma found! " + "i=" + i.toString() + " char=" + tempNum[i].toString() + " cnt=" + cnt.toString() );
            /*cnt--;*/
        }
        console.log("i=" + i.toString() + " char=" + tempNum[i].toString() + " cnt=" + cnt.toString() );
        /*append character[i] that is numeric*/
        if(isNumeric(tempNum[i])){
            output += tempNum[i];
        }
    }
    output = reverseString(output);
    number.textContent = output;
}

function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

