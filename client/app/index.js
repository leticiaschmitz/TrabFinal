var campos = [document.querySelector('#data'),document.querySelector('#valor'), document.querySelector('#produto'), document.querySelector('#quantidade')];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form') .addEventListener('submit', function (event){
    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();
});