let output = document.getElementById('output');

function display(num){
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        output.value = "Syntax Error";
    }
}

function clr(){
    output.value = "";
}

function delt(){
    output.value = output.value.slice(0,-1);
}