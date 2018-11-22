 

//---------------------------------------validation of input data---------------------------------------------------------------

//check element on positive float numders 
function isNumeric(n) {                 
  return !isNaN(parseFloat(n.value)) && isFinite(n.value) && n.value>=0;
}

 //check all data on positive float numders 
 function valideteAll(INPUT_DATA){
    INPUT_DATA.forEach(function(elem){
        elem.classList.remove("valide_input");
        elem.classList.remove("invalide_input");
    })
    for (var i = 0; i < INPUT_DATA.length; i++) {
       if(isNumeric(INPUT_DATA[i]))  INPUT_DATA[i].classList.add("valide_input");       
       else  INPUT_DATA[i].classList.add("invalide_input");
       
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
    var tr=0;
    INPUT_DATA.forEach(function(elem){
        if(elem.className=="valide_input"){
            ++tr;
        }
    })
    if(tr==INPUT_DATA.length){
        return(true);
    }
    else{
        return(false);
    }
 }




//---------------------------------------calculation percents functions----------------------------------------------------------------


// data map [month:[Simple Procent Money,Complex Procent Money]]



// var dateMoneyMap = {};
// dateMoneyMap[INPUT_DATA[2].value] = [INPUT_DATA[0].value, INPUT_DATA[0].value];

 
//calculate of simple percent 
function calcSimplePercent(INPUT_DATA,dateMoneyMap,percent,startSum){
    var previouseMonth=INPUT_DATA[2].value;
    var temp=parseFloat(dateMoneyMap.get(previouseMonth)[0])+startSum*percent/1200;
   return(temp.toFixed(2));
};

//calculate of complex percent
function calcComplexPercent(INPUT_DATA,dateMoneyMap,month,percent,compoundingPeriod){
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


//calculate all percents and push received data in Map
function calculateAll(INPUT_DATA,dateMoneyMap,[amountOfMoney,numderOfMonth,startMonth,simplePercent,complexPercent,compoundingPeriod]){ 
    var tempSimplePercMoney;
    var tempComplexPercMoney;
    for (var i = 1; i < numderOfMonth; i++) {
        tempSimplePercMoney=calcSimplePercent(INPUT_DATA,dateMoneyMap,simplePercent,amountOfMoney);
        tempComplexPercMoney=calcComplexPercent(INPUT_DATA,dateMoneyMap, i,complexPercent,compoundingPeriod);
        INPUT_DATA[2].stepUp();
        dateMoneyMap.set(INPUT_DATA[2].value,[tempSimplePercMoney, tempComplexPercMoney]);
    };
    INPUT_DATA[2].stepDown(numderOfMonth-1);
};




//---------------------------------------drawing table functions-----------------------------------------------

//display table
function createTable(array){
    var table = document.getElementById("output_table");
    var iterator=array.entries();
    var row = table.insertRow();
    row.insertCell(0).innerHTML="Date";
    row.insertCell(1).innerHTML="Simple percent deposite";
    row.insertCell(1).innerHTML="Complex percent deposite";
      array.forEach(function(elem){
        var row = table.insertRow();
        temp=iterator.next().value;
        var cell0=row.insertCell(0);
        var cell1=row.insertCell(1);
        var cell2=row.insertCell(2);
        cell0.innerHTML=temp[0];
        cell1.innerHTML=array.get(temp[0])[0];
        cell2.innerHTML=array.get(temp[0])[1];
        if(parseFloat(array.get(temp[0])[0])>parseFloat(array.get(temp[0])[1])){
            cell1.className="bigger_inner";
            cell2.className="smaller_inner";
        }
        else if(parseFloat(array.get(temp[0])[0])<parseFloat(array.get(temp[0])[1])){
            cell2.className="bigger_inner";
            cell1.className="smaller_inner";
        }
        else{
            cell1.className="bigger_inner";
            cell2.className="bigger_inner";
        }
      });
};
 
//delete table 

function deleteTable() {
    var table = document.getElementById("output_table");
    while(table.lastChild) {
        table.removeChild(table.lastChild)
    } 
}

//---------------------------------------main calculation function-----------------------------------------------

//validate input data, calculate recieved values, display table
function calc(){
    var INPUT_DATA = new Array(document.getElementById("AmountOfMoney"), document.getElementById("NumberOfMonth"),document.getElementById("StartMonth"),
        document.getElementById("SimplePercent"), document.getElementById("ComplexPercent"), document.getElementById("CompoundingPeriod"));
    deleteTable();
    valideteAll(INPUT_DATA);
    if(valideteAll(INPUT_DATA)){
        var dateMoneyMap = new Map();
        dateMoneyMap.set(INPUT_DATA[2].value, [INPUT_DATA[0].value, INPUT_DATA[0].value]);
        calculateAll(INPUT_DATA ,dateMoneyMap,INPUT_DATA.map(v=>v.value));
        createTable(dateMoneyMap);
    }
}

//---------------------------------------clearing input fields function-----------------------------------------------

function clearFields(){
    var INPUT_DATA = new Array(document.getElementById("AmountOfMoney"), document.getElementById("NumberOfMonth"),document.getElementById("StartMonth"),
        document.getElementById("SimplePercent"), document.getElementById("ComplexPercent"), document.getElementById("CompoundingPeriod"));
        INPUT_DATA.forEach(function(input){
        input.value = "";
        input.className = "";
        });
    }

//=================================================================================================================================
//=========================================     BUTTONS  EVENTS   =================================================================
//=================================================================================================================================


//-----------------------------------------CALCULATE----------------------------------------------------------------


document.getElementById("button_calculate").addEventListener('click', calc);

   


//----------------------------------------clear fields ---------------------------------------------------------------

document.getElementById("button_clear-fields").addEventListener('click', clearFields);



//---------------------------------------- delete table ---------------------------------------------------------------

document.getElementById("button_delete-table").addEventListener("click", deleteTable);


