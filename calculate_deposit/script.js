 var INPUT_DATA = new Array(document.getElementById("AmountOfMoney"), document.getElementById("NumberOfMonth"),document.getElementById("StartMonth"),
                            document.getElementById("SimplePercent"), document.getElementById("ComplexPercent"), document.getElementById("CompoundingPeriod"));

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
    var integersInput=[1,5];
    integersInput.forEach(function(int){
        if ((INPUT_DATA[int].value%1 != 0)){
            INPUT_DATA[int].classList.remove("valide_input");
            INPUT_DATA[int].classList.add("invalide_input");
        }
    });
 }


//----------------------------------------clearing form fields ---------------------------------------------------------------


document.getElementById("button_clear-fields").addEventListener("click", function(){
    INPUT_DATA.forEach(function(input){
        input.value = "";
        input.className = "";
    });
});



//---------------------------------------calculation percents functions----------------------------------------------------------------


// associative massive [[Simple Procent Money,Complex Procent Money] : month]



//calculation of simple percent 
function simplePercent(month,percent,startSum){
    var previouseMonth=moneySimpleComplex[Object.keys(moneySimpleComplex)[startMonth.stepUp(month-1)],0];
   Return(previouseMonth+startSum*percent/1200);
}

//calculation of complex percent
function complexPercent(month,percent,compoundingPeriod){
    var previouseMonth=moneySimpleComplex[Object.keys(moneySimpleComplex)[startMonth.stepUp(month-1)],1];
    if(month%numOfCompoundPeriods!=0){
        Return(previouseMonth);
    };
    else{
        Return(previouseMonth(1+percent*compoundingPeriod/1200));
    };
}

//calculation of all percents

function calculateAll(numderOfMonth,AmountOfMoney,StartMonth,SimplePercent,ComplexPercent,CompoundingPeriod){
    var moneySimpleComplex = Array();
    moneySimpleComplex[startMonth] = [startSum,startSum];
    


}
