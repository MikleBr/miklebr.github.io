let progressElem = $('#progress');
let progressBar = $('#progressBar');

function setProgress(percents) {
    if (percents <= 100) {
        progressElem.attr('value', percents);

    } else {
        percents = 100;
        progressElem.attr('value', percents);
    }

    progressBar.css({
        'width': progressElem.attr('value') + '%',
    })

    console.log(percents);
}