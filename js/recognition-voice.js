var recognizer = new webkitSpeechRecognition();

recognizer.interimResults = true;

recognizer.lang = 'ru-Ru';

recognizer.onresult = function (event) {
    var result = event.results[event.resultIndex];

    if (!$(".value-container").length) {
        $(".container").append('<div class="value-container"></div>');
    }

    if (!result.isFinal) {
        $(".value-container").append(`<div class="value">${result[0].transcript}</div>>`);
    }

};
recognizer.start();