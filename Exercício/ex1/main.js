function maior(){
    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);
    
    if (numero1 > numero2)
        alert(numero1 + " eh maior que " + numero2);
    else
        if(numero2 > numero1)
           alert(numero2 + " eh maior que " + numero1);
        else
           alert(numero1 + " eh igual a " + numero2);
   }