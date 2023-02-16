const quote=document.getElementById("quote");
const author=document.getElementById("author");
const url="https://type.fit/api/quotes";
function randomNumgen(res){
    const randomNum=Math.floor(Math.random()*1643);
    // console.log(randomNum);
    quote.innerText="\""+res[randomNum].text+"\"";
    if(res[randomNum].author==null){
        author.innerHTML="<strong>Unknown</strong>";
    }
    else{
        author.innerHTML="<strong>By "+res[randomNum].author+"</strong>";}
}
function loader(){
    const loader=document.querySelector(".loader");
    loader.style.display="none";
    console.log("I Am From Loader");
}
// Function For Fetching qoutes From API 
async function quotesGenerator(){ 
    try {
        let response= await fetch(url);
        let result= await response.json();
        // if get response then call loader :- it hides loader from screen
        if(response){
            loader();
        }
        // console.log(result);
        // function for creating random Number for accessing data from response data
        randomNumgen(result); 
    } catch (error) {
        console.log(error);
    }
}
quotesGenerator();