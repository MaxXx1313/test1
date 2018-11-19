 var INPUT_DATA = new Array(document.getElementById("AmountOfMoney"), document.getElementById("NumberOfMonth"),
                            document.getElementById("StartMonth"), document.getElementById("SimplePercent"), document.getElementById("ComplexPercent"));

//---------------------------------------validation of input data---------------------------------------------------------------

//check element on positive float numders 
function isNumeric(n) {                 
  return !isNaN(parseFloat(n.value)) && isFinite(n.value) && n.value>=0;
}

 //check all data on positive float numders 
 function valideteAll(){
    for (var i = 0; i < INPUT_DATA.length; i++) {
       if(isNumeric(INPUT_DATA[i])){
        INPUT_DATA[i].classList.add("valide_input");
       }
       else{
        INPUT_DATA[i].classList.add("invalide_input");
       }
    }

//check StartMounth data for not empty field
    INPUT_DATA[2].classList.remove("valide_input");

    if (INPUT_DATA[2].value != ""){
        INPUT_DATA[2].classList.remove("invalide_input");
        INPUT_DATA[2].classList.add("valide_input");
    }

//check NumderOfMonth data on integer    
    if ((INPUT_DATA[1].value%1 != 0)){
        INPUT_DATA[1].classList.remove("valide_input");
        INPUT_DATA[1].classList.add("invalide_input");
    }
 }



//----------------------------------------clearing form fields ---------------------------------------------------------------





