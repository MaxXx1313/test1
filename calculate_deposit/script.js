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




//---------------------------------------calculation percents functions----------------------------------------------------------------


// data map [month:[Simple Procent Money,Complex Procent Money]]

var dateMoneyMap = new Map();
dateMoneyMap.set(INPUT_DATA[2].value, [INPUT_DATA[0].value, INPUT_DATA[0].value]);


// var dateMoneyMap = {};
// dateMoneyMap[INPUT_DATA[2].value] = [INPUT_DATA[0].value, INPUT_DATA[0].value];

 
//calculation of simple percent 
function calcSimplePercent(percent,startSum){
    var previouseMonth=INPUT_DATA[2].value;
     var temp=parseFloat(dateMoneyMap.get(previouseMonth)[0])+startSum*percent/1200;
   return(temp.toFixed(2));
};

//calculation of complex percent
function calcComplexPercent(month,percent,compoundingPeriod){
    var previouseMonth = INPUT_DATA[2].value;
    var moneyInPrevMonth = dateMoneyMap.get(previouseMonth)[1];
    if(month%compoundingPeriod!=0){
        return(moneyInPrevMonth);
    }
    else{
        var temp=moneyInPrevMonth*(1+percent*compoundingPeriod/1200);
        return(temp.toFixed(2));
    }
};

//calculation of all percents

function calculateAll([amountOfMoney,numderOfMonth,startMonth,simplePercent,complexPercent,compoundingPeriod]){ 
    var tempSimplePercMoney;
    var tempComplexPercMoney;
    for (var i = 1; i < numderOfMonth; i++) {
        tempSimplePercMoney=calcSimplePercent(simplePercent,amountOfMoney);
        tempComplexPercMoney=calcComplexPercent(i,complexPercent,compoundingPeriod);
        INPUT_DATA[2].stepUp();
        dateMoneyMap.set(INPUT_DATA[2].value,[tempSimplePercMoney, tempComplexPercMoney]);
    };
    INPUT_DATA[2].stepDown(numderOfMonth-1);
};




//---------------------------------------drawing table functions-----------------------------------------------

function createTable(array){
     var table = document.getElementById("output_table");
     var iterator=array.entries();
      array.forEach(function(elem){
        var row = table.insertRow();
        temp=iterator.next().value;
        row.insertCell(0).innerHTML=temp[0];
      });
};



//=================================================================================================================================
//=========================================     BUTTONS  EVENTS   =================================================================
//=================================================================================================================================

//-----------------------------------------CALCULATE----------------------------------------------------------------

document.getElementById("button_calculate").addEventListener("click", function(){
    calculateAll(INPUT_DATA.map(v=>v.value));

});

//----------------------------------------clear fields ---------------------------------------------------------------


document.getElementById("button_clear-fields").addEventListener("click", function(){
    INPUT_DATA.forEach(function(input){
        input.value = "";
        input.className = "";
    });
});

//---------------------------------------- delete table ---------------------------------------------------------------
