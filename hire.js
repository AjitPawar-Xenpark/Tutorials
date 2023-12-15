//********* Navbar Start ********** 

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

//********* Navbar End ********** 