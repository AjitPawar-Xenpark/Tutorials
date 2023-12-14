const hamburger=document.querySelector('.hamburger');
const ul=document.querySelector('ul');
hamburger.addEventListener('click',()=>{
    ul.classList.toggle('ham_active');

    let ham_child=hamburger.firstElementChild;
    if(ul.classList.contains('ham_active'))
    {
        ham_child.classList.replace('fa-bars','fa-close');
    }
    else{
        ham_child.classList.replace('fa-close','fa-bars');
    }

})



//*********  automatic slider start  ********/
let slides=document.getElementsByClassName("slides");
let navlinks=document.getElementsByClassName("dot");
let currentSlide=0;

document.getElementById("next").addEventListener("click", ()=>{
    changeSlide(currentSlide + 1);
});


document.getElementById("prev").addEventListener("click", ()=>{
    changeSlide(currentSlide - 1);
});

function changeSlide(moveTo){
    if(moveTo>=slides.length){
        moveTo=0;
    }
    if(moveTo<0){
        moveTo=slides.length-1;
    }
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("activeDot");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("activeDot");
    currentSlide=moveTo;
}

document.querySelectorAll(".dot").forEach((bullet,bulletIndex)=>{
    bullet.addEventListener("click",()=>{
        if(currentSlide !==bulletIndex){
            changeSlide(bulletIndex);
        }
    });
});

// window.onload=setInterval(function()
// {
//     changeSlide(currentSlide+1)
// },2000);

//**** automatic slider end */













