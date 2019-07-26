var requestURL = 'js/dados.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var data = request.response;
    buildMainCard(data);
    // buildCards(data);
}

var posId = 0;
var mainCard = document.getElementById('main-card')

function buildMainCard(dados) {
    var avatar = document.createElement('img');
    avatar.className = "avatar";
    avatar.src = 'img/' + dados[posId]["foto"];
    mainCard.appendChild(avatar);

    var divDados = document.createElement('div');
    var dados1 = document.createElement('p');
    var dados2 = document.createElement('p');
    var dados3 = document.createElement('p');

    divDados.className = "dados";

    dados1.innerHTML = 'NOME: <span>' + dados[posId]["nome"] + '</span>';
    dados2.innerHTML = 'CARGO: <span>' + dados[posId]["cargo"] + '</span>';
    dados3.innerHTML = 'IDADE: <span>' + dados[posId]["idade"] + '</span>';

    divDados.appendChild(dados1);
    divDados.appendChild(dados2);
    divDados.appendChild(dados3);
    mainCard.appendChild(divDados);
}

// function buildCards(dados) {

// }