
let dropZone = $('#dropZone');
let files = []; //массив файлов, подгруженных либо через кнопку, либо через drop

// Проверка поддержки браузером
if (typeof (window.FileReader) == 'undefined') {
    dropZone.text('Не поддерживается браузером!');
}

// Меняем стили при наведении 
dropZone[0].ondragover = function () {
    dropZone.css({
        'background': '#00000014',
    })
    return false;
};

// Возвращаем стили
dropZone[0].ondragleave = function () {
    dropZone.css({
        'background': '#00000008',
    })
    return false;
};

// Обрабатываем событие дропа файла
dropZone[0].ondrop = function (event) {
    event.preventDefault();
    dropZone.css({
        'background': '#00000008',
    });

    files.push(event.dataTransfer.files[0]);
    //console.log(files);
};

function addFile(input) {
    let file = input.files[0];

    files.push(file);

    //console.log(files);
}

