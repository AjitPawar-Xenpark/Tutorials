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





// const slides=document.querySelectorAll(".slide")
// var counter=0;
// /// console.log(slides)
// slides.forEach(
//     (slide,index)=>{
//         slide.style.left=`${index*100}%`
//     }
// )


// const goNext = () => {
//     if (counter < slides.length - 1) {
//     counter++;
//     slideImage();
//     }
//     };
//     const goPrev = () => {
//     if (counter != 0) {
//     counter--;
//     slideImage();
//     }
//     };

// const slideImage=()=>{
//     slides.forEach(
//         (slide)=>{
//             slide.style.transform=`translateX(-${counter*100}%)`
//         }
//     )
// }

//Slider JS Start
function first(){
    document.getElementById("slideimage").src="./images/frontend-development.webp";
}


function second(){
    document.getElementById("slideimage").src="./images/vinay_sir.jpg";
}


function third(){
    document.getElementById("slideimage").src="./images/Hire_Dedicated_Talent.jpg";
}





setInterval(first,1000);
setInterval(second,2000);
setInterval(third,4000);
