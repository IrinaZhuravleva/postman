// Зависит от поддержки браузера, но это становится довольно хорошо с новыми браузерами: http://jsfiddle.net/3fMeL/2/

    var CSV = [
        '"1","val1","val2","val3","val4"',
        '"2","val1","val2","val3","val4"',
        '"3","val1","val2","val3","val4"'
    ].join('\n');

window.URL = window.webkitURL || window.URL;

var contentType = 'text/csv';

var csvFile = new Blob([CSV], {type: contentType});

var a = document.createElement('a');
a.download = 'my.csv';
a.href = window.URL.createObjectURL(csvFile);
a.textContent = 'Download CSV';

a.dataset.downloadurl = [contentType, a.download, a.href].join(':');

// document.body.appendChild(a);
// Таким образом, первый элемент - это объект Blob, который создает объект, который можно загрузить. https:/ / developer.mozilla.org / en-US/docs/Web/API/Blob ( http://caniuse.com / #search=blob )
//

// Следующая часть-это атрибут загрузки ссылки, который сообщает браузеру загрузить файл CSV, а не открывать его в окне браузера. ( http://caniuse.com / #feat=download )

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/constructor

export const export_csv = (arrayHeader, arrayData, delimiter, fileName) => {
    let header = arrayHeader.join(delimiter) + '\n';
    let csv = header;
    arrayData.forEach(array => {
        // debugger
        csv += array.join(delimiter) + "\n";
    });

    let csvData = new Blob([csv], {
        type: 'text/csv'
    });
    let csvUrl = URL.createObjectURL(csvData);

    let hiddenElement = document.createElement('a');
    hiddenElement.href = csvUrl;
    hiddenElement.target = '_blank';
    hiddenElement.download = fileName + '.csv';
    hiddenElement.click();
}