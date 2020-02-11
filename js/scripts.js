// Back End Logic


// Front End Logic
$(document).ready(function() {
    $("form#play").submit(function(event) {
        event.preventDefault();
        var inputNumber = parseInt($("play").value());
        var beepBoopOutput = beepBoop(inputNumber);
    });
});