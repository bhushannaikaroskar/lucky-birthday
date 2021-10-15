
const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");

checkButton.addEventListener("click",()=>{
    console.log(dateOfBirth.value, luckyNumber.value);
});