
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    } else{
        // console.log("Got 3 digit pin again return!,", pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('pin-show').value = pin;
}

document.getElementById('number').addEventListener('click', function(event){
    // console.log(event.target.innerText);
    const numberValue = event.target.innerText;
    const typeValue = document.getElementById('type-number');
    if(isNaN(numberValue)){
        if(numberValue == "C"){
            typeValue.value = "";
        }
    } else{
        
    const previousTypeValue = typeValue.value;
    const newValue = previousTypeValue + numberValue;
    typeValue.value = newValue;
    }
    
});

function verifyNumber(){
    const currentNumber = document.getElementById('pin-show').value;
    const calNumber = document.getElementById('type-number').value;
    const successText = document.getElementById('pin-success');
    const errorText = document.getElementById('pin-error');
    if(currentNumber == calNumber){
        
        successText.style.display = 'block';
        errorText.style.display = 'none';
    } else{
        
        errorText.style.display = 'block';
        successText.style.display = 'none';
    }
}

