let button=document.querySelector('.arrow'),
    link=document.querySelector('.nav');
    button.addEventListener("click",()=>{
        link.classList.toggle("display");
    })