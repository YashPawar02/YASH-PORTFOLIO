const sideMenu = document.querySelector('#sidemenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openMenu(){
    sideMenu.style.transform='translate(-16rem)'
}


function closeMenu(){
    sideMenu.style.transform='translate(16rem)'
}

window.addEventListener('scroll', ()=>{
    if(scrollBy > 50){
            navBar.classList.add('bg-white','bg-opacity-50' ,'backdrop-blur-lg','shadow-sm');
            navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50');
    }else{
        navBar.classList.remove('bg-white','bg-opacity-50' ,'backdrop-blur-lg','shadow-sm');
        navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50'); 
    }
})