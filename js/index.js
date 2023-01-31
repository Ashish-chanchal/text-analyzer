let input1 = document.getElementById("textinput1");
let input2 = document.getElementById("textinput2");
let upper = document.getElementById("up-case");
let lower = document.getElementById("low-case");
let space = document.getElementById("sp-case");
let punctution = document.getElementById("pu-case");
let copytxt = document.getElementById("cp-case");

upper.addEventListener('click', funk1);
lower.addEventListener('click', funk2);
space.addEventListener('click', funk3);
punctution.addEventListener('click',funk4);
copytxt.addEventListener('click',funk5);
function funk1(){
  if(input1.value!=""){
    let txt=input1.value;
    input2.value = txt.toUpperCase();
    input1.value="";
  }
}
function funk2(){
  if(input1.value!=""){
    let txt=input1.value;
    input2.value = txt.toLowerCase();
    input1.value="";
  }
}
function funk3(){
  if(input1.value!=""){
    let txt=input1.value;
    input2.value = txt.replace(/\s+/g," ").trim();
    console.log(input2.value);
    input1.value="";
  }
}
function funk4(){
  if(input1.value!=""){
    let txt=input1.value;
    input2.value = txt.replace(/[@#$%^&*()_+-=!?<>,.:;]/gm,'');
    input1.value="";
  }
}
function funk5(){
 if (input2.value!="") {
  let copyText=document.getElementById("textinput2");

// Select the text field
copyText.select();
copyText.setSelectionRange(0, 99999); // For mobile devices

// Copy the text inside the text field
navigator.clipboard.writeText(copyText.value);

// Alert the copied text
alert("Copied the text: " + copyText.value);
input2.value="";
 }

}