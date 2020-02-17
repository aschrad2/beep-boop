// Back End Logic
function numberThrough(inputtedNumber) {
    currentNumber = 0;
    for (i = 0; i < inputtedNumber; i++){
        if (currentNumber.toString().indexOf('1') > -1) {
            $("ol").append("<li>Beep!");
            currentNumber += 1;
        } 
        else if (currentNumber.toString().indexOf('2') > -1) {
            $("ol").append("<li>Boop!");
            currentNumber += 1;
        } 
        else if (currentNumber.toString().indexOf('3') > -1) {
            $("ol").append("<li>I'm sorry, Dave. I'm afraid I can't do that.");
            currentNumber += 1;
        } 
        else if (currentNumber == 13) {
            $("ol").append("<li>I'm sorry, Dave. I'm afraid I can't do that.");
            currentNumber += 1;
        } 
        else if (currentNumber == 21) {
            $("ol").append("<li>Boop");
            currentNumber += 1;
        } 
        else if (currentNumber == 32) {
            $("ol").append("<li>I'm sorry, Dave. I'm afraid I can't do that.");
            currentNumber += 1;
        } 
        else {
            $("ol").append("<li>" + currentNumber);
            currentNumber += 1;
        }
    };
};

// Front End Logic
$(document).ready(function() {
    $("#number-form").submit(function(event) {
        var inputtedNumber = $("input#inputted-number").val();
        numberThrough(inputtedNumber);
        event.preventDefault();
    });
});


