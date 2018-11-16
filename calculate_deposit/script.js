 var INPUT_DATA = new Array(document.getElementById("AmountOfMoney"), document.getElementById("NumberOfMonth"),
                            document.getElementById("StartMonth"), document.getElementById("SimplePercent"), document.getElementById("ComplexPercent"));


function isNumeric( n ) {
  return !isNaN(parseFloat(n.value)) && isFinite( n.value );
}

 function valideteAll(){
    for (var i = 0; i < INPUT_DATA.length; i++) {
       if(isNumeric(INPUT_DATA[i])){
        INPUT_DATA[i].classList.add("valide_input");
       }
       else{
        INPUT_DATA[i].classList.add("invalid_input");
       }
    }
 } 
