// Back End Logic


// Front End Logic
// var inputtedNumber = parseInt(prompt("What is your number?: "));



$(document).ready(function() {
    $("#number-form").submit(function(event) {
        var inputtedNumber = $("input#inputted-number").val();
        // var convertedNumber = parseInt(inputtedNumber);
        console.log(inputtedNumber);
        event.preventDefault()
        
        currentNumber = 1;
        for (i = 0; i < inputtedNumber; i++){
            console.log("Hello " + currentNumber)
            currentNumber += 1
        }

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

