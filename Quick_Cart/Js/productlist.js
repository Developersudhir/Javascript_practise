const brnd=document.getElementById("brnd");
const price=document.getElementById("price");
const colr=document.getElementById("colr");
const type=document.getElementById("type");
const offers=document.getElementById("offers");
brnd.addEventListener("click",()=>{
    document.getElementById("drop-block1").classList.toggle("drop-block-on-off");
    // console.log("HI");
});
price.addEventListener("click",()=>{
    document.getElementById("drop-block2").classList.toggle("drop-block-on-off");
    // console.log("HI");
});
colr.addEventListener("click",()=>{
    document.getElementById("drop-block3").classList.toggle("drop-block-on-off");
    // console.log("HI");
});
type.addEventListener("click",()=>{
    document.getElementById("drop-block4").classList.toggle("drop-block-on-off");
    // console.log("HI");
});
offers.addEventListener("click",()=>{
    document.getElementById("drop-block5").classList.toggle("drop-block-on-off");
    // console.log("HI");
});