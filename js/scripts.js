// Back End Logic


// Front End Logic
// var inputtedNumber = parseInt(prompt("What is your number?: "));

function numberThrough(inputtedNumber) {
    currentNumber = 0;
    for (i = 0; i < inputtedNumber; i++){
        console.log("<li>" + currentNumber + "<li>");
        $("ol").append("<li>" + currentNumber);
        currentNumber += 1;

    };
};

// function printToDom(results) {
//     $("ol").append("<li>Hello</li>");
//     console.log(results);
//     $("ol").append(results);

// }


$(document).ready(function() {
    $("#number-form").submit(function(event) {
        var inputtedNumber = $("input#inputted-number").val();
        numberThrough(inputtedNumber);
        event.preventDefault();
    });
});


//     $("#button").click(function() {
//         $("ol").append("<li>" + currentNumber + "<li>")
//     });
// });

// for (i = 0; i < inputtedNumber + 1; i++) {
//     console.log("Hello " + currentNumber)
//     $('p').append("Hello " + currentNumber)
//     currentNumber += 1
// }


// $(document).ready(function() {
//     $("form#play").submit(function(event) {
//         event.preventDefault();
//         var inputNumber = parseInt($("play").value());
//         var beepBoopOutput = beepBoop(inputNumber);
//     });
// });

