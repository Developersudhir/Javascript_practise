const sum=document.querySelector("#sum");
// Addition
const answer=document.querySelector("#answer");
sum.addEventListener("click",()=>{
    const num1=parseInt(document.querySelector("#num1").value);
    const num2=parseInt(document.querySelector("#num2").value);
    rst=num1+num2;
    answer.innerText="Answer:"+rst;
});
const sub=document.querySelector("#sub");
// Subtraction
sub.addEventListener("click",()=>{
    const num1=parseInt(document.querySelector("#num1").value);
    const num2=parseInt(document.querySelector("#num2").value);
    rst=num1-num2;
    answer.innerText="Answer:"+rst;
});
const mul=document.querySelector("#mul");
// Multiplication
mul.addEventListener("click",()=>{
    const num1=parseInt(document.querySelector("#num1").value);
    const num2=parseInt(document.querySelector("#num2").value);
    rst=num1*num2;
    answer.innerText="Answer:"+rst;
});
const div=document.querySelector("#div");
// Division
div.addEventListener("click",()=>{
    const num1=parseInt(document.querySelector("#num1").value);
    const num2=parseInt(document.querySelector("#num2").value);
    rst=num1/num2;
    answer.innerText="Answer:"+rst;
});
clearScreen=()=>{
    document.querySelector("#num1").value="";
    document.querySelector("#num2").value="";
    answer.innerText="Here Answer"
}