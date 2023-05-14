// for dropdown
const brnd=document.getElementById("brnd");
const price=document.getElementById("price");
const colr=document.getElementById("colr");
const type=document.getElementById("type");
const offers=document.getElementById("offers");

brnd.addEventListener("click",()=>{
    document.getElementById("drop-block1").classList.toggle("drop-block-on-off");
});
price.addEventListener("click",()=>{
    document.getElementById("drop-block2").classList.toggle("drop-block-on-off");
});
colr.addEventListener("click",()=>{
    document.getElementById("drop-block3").classList.toggle("drop-block-on-off");
});
type.addEventListener("click",()=>{
    document.getElementById("drop-block4").classList.toggle("drop-block-on-off");
});
offers.addEventListener("click",()=>{
    document.getElementById("drop-block5").classList.toggle("drop-block-on-off");
});

//redirecting to sign page
let redirectToSignIn=()=>{
    window.location.href="../Html/signin.html";
}