
const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");

const outputBox = document.querySelector("#output-box");

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index=0; index<dob.length ; index++){
        sum += Number(dob.charAt(index));
    }

    return sum;
}

function compareValues(sum,luckyNum){
    const remainder = sum%luckyNum;
    if(remainder === 0){
        return "Your birthday is lucky 🙂"
    }else{
        return "Your birthday is not so lucky 😢"
    }
}

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob)
    if(sum && luckyNumber.value){
        if(luckyNumber.value > 0){
            outputBox.innerText = compareValues(sum,luckyNumber.value);
        }
        else{
            outputBox.innerText = "Please enter positive lucky number."
        }
        
    }else{
        outputBox.innerText = "Please enter both the values."
    }
}

checkButton.addEventListener("click",checkBirthDateIsLucky);