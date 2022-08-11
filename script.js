const body = document.querySelector('body');

//main container
mainContainer()

function mainContainer(){
    $('.pagecontainer').hide()
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

getDisneyBtn.addEventListener('click', function(){
    createPages(1,10)
})
welcomeContainer.append(getDisneyBtn);
}

function createPages(startNum, endNum){
    $('.get-disney-btn').hide()
    let num = 0;
    let pageContainer = document.createElement('div');
    pageContainer.className = 'pagecontainer'
    for(startNum; startNum <= endNum; startNum++){
        let pages = document.createElement('button');
        pages.className = 'pages'
        if(startNum <= endNum){
            num++;
            pages.id = num.toString();
            pages.textContent = num.toString();
        }
        pages.addEventListener('click', getDisneyData)
        pageContainer.append(pages)
        welcomeContainer.append(pageContainer)
    }
}


function getDisneyData(e){
    $('.pages').hide()
    $.get(`https://api.disneyapi.dev/characters?page=${e.target.id}`, disneyData);
}

function disneyData(characters){
    charReturnBtn()
let characterData = characters.data;
    for(let i = 0; i < characterData.length; i++){
        let char = characterData[i]
        MakeCharDiv(char)
    }
}


function charReturnBtn(){
    let charReturnBtn = document.createElement('button');
    charReturnBtn.className = 'char-return';
    charReturnBtn.textContent = 'Back for other Pages'

    charReturnBtn.addEventListener('click', function(){
        $('.char-container').hide();
        createPages(1,10);
        $('.char-return').hide()
    })

    container.append(charReturnBtn)
}


function MakeCharDiv(char){
    let charName = char.name;
    let charImg = char.imageUrl;

    let charContainer = document.createElement('div');
    charContainer.className = "char-container"
    let charDiv = document.createElement('div');
    charDiv.className = 'char-div'
    charDiv.append(charName)

    charDiv.addEventListener('click', function(){
        
        $('.char-container').hide();
        $('.char-return').hide()
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
        $('.char-return').show()
    })
}

