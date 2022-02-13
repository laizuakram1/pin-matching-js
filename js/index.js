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