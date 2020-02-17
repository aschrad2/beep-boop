// Back End Logic


// Front End Logic
// var inputtedNumber = parseInt(prompt("What is your number?: "));

currentNumber = 0

$(document).ready(function() {
    $("number-input").submit(function(event) {
        var inputtedNumber = $("input#some-input").val();

        event.preventDefault()
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

