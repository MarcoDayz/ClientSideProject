const body = document.querySelector('body');

//main container
mainContainer()
function mainContainer(){
let container = document.createElement('div');
    container.className = "main-container";
let welcomePage = document.createElement('div');
    welcomePage.className = 'welcome-container'
let h1 = document.createElement('h1')
    h1.className = "header"
    h1.textContent = "WELCOME TO DISNEY"
welcomePage.append(h1)
container.append(welcomePage)
body.prepend(container);
}

let container = document.querySelector('.main-container');
let welcomeContainer = document.querySelector('.welcome-container');

//get info button func
GetCharacterButton()
function GetCharacterButton(){
let getDisneyBtn = document.createElement('button');
    getDisneyBtn.className = 'get-disney-btn';
    getDisneyBtn.textContent = 'GET DISNEY CHARACTERS';

getDisneyBtn.addEventListener('click', getDisneyData);

welcomeContainer.append(getDisneyBtn);
}

function getDisneyData(){
    $('.welcome-container').hide()
    $.get('https://api.disneyapi.dev/characters', disneyData);
}

function disneyData(characters){
let characterData = characters.data;
    for(let i = 0; i < characterData.length; i++){
        let char = characterData[i]
        MakeCharDiv(char)
    }
}

function MakeCharDiv(char){
    // let charId = char._id
    let charName = char.name;
    let charImg = char.imageUrl;

    let charContainer = document.createElement('div');
    charContainer.className = "char-container"
    let charDiv = document.createElement('div');
    charDiv.className = 'char-div'
    charDiv.append(charName)

    charDiv.addEventListener('click', function(){
        
        $('.char-container').hide();
        let imageContainer = document.createElement('div')
        imageContainer.className = 'image-container'
        let picture = document.createElement('img')
        picture.className = 'image'
        picture.src = charImg;
  
        imageContainer.append(picture)
        container.append(imageContainer)
        returnBtn()
    })

    charContainer.append(charDiv)
    container.append(charContainer);
}

let imgContainer = document.querySelector('.image-container');

function returnBtn(){
    let returnBtn = document.createElement('button');
    returnBtn.className = 'returnBtn';
    returnBtn.textContent = 'Return';

    $('.main-container').append(returnBtn);

    returnBtn.addEventListener('click', function(){
        $('.returnBtn').remove()
        $('img').remove();
        $('.char-container').show();
    })
}

