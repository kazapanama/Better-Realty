const btn = document.querySelector('.hamburgerBtn');

const fullMenu = document.querySelector('.mob-menu');
const menuBg = document.querySelector('.mob-menu-bg');


function openMenu(){
    fullMenu.style.display = 'block';
    menuBg.style.display = 'block';
    setTimeout(()=>menuBg.classList.add('anim-slide'),0)   
    document.body.style.overflow='hidden';
}

function closeMenu(){
    menuBg.classList.remove('anim-slide')
    setTimeout(() => {
        fullMenu.style.display = 'none'
        menuBg.style.display = 'none';},501)
    
    document.body.style.overflow = '';
}


btn.addEventListener('click', openMenu)

fullMenu.addEventListener('click',(e)=>{
    if(e.taget = fullMenu && !e.target.classList.contains('mob-menu-bg')){
        closeMenu();
    }
})








