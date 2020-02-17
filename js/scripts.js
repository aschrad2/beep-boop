// Back End Logic
function numberThrough(inputtedNumber) {
    currentNumber = 0;
    for (i = 0; i < inputtedNumber; i++){
        if (currentNumber.toString().indexOf('1') > -1) {
            $("ol").append("<li>Beep!");
        } else if (currentNumber.toString().indexOf('2') > -1) {
            $("ol").append("<li>Boop!");
        } else {
            $("ol").append("<li>" + currentNumber);
        }
        currentNumber += 1;
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


