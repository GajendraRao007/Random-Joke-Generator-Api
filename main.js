let jokeButton = document.getElementById("joke-btn");
let showJokes = document.getElementById('display-jokes');
let jokeApi = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist,sexist,explicit&type=single&idRange=0-200';

jokeButton.addEventListener('click',()=>{
    fetch(jokeApi)
    .then(response => response.json())
    .then(data => {console.log(data)
        showJokes.textContent = data.joke;
        ;})
})