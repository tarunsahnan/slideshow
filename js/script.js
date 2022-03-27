 
function next(){

    if(auto){
        clearInterval(autoMovement);
        autoMovement=setInterval(next,interval);
    }

    let current= document.querySelector('.current');

    current.classList.remove('current');

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
        // download.setAttribute('href',);
    }
    else{
        allSlide[0].classList.add('current');
    }

    download.innerHTML

}

function prev(){

    if(auto){
        clearInterval(autoMovement);
        autoMovement=setInterval(next,interval);
    }
    
    let current= document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }
    else{
        allSlide[ allSlide.length -1].classList.add('current');
    }

}

let allSlide=document.querySelectorAll('.slide');
let download = document.querySelector('a');

let auto=true, interval=5000, autoMovement;

document.querySelector(".next").addEventListener('click',next);
document.querySelector(".prev").addEventListener('click',prev);

if(auto){
    autoMovement=setInterval(next,interval);
}

