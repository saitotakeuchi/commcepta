var posId = 0;
var mainCard = document.getElementById('main-card');

var requestURL = 'js/dados.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var data = request.response;
    buildMainCard(data);
    buildCards(data);
}



function buildMainCard(dados) {
    var avatar = document.createElement('div');
    var avatarContainer = document.createElement('div');
    avatar.className = "avatar";
    avatarContainer.className = "avatarContainer";
    avatar.style.backgroundImage = 'url(img/' + dados[posId]["foto"] + ')';
    avatarContainer.appendChild(avatar);
    mainCard.appendChild(avatarContainer);

    var divDados = document.createElement('table');
    var dados1 = document.createElement('tr');
    var dados2 = document.createElement('tr');
    var dados3 = document.createElement('tr');

    divDados.className = "dados";

    dados1.innerHTML = '<td>NOME:</td><td>' + dados[posId]["nome"] + '</td>';
    dados2.innerHTML = '<td>CARGO:</td><td>' + dados[posId]["cargo"] + '</td>';
    dados3.innerHTML = '<td>IDADE:</td><td>' + dados[posId]["idade"] + '</td>';

    divDados.appendChild(dados1);
    divDados.appendChild(dados2);
    divDados.appendChild(dados3);
    mainCard.appendChild(divDados);
}

function buildCards(dados) {
    var pai = document.getElementById('container-cards'),
        childs = pai.querySelectorAll('.card');

    for (var i = 0; i < childs.length; ++i) {
        var cardDados = childs[i];

        var avatar = document.createElement('div');
        var avatarContainer = document.createElement('div');
        var ribbon = document.createElement('span');

        avatar.className = "avatar";
        avatarContainer.className = "avatarContainer";
        ribbon.className = "ribbon";

        ribbon.textContent = dados[i]["id"];

        avatar.style.backgroundImage = 'url(img/' + dados[i]["foto"] + ')';
        avatar.appendChild(ribbon);
        avatarContainer.appendChild(avatar);
        cardDados.appendChild(avatarContainer);

        var divDados = document.createElement('div');
        var dados1 = document.createElement('h2');
        var dados2 = document.createElement('p');

        dados1.textContent = dados[i]["nome"];
        dados2.textContent = dados[i]["cargo"];

        divDados.appendChild(dados1);
        divDados.appendChild(dados2);
        cardDados.appendChild(divDados);
    }
}

var clickHandler = function () {
    var div = document.getElementById('main-card');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    var cardAtivo = document.querySelector('.ativo');
    console.log(cardAtivo.classList);
    cardAtivo.classList.remove("ativo");

    this.className = "card ativo";

    posId = this.dataset.pos;

    var data = request.response;
    buildMainCard(data);
};

var anchors = document.querySelectorAll('.card');
for (var i = 0; i < anchors.length; i++) {
    var current = anchors[i];
    current.addEventListener('click', clickHandler, false);
}