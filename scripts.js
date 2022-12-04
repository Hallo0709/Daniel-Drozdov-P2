function get(element) {
    return document.getElementById(element);
}

function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    title.value = '';
    text.value = '';

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}


window.addEventListener('load', function() {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');
    var addButton = get('add-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});

(function(){

var data = [

    {
        name:'Kratos',
        description: 'A commemerative Pop! Funko from the early 2000s video game "God of War"',
        price: 55,
        amountbought: 2304,
        selector: 'p4'
    },
    {
        name: 'Shanks',
        description: 'A fierce Emperor of the sea from the top selling anime "One Piece"',
        price: 90,
        amountbought: 341,
        selector: 'p5'
    },
    {
        name: 'STETB',
        description: ' Silver Tempest Elite Trainer Box, A box full of 8 Silver Tempest booster packs, featuring Lugia, Vulpix, and more',
        price: 45,
        amountbought: 5390,
        selector: 'p6'
    }
];

function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.amountbought = data.amountbought;
    this.selector = data.selector;
}

var getEl = function(id){
    return document.getElementById(id);
}

var writePackageInfo = function(package) {
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        priceEl = getEl(selector + '-price'),
        amountboughtEl = getEl(selector + '-amountbought');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        priceEl.textContent = package.price;
        amountboughtEl.textContent = package.amountbought;
}

var Kratos = new Package(data[0]);
writePackageInfo(Kratos);

var Shanks = new Package(data[1]);
writePackageInfo(Shanks);

var STETB = new Package(data[2]);
writePackageInfo(STETB);


for (var i = 0; i < data.length; i++) {
    var package = new Package(data[i]);
    writePackageInfo(package);
}
}());
