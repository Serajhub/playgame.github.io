var dobInput = document.querySelector("#dob-input")
var luckyNumberInput = document.querySelector("#lucky-number-input")
var checkBtn = document.querySelector("#checkBtn")
var output = document.querySelector("#output")

function dobIsLuckyOrNot(){

    var luckyNumber = parseInt(luckyNumberInput.value);
    var dob = dobInput.value;

    if (luckyNumber&&dob){

        dob = dob.replaceAll("-", "")
        var sumOfDob = 0;
        for (var index=0; index < dob.length; index++){
            sumOfDob = sumOfDob + parseInt(dob[index])
        }
        console.log(sumOfDob, luckyNumber);
        
        if (sumOfDob%luckyNumber == 0){
            output.innerText = "Your birthday is lucky 🤩";
        } else {
            output.innerText = "Your birthday is unlucky 😮‍💨";
        }
    } else{
        output.innerText = "Please input both the fields 😡"
    }
}


checkBtn.addEventListener("click", dobIsLuckyOrNot)