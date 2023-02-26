const item = document.getElementsByClassName("item");
        const para_text = document.getElementsByClassName("para-text");
        console.log(item);
        // console.log(para_text);
        for (let i = 0; i < item.length; i++) {
            // const para_text = document.getElementsByClassName("para-text");
            item[i].addEventListener("click", () => {
                para_text[i].classList.toggle('active');
            })
        }