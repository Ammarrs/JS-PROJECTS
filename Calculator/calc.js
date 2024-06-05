// Calculator Program

const disp = document.getElementById("disp");


function appendToDisplay(input){
    disp.value += input;
}

function clearDisplay(){
    disp.value = "";
}

function calculate(){
    try{
        disp.value = eval(disp.value);
    }
    catch(err){
        disp.value = "ERR";
    }
    
}