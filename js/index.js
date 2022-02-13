// get exact 4 digit pin 

function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }

}
// pin generator click function 
function generatePin(){
    const pin = getPin();
    document.getElementById('generate-pin-input').value = pin;

}

// pin match and bubbling
document.getElementById('key-pad').addEventListener('click', function (event){
   const keyNumbers = event.target.innerText;
   const inputNumbers = document.getElementById('input-numbers');
   const previousNumbers = inputNumbers.value;
   inputNumbers.value = previousNumbers + keyNumbers;
   if(keyNumbers == 'C' || keyNumbers == '<'){
    inputNumbers.value = '';
   }
   
   
});

// code matching with a function 
function matchCode(){
    const generatePin = document.getElementById('generate-pin-input').value;
    const keyNumbers = document.getElementById('input-numbers').value;

    const matched = document.getElementById('matched-notify');
    const unmatched = document.getElementById('unmatched-notify');
   
    if(keyNumbers == generatePin){
        matched.style.display = 'block';
        unmatched.style.display = 'none';
       
       
    }
    else{
        unmatched.style.display = 'block';
        matched.style.display = 'none';  
    }
    
};