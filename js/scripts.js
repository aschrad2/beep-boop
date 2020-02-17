// Back End Logic


// Front End Logic
$(document).ready(function() {
    $("#number-form").submit(function(event) {
        var inputtedNumber = $("input#inputted-number").val();
        numberThrough(inputtedNumber);
        event.preventDefault();
    });
});

function numberThrough(inputtedNumber) {
    currentNumber = 0;
    for (i = 0; i < inputtedNumber; i++){
        console.log("<li>" + currentNumber + "<li>");
        $("ol").append("<li>" + currentNumber);
        currentNumber += 1;
    };
};