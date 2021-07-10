var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function getJoke(){
    const ajax = new XMLHttpRequest;
    const url = "https://api.chucknorris.io/jokes/random";
    ajax.open('GET', url, true);

    ajax.onreadystatechange = function(){
        if(this.status === 200){
            let data = JSON.parse(this.responseText);
            console.log(data.value);
        } 
    }
    ajax.send();
}

function onerror(){
     console.log("some http error occured") 
}

getJoke()