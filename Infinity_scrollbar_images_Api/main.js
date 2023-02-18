 // URL Of Api
 const api = "https://dog.ceo/api/breeds/image/random";
 const container = document.querySelector(".container");
 // function for appending New Image in Container
 function appendImage(img) {
     const new_img = document.createElement("img");
     new_img.src = img;
     console.log("i Am From appendchild");
     // console.log(img);
     container.appendChild(new_img);
 }
 // function for fetching Images from Api
 async function showImages(numImg = 20) {
     let i = 0;
     while (i < numImg) {
         const resp = await fetch(api);
         console.log(resp);
         const result = await resp.json();
         // console.log(result);
         // console.log(result.message);
         // dog_img.src=result.message;
         appendImage(result.message);

         i++;
     }
 }
 showImages();
 // function for listening scroll event
 window.addEventListener('scroll', () => {
     if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
         showImages();
     }
 })
