// Back End Logic


// Front End Logic
// var inputtedNumber = parseInt(prompt("What is your number?: "));

function numberThrough(inputtedNumber) {
    currentNumber = 1;
    for (i = 0; i < inputtedNumber; i++){
        console.log("Hello " + currentNumber);
        currentNumber += 1;
    };
};

function printToDom() {
    $("ol").append("<li>Hello</li>")
}


$(document).ready(function() {
    $("#number-form").submit(function(event) {
        var inputtedNumber = $("input#inputted-number").val();
        // var convertedNumber = parseInt(inputtedNumber);
        console.log(inputtedNumber);
        results = numberThrough(inputtedNumber);
        printToDom(results);
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

